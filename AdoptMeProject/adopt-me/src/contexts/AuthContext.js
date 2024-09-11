import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { authServiceFactory } from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { SessionExpired } from '../components/SessionExpired/SessionExpired';


export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const authService = authServiceFactory();
    const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleSessionValidation = () => {
            if (validateUserSession()) {
                handleSessionExpiration();
            }
        };
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                document.addEventListener('click', handleSessionValidation);
            } else {
                setCurrentUser(null);
                document.removeEventListener('click', handleSessionValidation);
            }
        });
        return () => {
            unsubscribe();
            window.removeEventListener('click', handleSessionValidation);
        }
    }, [currentUser]);

    const validateUserSession = () => {
        if (currentUser) {
            const expirationTime = currentUser.stsTokenManager.expirationTime;
            const currentTime = Date.now();
            return expirationTime <= currentTime
        }
    };

    const handleSessionExpiration = async () => {
        setOpen(true);
        await authService.logout();
        setCurrentUser(null);
        navigate('/login');
    };
    const close = () => {
        setOpen(false);
    };

    const onLoginSubmit = async (data) => {
        try {
            const user = await authService.login(data);
            setCurrentUser(user);
            navigate('/catalog');

        } catch (error) { }
    };
    const onRegisterSubmit = async (values) => {
        try {
            const user = await authService.register(values);
            setCurrentUser(user);
            navigate('/catalog');

        } catch (error) { }
    };
    const onLogout = async () => {
        try {
            await authService.logout();
            setCurrentUser(null);
            navigate('/');

        } catch (error) { }
    };
    const resetAuth = () => {
        setCurrentUser({});
        navigate('/');
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        resetAuth,
        user: currentUser,
        userId: currentUser?.uid,
        userEmail: currentUser?.email,
        isAuthenticated: !!currentUser,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
                <SessionExpired open={open} onClose={close} />
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};


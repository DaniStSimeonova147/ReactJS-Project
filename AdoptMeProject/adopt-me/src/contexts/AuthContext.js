import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const authService = authServiceFactory();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });
        return unsubscribe();
    }, []);

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
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};


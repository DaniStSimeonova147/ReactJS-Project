import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from '../components/Toast/ToastContext';


export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();
    const { addToast } = useToast();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService
                .login(data);

            setAuth(result);

            navigate('/catalog');

        } catch (error) {
            addToast({ id: crypto.randomUUID(), message: "Username or password incorrect!", type: "error" })
            // toast.warning("Username or password incorrect!");
        }

    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;

        // try {
        // if (confirmPassword !== registerData.password) {
        //       throw new Error ("Passwords don't match!");
        // }
        const result = await authService.register(registerData);
        setAuth(result);

        navigate('/catalog');
        // } catch (error) {
        //     return alert(error.message);
        // }

    };

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
        navigate('/');
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            {/* <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            /> */}

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


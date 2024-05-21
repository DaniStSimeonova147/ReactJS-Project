import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';
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
            const result = await authService.login(data);

            setAuth(result);
            navigate('/catalog');

        } catch (error) { }
    };

    const onRegisterSubmit = async (values) => {
        const { ...registerData } = values;
        try {
            const result = await authService.register(registerData);

            setAuth(result);
            navigate('/catalog');

        } catch (error) { }
    };

    const onLogout = async () => {
        try {
            await authService.logout();
            setAuth({});
            navigate('/');

        } catch (error) { }
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


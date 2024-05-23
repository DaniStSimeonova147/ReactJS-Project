import React, { createContext, useContext, useState } from 'react';
import ToastContainer from '../components/Toast/ToastContainer';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (newToast) => {
        setToasts(prevToast => ([...prevToast, newToast]));
    };

    const deleteToast = (id) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };
    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastContainer
                toasts={toasts} onDelete={deleteToast} />
        </ToastContext.Provider>
    );
};

export const useToastContext = () =>{
    const context = useContext(ToastContext);
    return context;
};
import React, { useState } from 'react';
import ToastContext from './ToastContext';
import ToastContainer from './ToastConteiner';

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

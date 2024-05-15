import React, { useState } from 'react';
import ToastContext from './ToastContext';
import ToastContainer from './ToastConteiner';
import Toast from './Toast';

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (newToast) => {
    setToasts([...toasts, newToast]);
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

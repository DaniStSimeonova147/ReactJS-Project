import React from 'react';
import Toast from './Toast';

const ToastContainer = ({ toasts, onDelete }) => {
    return (
            <div className="toast-container">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        id={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onDelete={onDelete}
                    />
                ))}
            </div>
    );
};

export default ToastContainer;

import { useEffect } from 'react';

import { useToastContext } from '../../contexts/ToastContext';

export const FetchInterceptor = () => {
    const { addToast } = useToastContext();

    useEffect(() => {
        const { fetch: originalFetch } = window;
        window.fetch = async (...args) => {
            let [url, config] = args;

            try {
                const response = await originalFetch(url, config);
                if (!response.ok) {
                    handleValidation(response, addToast);
                    return Promise.reject(response);
                }
                return response;
            } 
            catch (error) {
                handleDefaultValidation(error, addToast);
                return Promise.reject(error);
            }
        }
    }, []);
};

const handleDefaultValidation = (error, addToast) => {
    addToast({ id: crypto.randomUUID(), message: "Server error!", type: "error" });
}
const handleValidation = async (response, addToast) => {
    const errorData = await response.json();
    let errorMessage = '';

    if (response.status === 401) {
        errorMessage = errorData.message;
        // logout
    } else if (response.status === 400 || response.status === 403 || response.status === 409) {
        errorMessage = errorData.message;
    } else if (response.status >= 500) {
        errorMessage = errorData.message;
        // possible additional logic for logout
    } else {
        errorMessage = `Error: ${response.statusText}`;
    }
    addToast({ id: crypto.randomUUID(), message: errorMessage, type: "error" });
};
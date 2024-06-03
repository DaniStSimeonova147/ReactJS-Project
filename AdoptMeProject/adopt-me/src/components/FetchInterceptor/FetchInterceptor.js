import { useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import { useToastContext } from '../../contexts/ToastContext';


export const FetchInterceptor = () => {

    const { addToast } = useToastContext();
    const { resetAuth } = useAuthContext();

    useEffect(() => {
        const { fetch: originalFetch } = window;
        window.fetch = async (...args) => {
            let [url, config] = args;

            try {
                const response = await originalFetch(url, config);

                if (!response.ok) {
                    handleValidation(response);
                    return Promise.reject(response);
                }
                return response;
            }
            catch (error) {
                handleDefaultValidation(error);
                return Promise.reject(error);
            }
        }
    }, []);

    const handleDefaultValidation = (error) => {
        addToast({ id: crypto.randomUUID(), message: `Server error - ${error}`, type: "error" });
    }

    const handleValidation = async (response) => {
        const errorData = await response.json();
        let errorMessage = '';

        if (response.status === 401 || response.status === 403) {
            errorMessage = errorData.message;
            resetAuth();
        } else if (response.status >= 400) {
            errorMessage = errorData.message;
        } else {
            errorMessage = `Error: ${response.statusText}`;
        }
        addToast({ id: crypto.randomUUID(), message: errorMessage, type: "error" });
    };
};

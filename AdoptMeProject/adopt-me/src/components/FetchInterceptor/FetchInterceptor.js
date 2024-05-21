import { useToast } from '../Toast/ToastContext';

export const FetchInterceptor = () => {
    const { addToast } = useToast();

    const { fetch: originalFetch } = window;
    window.fetch = async (...args) => {

        let [url, config] = args;

        try {
            const response = await originalFetch(url, config);
            if (!response.ok) {
                switch (response.status) {
                    case 403:
                        console.log("Failed request - Forbidden!");
                        addToast({ id: crypto.randomUUID(), message: "Failed request - Forbidden!", type: "error" });
                        break;

                    default:
                        break;
                }
                return Promise.reject(response);
            }
            return response;

        } catch (error) {
            console.log(error);
            addToast({ id: crypto.randomUUID(), message: "Server error!", type: "error" });
            return Promise.reject(error);
        }
    }
};
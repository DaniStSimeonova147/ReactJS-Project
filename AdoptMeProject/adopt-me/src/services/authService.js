import { requestFactory } from './requester';

const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'http://localhost:3030';  // TODO: Add server url when deployed
const url = `${baseUrl}/users`;

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: (data) => request.post(`${url}/login`, data),
        register: (data) => request.post(`${url}/register`, data),
        logout: () => request.get(`${url}/logout`),

    }
};
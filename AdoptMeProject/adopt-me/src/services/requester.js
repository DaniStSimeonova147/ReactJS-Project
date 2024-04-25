import {HEADER_CONTENT_TYPE, CONTENT_TYPE_JSON} from '../constants.js'

const requester = async (method, url, data, token) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': CONTENT_TYPE_JSON,
            };

            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };
    }

    const response = await fetch(url, options);
    if (!response.ok) {
        throw response;
    }

    if (response.status === 204) {
        return {};
    }

    const contentType = response.headers.get(HEADER_CONTENT_TYPE);
    if (response.ok && contentType === CONTENT_TYPE_JSON) {
        return response.json();
    }
};

export const requestFactory = () => {

    return {
        get: requester.bind(null, 'GET'),
        post: requester.bind(null, 'POST'),
        put: requester.bind(null, 'PUT'),
        patch: requester.bind(null, 'PATCH'),
        delete: requester.bind(null, 'DELETE'),

    }
};

import {HEADER_CONTENT_TYPE, CONTENT_TYPE_JSON} from '../constants/constants.js'

const requester = async (method, token, url, data) => {
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

    if (response.status === 204) {
        return {};
    }

    const contentType = response.headers.get(HEADER_CONTENT_TYPE);

    try {
        if (response.ok && contentType === CONTENT_TYPE_JSON) {
            const result = await response.json();
            return result;
        } else {
            throw new Error('Invalid request');
        }
    } catch (error) {
        return alert(error.message);
    }

};

export const requestFactory = (token) => {

    return {
        get: requester.bind(null, 'GET', token),
        post: requester.bind(null, 'POST', token),
        put: requester.bind(null, 'PUT', token),
        patch: requester.bind(null, 'PATCH', token),
        delete: requester.bind(null, 'DELETE', token),

    }
};

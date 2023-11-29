import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (petId) => {
    const query = new URLSearchParams({
        where: `gameId="${petId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
};
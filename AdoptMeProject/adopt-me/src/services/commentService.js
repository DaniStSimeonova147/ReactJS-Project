import { requestFactory } from './requester';

const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'http://localhost:3030';  // TODO: Add server url when deployed
const url = `${baseUrl}/data/comments`;

const request = requestFactory();

export const getAll = async (petId) => {
    const searchQuery = encodeURIComponent(`petId="${petId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);


    const result = await request.get(`${url}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
    return comments;
};

export const create = async (petId, comment) => {
    const result = await request.post(url, { petId, comment });

    return result;
};
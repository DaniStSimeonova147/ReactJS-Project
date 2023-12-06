import { requestFactory } from './requester';

const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : '';  // TODO: Add server url when deployed
const url = `${baseUrl}/data/pets`;

export const petServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const pets = Object.values(result);

        return pets;
    };

    const getOne = async (petId) => {
        const result = await request.get(`${url}/${petId}`);
        console.log(result);

        return result;
    };

    const create = async (petData) => {
        const result = await request.post(url, petData);

        return result;
    };

    const deletePet = (petId) => request.delete(`${url}/${petId}`);

    const edit = (petId, data) => request.put(`${url}/${petId}`, data);

    return {
        getAll,
        getOne,
        create,
        delete: deletePet,
        edit,
    };
};

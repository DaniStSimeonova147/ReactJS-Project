import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/pets';

export const petServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const pets = Object.values(result);

        return pets;
    };

    const getOne = async (petId) => {
        const result = await request.get(`${baseUrl}/${petId}`);
        console.log(result);
        console.log(result._ownerId);

        return result;
    };

    const create = async (petData) => {
        const result = await request.post(baseUrl, petData);

        return result;
    };

    const addComment = async (petId, data) => {
        const result = await request.post(`${baseUrl}/${petId}/comments`, data);

        return result;
    };

    const deletePet = (petId) => request.delete(`${baseUrl}/${petId}`);

    const edit = (petId, data) => request.put(`${baseUrl}/${petId}`, data);

    return {
        getAll,
        getOne,
        create,
        addComment,
        delete: deletePet,
        edit,
    };
};

import { useEffect, createContext, useContext, useCallback, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { petActionsReducer } from '../reducers/petActionsReducer';
import { useService } from "../hooks/useService";
import { petServiceFactory } from '../services/petService';

export const PetContext = createContext();

export const PetProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [pets, dispatch] = useReducer(petActionsReducer, []);

    const petService = useService(petServiceFactory);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                dispatch({type: 'GET_PET', payload: result});
            })
    }, []);


    const onCreatePetSubmit = useCallback(async (data) => {
        try {
            if (Object.values(data).includes("")) {
                throw new Error('All fields are required!')
            }
            const newPet = await petService.create(data);
            dispatch({type: 'CREATE_PET', payload: newPet});
            navigate('/catalog');
        } catch (error) {
            return alert(error.message);
        }
    });

    const onPetEditSubmit = async (values) => {
        try {
            if (Object.values(values).includes("")) {
                throw new Error('All fields are required!')
            }
            const result = await petService.edit(values._id, values);
            dispatch({type: 'EDIT_PET', payload: result})
            navigate(`/catalog/${values._id}`);
        } catch (error) {
            return alert(error.message);
        }
    };

    const deletePet = (petId) => {
        dispatch({type: 'DELETE_PET', payload: petId})
    };

    const getPet = (petId) => {
        return pets.find(pet => pet._id === petId);
    };

    const contextValues = {
        pets,
        onCreatePetSubmit,
        onPetEditSubmit,
        deletePet,
        getPet,
    };

    return (
        <PetContext.Provider value={contextValues}>
            {children}
        </PetContext.Provider>
    )
}

export const usePetContext = () => {
    const context = useContext(PetContext);

    return context;
};
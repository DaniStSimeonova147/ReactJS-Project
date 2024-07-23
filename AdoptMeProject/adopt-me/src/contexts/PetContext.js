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
                dispatch({ type: 'GET_PET', payload: result });
            })
    }, []);

    const onCreatePetSubmit = useCallback(async (data) => {
        try {
            const newPet = await petService.create(data);
            dispatch({ type: 'CREATE_PET', payload: newPet });
            navigate('/catalog');
        } catch (error) { }
    });

    const onPetEditSubmit = async (values) => {
        try {
            const result = await petService.edit(values.id, values);
            dispatch({ type: 'EDIT_PET', payload: result })
            navigate(`/catalog/${values.id}`);
        } catch (error) { }
    };

    const deletePet = (petId) => {
        dispatch({ type: 'DELETE_PET', payload: petId })
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
};

export const usePetContext = () => {
    const context = useContext(PetContext);

    return context;
};
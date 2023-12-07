import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { petServiceFactory } from '../services/petService';

export const PetContext = createContext();

export const PetProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const petService = petServiceFactory();

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result)
            })
    }, []);


    const onCreatePetSubmit = useCallback(async (data) => {
        try {
            if (Object.values(data).includes("")) {
                throw new Error('All fields are required!')
            }
            const newPet = await petService.create(data);
            setPets(state => [...state, newPet]);
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
            setPets(state => state.map(x => x._id === values._id ? result : x));
            navigate(`/catalog/${values._id}`);
        } catch (error) {
            return alert(error.message);
        }
    };

    const deletePet = (petId) => {
        setPets(state => state.filter(pet => pet._id !== petId));
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
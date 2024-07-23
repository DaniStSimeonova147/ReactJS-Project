import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export const petServiceFactory = () => {

    const petsCollectionRef = collection(db, 'pets');

    const getAll = async () => {
        const snapshot = await getDocs(petsCollectionRef);
        const pets = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return pets;
    };

    const getOne = async (petId) => {
        const petDocumentRef = doc(db, 'pets', petId)
        const snapshot = await getDoc(petDocumentRef);
        const pet = { id: snapshot.id, ...snapshot.data() };
        return pet;
    };

    const create = async (petData) => {
        const petDocumentRef = await addDoc(petsCollectionRef, petData);
        const pet = { id: petDocumentRef.id, ...petData };
        return pet;
    };

    const deletePet = async (petId) => {
        const petDocumentRef = doc(db, 'pets', petId);
        await deleteDoc(petDocumentRef);
    };

    const edit = async (petId, data) => {
        const petDocumentRef = doc(db, 'pets', petId);
        await updateDoc(petDocumentRef, data);
        const pet = { id: petId, ...data };
        return pet;
    };

    return {
        getAll,
        getOne,
        create,
        delete: deletePet,
        edit,
    };
};

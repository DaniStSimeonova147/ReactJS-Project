import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { usePetContext } from '../../contexts/PetContext';
import { useService } from '../../hooks/useService';
import { petServiceFactory } from '../../services/petService';
import { petSchema } from '../PetForm/validations';
import { PetForm } from '../PetForm/PetForm';


export const EditPet = () => {
    const { onPetEditSubmit } = usePetContext();
    const { petId } = useParams();
    const petService = useService(petServiceFactory);

    const [petData, setPetData] = useState();

    useEffect(() => {
        petService.getOne(petId)
            .then((result) => {
                setPetData(result);
            });
    }, [petId]);

    return (
        <section id="edit-page" className="auth">
            <div className="editPage">
                <h2>Edit pet</h2>
                <Formik
                    initialValues={petData}
                    validationSchema={petSchema}
                    onSubmit={(values) => {
                        onPetEditSubmit(values);
                    }}
                    enableReinitialize
                >
                    <PetForm buttonType="Edit Pet"></PetForm>
                </Formik>
            </div>
        </section>

    );
}
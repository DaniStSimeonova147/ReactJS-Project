import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Formik } from 'formik';
import { Card, Container, Typography } from '@mui/material';

import { usePetContext } from '../../contexts/PetContext';
import { useService } from '../../hooks/useService';
import { petServiceFactory } from '../../services/petService';
import { petSchema } from '../PetForm/validations';
import { PetForm } from '../PetForm/PetForm';
import { styles } from '../Login/styles';

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
        <Container component="main" maxWidth="md" margin="auto">
            <Card style={styles.form}>
                <Typography style={styles.header} variant="h1">
                    Edit pet
                </Typography>
                <Formik
                    initialValues={petData || { name: '', type: '', age: '', description: '', imageUrl: '', location: '', contact: '' }}
                    validationSchema={petSchema}
                    onSubmit={(values) => {
                        onPetEditSubmit(values);
                    }}
                    enableReinitialize
                >
                    <PetForm buttonType="Edit Pet"></PetForm>
                </Formik>
            </Card >
        </Container>
    );
};
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Field, Formik } from 'formik';

import { Button } from '@mui/material';
import { useService } from '../../hooks/useService';
import { usePetContext } from '../../contexts/PetContext';
import { petServiceFactory } from '../../services/petService';

import { petSchema } from './validations';
import { ErrorHandlingStyled } from '../CardStyled/CardStyled';

export const PetForm = ({ card }) => {
  const { onCreatePetSubmit, onPetEditSubmit } = usePetContext();
  const { petId } = useParams();
  const petService = useService(petServiceFactory);
  const [petData, setPetData] = useState();

  useEffect(() => {
    if (card === "edit" && petId) {
      petService.getOne(petId)
        .then((result) => {
          setPetData(result);
        });
    }
  }, [card, petId]);

  const initialValues = petData || {
    name: '',
    type: '',
    age: '',
    description: '',
    imageUrl: '',
    location: '',
    contact: '',
  };

  const handleSubmit = (valuse) => {
    if (card === "edit") {
      onPetEditSubmit(valuse)
    } else {
      onCreatePetSubmit(valuse)
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={petSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <Form>
        <Field name="name" type="text" label="Name" component={ErrorHandlingStyled} variant="filled" />
        <Field name="type" type="text" label="Type" component={ErrorHandlingStyled} variant="filled" />
        <Field name="age" type="number" label="Age" component={ErrorHandlingStyled} variant="filled" />
        <Field name="description" as="textarea" type="text" label="Description" component={ErrorHandlingStyled} variant="filled" />
        <Field name="imageUrl" type="text" label="Link to image" component={ErrorHandlingStyled} variant="filled" />
        <Field name="location" type="text" label="Location" component={ErrorHandlingStyled} variant="filled" />
        <Field name="contact" type="text" label="Contacts (phone number, email...)" component={ErrorHandlingStyled} variant="filled" />
        <Button
          type="submit"
          variant="contained"
          color="info"
          fullWidth
          sx={{ mt: 3 }}
        >
          {card === "edit" ? "Edit Pet" : "Add Pet"}
        </Button>
      </Form>
    </Formik>
  );
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Field, Formik } from 'formik';
import { Button, Card, Container, Typography } from '@mui/material';

import { useService } from '../../hooks/useService';
import { usePetContext } from '../../contexts/PetContext';
import { petServiceFactory } from '../../services/petService';
import { styles } from './styles';
import { ErrorHandling, petSchema } from './validations';

export const PetForm = ({ card }) => {
  const { onCreatePetSubmit, onPetEditSubmit } = usePetContext();
  const { petId } = useParams();
  const petService = useService(petServiceFactory);
  const [petData, setPetData] = useState();

  useEffect(() => {
    if (card === 'edit' && petId) {
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
  {
    return (
      <Container component="main" maxWidth="md" margin="auto">
        <Card style={styles.form}>
          <Typography style={styles.header} variant="h1">
            {card === "edit" ? "Edit Pet" : "Add Pet"}
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={petSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            <Form >
              <Field name="name" type="text" label="Name" component={ErrorHandling} />
              <Field name="type" type="text" label="Type" component={ErrorHandling} />
              <Field name="age" type="number" label="Age" component={ErrorHandling} />
              <Field name="description" as="textarea" type="text" label="Description" component={ErrorHandling} />
              <Field name="imageUrl" type="text" label="Link to image" component={ErrorHandling} />
              <Field name="location" type="text" label="Location" component={ErrorHandling} />
              <Field name="contact" type="text" label="Contacts (phone number, email...)" component={ErrorHandling} />
              <Button
                type="submit"
                variant="contained"
                color="info"
                fullWidth
                sx={styles.button}
              >
                {card === "edit" ? "Edit Pet" : "Add Pet"}
              </Button>
            </Form>
          </Formik>
        </Card>
      </Container>
    );
  };
};

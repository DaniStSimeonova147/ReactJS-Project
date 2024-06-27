import { usePetContext } from '../../contexts/PetContext';

import { Formik } from "formik";
import { Card, Typography } from '@mui/material';

import { petSchema } from '../PetForm/validations';
import { PetForm } from '../PetForm/PetForm';
import { styles } from '../Login/styles';

const initialValues = {
  name: "",
  type: "",
  age: "",
  description: "",
  imageUrl: "",
  location: "",
  contact: "",
};
export const CreatePet = () => {
  const { onCreatePetSubmit } = usePetContext();

  return (
    <Card style={styles.form}>
      <Typography style={styles.header} variant="h1">
        Add pet
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={petSchema}
        onSubmit={(values) => {
          onCreatePetSubmit(values);
        }}
      >
        <PetForm buttonType="Add Pet"></PetForm>
      </Formik>
    </Card>
  );
};

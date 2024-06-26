import { Form, Field } from 'formik';
import { Button } from '@mui/material';


import { styles } from '../../components/Login/styles';
import { ErrorHandling } from './validations';

export const PetForm = ({ buttonType }) => {
  {
    return (
      <Form>
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
          {buttonType}
        </Button>
      </Form>
    );
  };
};

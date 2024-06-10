import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { Grid, TextField, Typography, Button } from '@mui/material';

import { AuthContext } from '../../contexts/AuthContext';
import { loginSchema } from './validations';
import { styles } from './styles';

const initialValues = {
  email: '',
  password: ''
}

const ErrorHandling = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    {...field}
    {...props}
    error={touched[field.name] && !!errors[field.name]}
    helperText={touched[field.name] && errors[field.name]}
    fullWidth
    margin='dense'
  />
);
export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);

  return (
    <Grid style={styles.form}>
      <Typography style={styles.header} variant='h1' >
        Adopt ME
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          onLoginSubmit(values);
        }}
      >
        {() => (
          <Form  >
            <Field
              name='email'
              type='email'
              label='Email'
              component={ErrorHandling}
            />
            <Field
              name='password'
              type='password'
              label='Password'
              component={ErrorHandling}
            />
            <Button
              type='submit'
              variant='contained'
              color='info'
              fullWidth
              sx={styles.button}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant='overline'>
        Don't have account? <Link to='/register'>Register</Link>
      </Typography>
    </Grid>
  );
};
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Card, Button, Typography } from '@mui/material';

import { styles } from './styles';
import { loginSchema, ErrorHandling } from './validations';
import { AuthContext } from '../../contexts/AuthContext';


const initialValues = {
  email: "",
  password: ""
}

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);

  return (
    <Card style={styles.form}>
      <Typography style={styles.header} variant="h1" >
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
              name="email"
              type="email"
              label="Email"
              component={ErrorHandling}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              component={ErrorHandling}
            />
            <Button
              type="submit"
              variant="contained"
              color="info"
              fullWidth
              sx={styles.button}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="overline">
        Don't have account? <Link to="/register">Register</Link>
      </Typography>
    </Card>
  );
};
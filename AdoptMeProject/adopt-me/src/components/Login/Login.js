import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Button, Container, Typography } from '@mui/material';

import { loginSchema } from './validations';
import { AuthContext } from '../../contexts/AuthContext';
import { CardStyled, ErrorHandlingStyled } from '../CardStyled/CardStyled';

const initialValues = {
  email: "",
  password: ""
}

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);

  return (
    <Container component="main" maxWidth="sm" margin="auto">
      <CardStyled headerContent="Adopt ME">
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
                component={ErrorHandlingStyled}
              />
              <Field
                name="password"
                type="password"
                label="Password"
                component={ErrorHandlingStyled}
              />
              <Button
                type="submit"
                variant="contained"
                color="info"
                fullWidth
                sx={{
                  marginTop: '20px',
                  marginBottom: '10px',
                  backgroundColor: 'black',
                }}
              >
                Login
              </Button>
              <Typography variant="overline">
                Don't have account? <Link to="/register">Register</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </CardStyled>
    </Container>
  );
};
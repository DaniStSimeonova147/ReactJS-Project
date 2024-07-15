import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Button, Container, Typography } from '@mui/material';

import { registerSchema } from './validations';
import { AuthContext } from '../../contexts/AuthContext';
import { CardStyled, ErrorHandlingStyled } from '../CardStyled/CardStyled';

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    return (
        <Container component="main" maxWidth="sm" margin="auto">
            <CardStyled headerContetnt="Adopt ME">
                <Formik
                    initialValues={initialValues}
                    validationSchema={registerSchema}
                    onSubmit={(values) => {
                        onRegisterSubmit(values);
                    }}
                >
                    {() => (
                        <Form >

                            <Field
                                name='email'
                                type='email'
                                label='Email'
                                component={ErrorHandlingStyled}
                            />
                            <Field
                                name='password'
                                type='password'
                                label='Password'
                                component={ErrorHandlingStyled}
                            />
                            <Field
                                name='confirmPassword'
                                type='password'
                                label='Repeat Password'
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
                                Register
                            </Button>
                            <Typography variant="overline">
                                Have an account? <Link to="/login">LogIn</Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </CardStyled>
        </Container>
    );
};
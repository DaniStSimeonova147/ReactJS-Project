import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Card, Container, Button, Typography } from '@mui/material';


import { styles } from '../Login/styles';
import { registerSchema, ErrorHandling } from './validations';
import { AuthContext } from '../../contexts/AuthContext';

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    return (
        <Container component="main" maxWidth="sm" margin="auto">
            <Card style={styles.form} >
                <Typography style={styles.header} variant="h1" >
                    Adopt ME
                </Typography>
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
                                component={ErrorHandling}
                            />
                            <Field
                                name='password'
                                type='password'
                                label='Password'
                                component={ErrorHandling}
                            />
                            <Field
                                name='confirmPassword'
                                type='password'
                                label='Repeat Password'
                                component={ErrorHandling}
                            />
                            <Button
                                type='submit'
                                variant='contained'
                                color='info'
                                fullWidth
                                sx={styles.button}
                            >
                                Register
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Typography variant="overline">
                    Have an account? <Link to="/login">LogIn</Link>
                </Typography>
            </Card>
        </Container>
    );
};
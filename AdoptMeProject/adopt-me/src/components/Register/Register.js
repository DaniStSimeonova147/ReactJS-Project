import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { Grid, TextField, Typography, Button } from '@mui/material';

import { AuthContext } from '../../contexts/AuthContext';
import { registerSchema } from './validations';
import { styles } from '../Login/styles';

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
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

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);

    return (
        <Grid style={styles.form} >
            <Typography style={styles.header} variant='h1' >
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
                        <Field
                            name="confirmPassword"
                            type="password"
                            label="Repeat Password"
                            component={ErrorHandling}
                        />
                        <Button
                            type="submit"
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
            <Typography variant='overline'>
                Have an account? <Link to="/login">LogIn</Link>
            </Typography>
        </Grid>
        
    );
};
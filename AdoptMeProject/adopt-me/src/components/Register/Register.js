import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { registerSchema } from './validations';

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);

    return (
        <section id="register-page" className="content auth">
            <div className="login-register-div">
                <div className="login-register-box">
                    <h1>Adopt ME</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={registerSchema}
                        onSubmit={(values) => {
                            onRegisterSubmit(values);
                        }}
                    >
                        {() => (
                            <Form id="register">
                                <label htmlFor="email">Email:</label>
                                <Field
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                />
                                <ErrorMessage name="email" component="span" style={{ color: 'red' }} />
                                <label htmlFor="pass">Password:</label>
                                <Field
                                    name="password"
                                    type="password"
                                    id="register-password"
                                    placeholder="Password"
                                />
                                <ErrorMessage name="password" component="span" style={{ color: 'red' }} />
                                <label htmlFor="con-pass">Confirm Password:</label>
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Repeat Password"
                                />
                                <ErrorMessage name="confirmPassword" component="span" style={{ color: 'red' }} />
                                <button type="submit">Register</button>
                            </Form>
                        )}
                    </Formik>
                    <p>
                        Have an account? <Link to="/login">LogIn</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
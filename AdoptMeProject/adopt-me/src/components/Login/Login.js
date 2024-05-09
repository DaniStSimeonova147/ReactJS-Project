import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { loginSchema } from './validations';

const initialValues = {
  email: '',
  password: ''
}

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);

  return (
    <section id="login-page" className="auth">
      <div className="login-register-div">
        <div className="login-register-box">
          <h1>Adopt ME</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              onLoginSubmit(values);
            }}
          >
            {() => (
              <Form id="login" >
                <p>
                  <label>Email:</label>
                  <Field
                    name='email'
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component="span" style={{ color: 'red' }} />
                </p>
                <p>
                  <label>Password:</label>
                  <Field
                    name='password'
                    type="password"
                    id="login-password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="span" style={{ color: 'red' }} />
                </p>
                <button type="submit">LogIn</button>
              </Form>
            )}
          </Formik>
          <p>
            Don't have account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
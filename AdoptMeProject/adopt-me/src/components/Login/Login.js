import { useContext, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
};

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  }, onLoginSubmit);

  const [errors, setErrors] = useState({
    isRequiredEmail: false,
    isValidEmail: false,
    isRequiredPassword: false,
  });

  const onEmailBlur = useCallback(() => {
    const rgx = /^(.+)@(.+)$/;

    if (values.email === "") {
      setErrors(state => ({ ...state, isRequiredEmail: true, isValidEmail: false }));
    } else if (!rgx.test(values.email)) {
      setErrors(state => ({ ...state, isRequiredEmail: false, isValidEmail: true }));
    } else {
      setErrors(state => ({ ...state, isRequiredEmail: false, isValidEmail: false }));
    };
  }, [values]);

  const onPasswordBlur = useCallback(() => {
    if (values.password === "") {
      setErrors(state => ({ ...state, isRequiredPassword: true }));
    } else {
      setErrors(state => ({ ...state, isRequiredPassword: false }));
    }
  }, [values]);


  return (
    <section id="login-page" className="auth">
      {/* Start Login Section*/}
      <div className="login-register-div">
        <div className="login-register-box">
          <h1>Adopt ME</h1>
          {/* Start Login Form*/}
          <form id="login" method="POST" onSubmit={onSubmit}>
            <p>
              <label>Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name={LoginFormKeys.Email}
                value={values[LoginFormKeys.Email]}
                onChange={changeHandler}
                onBlur={onEmailBlur}
              />
              {errors.isRequiredEmail && <span style={{ color: "red" }}>Email is required!</span>}
              {errors.isValidEmail && <span style={{ color: "red" }}>Invalid email!</span>}
            </p>
            <p>
              <label>Password:</label>
              <input
                type="password"
                id="login-password"
                placeholder="Password"
                name={LoginFormKeys.Password}
                value={values[LoginFormKeys.Password]}
                onChange={changeHandler}
                onBlur={onPasswordBlur}
              />
              {errors.isRequiredPassword && <span style={{ color: "red" }}>Password is required!</span>}
            </p>
            {/* Login Button*/}
            <button type="submit">LogIn</button>
          </form>
          <p>
            Don't have account? <Link to="/register">Register</Link>
          </p>
          {/* Link to Register Page*/}
        </div>
      </div>
    </section>
  );
};
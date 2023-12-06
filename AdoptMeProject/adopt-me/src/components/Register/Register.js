import { useContext, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  }, onRegisterSubmit);

  const [errors, setErrors] = useState({
    isRequiredEmail: false,
    isValidEmail: false,
    isRequiredPassword: false,
    isRequiredRepeatPassword: false,
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

  const onRepeatPasswordBlur = useCallback(() => {
    if (values.repeatPassword === "") {
      setErrors(state => ({ ...state, isRequiredRepeatPassword: true }));
    } else {
      setErrors(state => ({ ...state, isRequiredRepeatPassword: false }));
    }
  }, [values]);


  return (
    <section id="register-page" className="content auth">
      <div className="login-register-div">
        <div className="login-register-box">
          <h1>Adopt ME</h1>
          {/* Start Register Form */}
          <form id="register" method="POST" onSubmit={onSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={changeHandler}
              onBlur={onEmailBlur}
            />
            {errors.isRequiredEmail && <span style={{ color: "red" }}>Email is required!</span>}
            {errors.isValidEmail && <span style={{ color: "red" }}>Invalid email!</span>}

            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
              value={values.password}
              onChange={changeHandler}
              onBlur={onPasswordBlur}
            />
            {errors.isRequiredPassword && <span style={{ color: "red" }}>Password is required!</span>}

            <label htmlFor="con-pass">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="Repeat Password"
              value={values.confirmPassword}
              onChange={changeHandler}
            />
             {errors.isRequiredRepeatPassword && <span style={{ color: "red" }}>Repeat password is required!</span>}

            {/* Register Button */}
            <button type="submit">Register</button>
          </form>
          <p>
            Have an account? <Link to="/login">LogIn</Link>
          </p>
        </div>
        {/* Link to Login Page */}
      </div>
    </section>
  );
};
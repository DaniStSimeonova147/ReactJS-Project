import { useContext } from "react";
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
            />
            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
              value={values.password}
              onChange={changeHandler}
            />
            <label htmlFor="con-pass">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="Repeat Password"
              value={values.confirmPassword}
              onChange={changeHandler}
            />
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
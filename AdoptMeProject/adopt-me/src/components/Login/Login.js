import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
};

export const Login = ({
  //auth,
}) => {
  //const {onLoginSubmit} = auth;
  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  }, onLoginSubmit);

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
          />
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
          />
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
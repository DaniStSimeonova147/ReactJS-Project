import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            {/* Link to Home Page */}
            <Link to="/">
              <img width="50px" src="/images/homeLogo.png" alt="img1" />
            </Link>
            {/* Link to Home Page */}
            <Link className="home" to="/">
              <i>Adopt ME</i>
            </Link>
          </div>
          <div className="nav-links">
            <ul className="nav-group">
              <li className="nav-item">
                {/* Link to Catalog Page */}
                <Link to="/catalog">
                  <i>Wait List</i>
                </Link>
              </li>
              {/*For Guest User*/}
              {!isAuthenticated && (
                <li className="nav-item">
                  {/* Link to Login Page */}
                  <Link to="/login">
                    <i>Login</i>
                  </Link>
                </li>
              )}
              {!isAuthenticated && (
                <li className="nav-item">
                  {/* Link to Register Page */}
                  <Link to="/register">
                    <i>Register</i>
                  </Link>
                </li>
              )}
              {/*For login users*/}
              {isAuthenticated && (
                <li className="nav-item">
                  {/* Link to Add Photo Page */}
                  <Link to="/create-pet">
                    <i>Add Pet</i>
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  {/* Link to Logout Page */}
                  <Link to="/Logout">
                    <i>Logout</i>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
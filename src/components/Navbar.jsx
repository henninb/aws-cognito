import React from 'react';
import { Auth } from 'aws-amplify';

export default function Navbar(props) {
  const handleLogOut = async (event) => {
    event.preventDefault();
    try {
      Auth.signOut();
      props.auth.setAuthenticatedStatus(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="hexal-logo.png" width="112" height="28" alt="hexal logo" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/products" className="navbar-item">
            Products
          </a>
          <a href="/admin" className="navbar-item">
            Admin
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {props.auth.isAuthenticated && (
              <div>
                <a href="/" className="button is-light" onClick={handleLogOut}>
                  Log out
                </a>
              </div>
            )}
            <div className="buttons">
              {!props.auth.isAuthenticated && (
                <div>
                  <a href="/register" className="button is-primary">
                    <strong>Register</strong>
                  </a>
                  <a href="/login" className="button is-light">
                    Log in
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


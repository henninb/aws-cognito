import React, { useState, useEffect } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";

function ForgotPassword() {
  const [state, setState] = useState({
    email: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  });

  useEffect(() => {
    clearErrorState();
  }, []);

  const clearErrorState = () => {
    setState({
      ...state,
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  const forgotPasswordHandler = async event => {
    event.preventDefault();

    // Form validation
    clearErrorState();
    const error = Validate(event, state);
    if (error) {
      setState({
        ...state,
        errors: { ...state.errors, ...error }
      });
    }

    // AWS Cognito integration here
  };

  const onInputChange = event => {
    setState({
      ...state,
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  return (
    <section className="section auth">
      <div className="container">
        <h1>Forgot your password?</h1>
        <p>
          Please enter the email address associated with your account and we'll
          email you a password reset link.
        </p>
        <FormErrors formerrors={state.errors} />

        <form onSubmit={forgotPasswordHandler}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                type="email"
                className="input"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={state.email}
                onChange={onInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <a href="/forgotpassword">Forgot password?</a>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ForgotPassword;


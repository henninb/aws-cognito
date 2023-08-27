import React, { useState } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  });

  const clearErrorState = () => {
    setState({
      ...state,
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  };

  const handleSubmit = async event => {
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
    const { username, email, password, firstname, lastname } = state;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
          name: firstname,
          family_name: lastname
        }
      });
      // Redirect after successful signup if needed
      navigate("/welcome")
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      setState({
        ...state,
        errors: {
          ...state.errors,
          cognito: err
        }
      });
    }
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
        <h1>Register</h1>
        <FormErrors formerrors={state.errors} />

        <form onSubmit={handleSubmit}>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                id="firstname"
                aria-describedby="firstnameHelp"
                placeholder="Enter Fistname"
                value={state.firstname}
                onChange={onInputChange}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                id="lastname"
                aria-describedby="lastnameHelp"
                placeholder="Enter Lastname"
                value={state.lastname}
                onChange={onInputChange}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                id="username"
                aria-describedby="userNameHelp"
                placeholder="Enter username"
                value={state.username}
                onChange={onInputChange}
              />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
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
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={onInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                id="confirmpassword"
                placeholder="Confirm password"
                value={state.confirmpassword}
                onChange={onInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
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
              <button className="button is-success">Register</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;

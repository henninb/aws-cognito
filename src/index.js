import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import 'bulma/css/bulma.min.css';
import './index.css';
import App from './App';
// import Amplify from 'aws-amplify';
import { Amplify } from 'aws-amplify'
import config from './config'
// import * as serviceWorker from './serviceWorker';

Amplify.configure({
  Auth: {
    manditorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    clientId: config.cognito.APP_CLIENT_ID
  }
});

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
      <App />
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

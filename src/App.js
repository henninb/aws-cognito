import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ProductAdmin from './components/ProductAdmin';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faEdit);

class App extends Component {
  state = {
    isAuthenticated : false,
    authenticatedUser: null
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/admin" element={<ProductAdmin />} />
              <Route exact path="/login" element={<LogIn />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/forgotpassword" element={<ForgotPassword />} />
              <Route exact path="/forgotpasswordverification" element={<ForgotPasswordVerification />} />
              <Route exact path="/changepassword" element={<ChangePassword />} />
              <Route exact path="/changepasswordconfirmation" element={<ChangePasswordConfirm />} />
              <Route exact path="/welcome" element={<Welcome />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

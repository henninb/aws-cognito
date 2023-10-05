import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';
library.add(faEdit);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const authProperties = {
    isAuthenticated,
    authenticatedUser,
    setAuthenticatedStatus: setIsAuthenticated,
    setAuthenticatedUser,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar auth={authProperties} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<ProductAdmin />} />
            <Route path="/login" element={<LogIn auth={authProperties} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route
              path="/forgotpasswordverification"
              element={<ForgotPasswordVerification />}
            />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route
              path="/changepasswordconfirmation"
              element={<ChangePasswordConfirm />}
            />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

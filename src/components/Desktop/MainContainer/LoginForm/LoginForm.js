import React from 'react';
import './LoginForm.css';
import { useDispatch } from 'react-redux';
import { closeLoginForm } from '../../../../slices/FormPopupSlice';

const LoginForm = () => {
    const dispatch = useDispatch();
  return (
    <div className="login-form">
    <h2>Login</h2>
    {/* Add your login form fields here */}
    <button className="close-button" onClick={() => dispatch(closeLoginForm())}>
      Close
    </button>
  </div>
  )
}

export default LoginForm

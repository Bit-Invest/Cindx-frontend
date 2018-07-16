import React from 'react';
import { Link } from 'react-router-dom';

export const CheckEmailForm = props => {
  return (
    <form className="Check-email__RegistrationForm">
      <div className="title">Please, check your email</div>
      <div className="success">
        We have sent you instructions to reset your password.
      </div>
      <div className="success-img" alt="" />
      <div className="transitionAccount">
        Return to <Link to="/registration/sign-in"><span>Sign In</span></Link>
      </div>
    </form>
  );
};

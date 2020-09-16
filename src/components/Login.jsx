import React from 'react';
import logo from '../images/padlock.png';
import CustomInput from './Inputs/CustomInput';
import { nameValidator, emailValidator, passwordValidator } from './Inputs/validators';
import { StyledButton } from './Inputs/StyledInput';

const Login = () => {
  return (
    <div className="main">
      <div className="logo">
        <div>
          <img src={logo} />
          <p>Login</p>
        </div>
      </div>
      <CustomInput label="Email" validate={emailValidator} />
      <CustomInput label="Password" validate={passwordValidator} />
      <StyledButton>Login</StyledButton>
      <div className="buttons">
        <a>Forgot password</a>
        <a>Sign up</a>
      </div>
      <h5>Copyright © My Website 2020.</h5>
    </div>
  );
};

export default Login;

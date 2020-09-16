import React from 'react';
import logo from '../images/padlock.png';
import CustomInput from './Inputs/CustomInput';
import { nameValidator, emailValidator, passwordValidator } from './Inputs/validators';
import { StyledButton } from './Inputs/StyledInput';

const Signup = () => {
  return (
    <div className="main">
      <div className="logo">
        <div>
          <img src={logo} />
          <p>Signup</p>
        </div>
      </div>
      <div className="nameInput">
        <div>
          <CustomInput
            label="First name"
            validate={nameValidator}
            onChange={() => {
              console.log('changed');
            }}
          />
        </div>
        <div>
          <CustomInput label="Last name" validate={nameValidator} />
        </div>
      </div>
      <CustomInput label="Email" validate={emailValidator} />
      <CustomInput label="Password" validate={passwordValidator} />
      <StyledButton>Sign up</StyledButton>
      <div className="buttons">
        <a>Forgot password</a>
        <a>Sign up</a>
      </div>
      <h5>Copyright © My Website 2020.</h5>
    </div>
  );
};

export default Signup;

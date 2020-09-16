import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { StyledButton } from './Inputs/StyledComponents';
import CustomInput from './Inputs/CustomInput';

import logo from '../images/padlock.png';
import { nameValidator, emailValidator, passwordValidator } from './validators/validators';

const Signup = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const signupHandler = () => {
    if (
      nameValidator(name) &&
      nameValidator(lastName) &&
      emailValidator(email) &&
      passwordValidator(password)
    ) {
      localStorage.setItem('firstName', name);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      history.push('/login');
    }
  };

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
            setValue={setName}
            value={name}
            label="First name"
            validate={nameValidator}
            onChange={() => {
              console.log('changed');
            }}
          />
        </div>
        <div>
          <CustomInput
            setValue={setLastName}
            value={lastName}
            label="Last name"
            validate={nameValidator}
          />
        </div>
      </div>
      <CustomInput setValue={setEmail} value={email} label="Email" validate={emailValidator} />
      <CustomInput
        setValue={setPassword}
        value={password}
        label="Password"
        validate={passwordValidator}
      />
      <StyledButton onClick={signupHandler}>Sign up</StyledButton>
      <div className="buttons">
        <a>Forgot password</a>
        <NavLink to="/login">Already have an account? Login</NavLink>
      </div>
      <h5>Copyright © My Website 2020.</h5>
    </div>
  );
};

export default Signup;

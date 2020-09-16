import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/padlock.png';
import CustomInput from './Inputs/CustomInput';
import { nameValidator, emailValidator, passwordValidator } from './validators/validators';
import { StyledButton } from './Inputs/StyledComponents';

const Login = () => {
  const [email, setEmail] = useState(localStorage.getItem('myEmail'));
  const [password, setPassword] = useState(localStorage.getItem('myPassword'));
  const [rememberMe, setRememberMe] = useState(true);

  const tokenCreator = () => {
    if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
      if (rememberMe) {
        localStorage.setItem('myEmail', email);
        localStorage.setItem('myPassword', password);
      } else {
        localStorage.removeItem('myEmail');
        localStorage.removeItem('myPassword');
      }
      console.log('correct');
      localStorage.setItem('token', '4eC39HqLyjWDarjtT1zdp7dc');
      window.location.reload();
      return;
    }
    console.log('incorrect');
  };

  return (
    <div className="main">
      <div className="logo">
        <div>
          <img src={logo} />
          <p>Login</p>
        </div>
      </div>
      <CustomInput setValue={setEmail} value={email} label="Email" validate={emailValidator} />
      <CustomInput
        setValue={setPassword}
        value={password}
        label="Password"
        validate={passwordValidator}
      />
      <div
        className="checkbox"
        onClick={() => {
          setRememberMe(!rememberMe);
        }}>
        <input type="checkbox" id="remember" checked={rememberMe}></input>
        <label for="remember">Remember me</label>
      </div>
      <form>
        <StyledButton onClick={tokenCreator}>Login</StyledButton>
      </form>
      <div className="buttons">
        <a>Forgot password</a>
        <NavLink to="/signup">Sign up</NavLink>
      </div>
      <h5>Copyright © My Website 2020.</h5>
    </div>
  );
};

export default Login;

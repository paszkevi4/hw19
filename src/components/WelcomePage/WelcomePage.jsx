import React from 'react';
import { StyledButton } from '../Inputs/StyledComponents';

const WelcomePage = () => {
  return (
    <>
      <h1 className="welcome_page">
        Welcome back, {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}
      </h1>
      <form className="welcome_page__form">
        <StyledButton
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem('token');
            window.location.reload();
          }}>
          Logout
        </StyledButton>
      </form>
    </>
  );
};

export default WelcomePage;

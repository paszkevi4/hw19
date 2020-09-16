import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
// components
import Login from './components/Login';
import Signup from './components/Signup';
import WelcomePage from './components/WelcomePage/WelcomePage';

// styles
import './App.css';

const App = () => {
  let isAuth = localStorage.getItem('token');
  return (
    <HashRouter>
      <div className="App">
        {isAuth || (
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
        {isAuth && (
          <Switch>
            <Route path="/main">
              <WelcomePage />
            </Route>
            <Redirect to="/main" />
          </Switch>
        )}
      </div>
    </HashRouter>
  );
};

export default App;

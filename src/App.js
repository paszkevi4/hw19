import React, { useState } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
// components
import Login from './components/Login';
import Signup from './components/Signup';

// styles
import './App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
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
            <Route component={Login} />
          </Switch>
        )}
      </div>
    </HashRouter>
  );
};

export default App;

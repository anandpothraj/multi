import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import FirstStep from './components/FirstStep';
// import Header from './components/Header';
import Login from './components/Login';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  const resetUser = () => {
    setUser({});
  };

  return (
    <BrowserRouter>
      <div className="container">
        {/* <Header /> */}
        <Switch>
          <Route path='/' component={Home} exact />
          <Route
            render={(props) => (
              <FirstStep {...props} user={user} updateUser={updateUser} />
            )}
            path="/register/first"
            exact={true}
          />
          <Route
            render={(props) => (
              <SecondStep {...props} user={user} updateUser={updateUser} />
            )}
            path="/register/second"
          />
          <Route
            render={(props) => (
              <ThirdStep
                {...props}
                user={user}
                updateUser={updateUser}
                resetUser={resetUser}
              />
            )}
            path="/register/third"
          />
          <Route component={Login} path="/login" />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;




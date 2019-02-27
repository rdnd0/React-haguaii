import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './components/AuthProvider';
import Main from './components/Main';



class App extends Component {
  render() {
    return (
      <AuthProvider>
          {/* <Navbar path='/purchase' data='data' /> */}
          <Switch>
            <Route exact path="/" component={Main}  />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
      </AuthProvider>
    )
  }
}

export default App;

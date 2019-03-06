import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AccessScreen from './components/AccessScreen';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './components/AuthProvider';
import Main from './components/Main';



class App extends Component {

  componentWillUnmount = () => {
    
  }
  

  render() {
    return (
      <AuthProvider>
          {/* <AccessScreen path='/purchase' data='data' /> */}
          <Switch>
            <Route exact path="/" component={Main}  />
            <PrivateRoute exact path="/private" component={Private} />
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
          </Switch>
      </AuthProvider>
    )
  }
}

export default App;

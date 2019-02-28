import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './AuthProvider';

class AccessScreen extends Component {
  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;
    if (isLogged) {
      return <div>
        <p>username: { username }</p>
        <p onClick={logout}>Logout</p>
      </div>
    } else {
      return <div className="container">
      <h1>Please Sign in to proceed</h1>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    }
  
  }
}

export default withAuth(AccessScreen);
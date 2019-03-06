import React, { Component } from 'react';
import { withAuth } from './AuthProvider';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;
    return (
      <nav>
        <a href="/"><img src="images/haguaii.png" alt="logo"/></a>
        <div>
          {isLogged ? <button onClick={logout} className="logout-btn">Logout</button> 
          : <Link to='/login'className="login-btn">Login</Link>}

          <a href="https://www.linkedin.com/in/davidredondo83/" target="_blank" rel="noopener noreferrer" className="donate-link">
          <button className="donate-btn">DONATE</button></a>
        </div>
      </nav>
    )
  }
}

export default withAuth(Nav);

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';
import Nav from '../components/Nav';

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.props.signup({ username, password })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <Nav/>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <label className="label-form">Username:</label>
          <input className="input-form" type="text" name="username" value={username} onChange={this.handleChange}/>
          <label className="label-form">Password:</label>
          <input className="input-form" type="password" name="password" value={password} onChange={this.handleChange} />
          <input className="btn-form" type="submit" value="Signup" />
        </form>

        <p className="account-stuff">Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default withRouter(withAuth(Signup));
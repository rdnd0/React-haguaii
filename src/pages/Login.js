import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import Nav from '../components/Nav';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
      .then(() => {
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
          <form  className="form signup" onSubmit={this.handleFormSubmit}>
            <label className="label-form">Username:</label>
            <input className="input-form" type="text" name="username" value={username} onChange={this.handleChange}/>
            <label className="label-form">Password:</label>
            <input className="input-form" type="password" name="password" value={password} onChange={this.handleChange} />
            <input className="btn-form" type="submit" value="Login" />
          </form>
      </div>
    )
  }
}

export default withAuth(Login);

import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider';
class Private extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className='main-content'>
        <h2>Thanks for trusting us {user.username}</h2>
        <p>We have received your order and we will be working on your shirt right away!</p>
        <button className="back-btn" onClick={() => {this.props.history.push('/');}}>Back</button> 
      </div>
    )
  }
}

export default withAuth(Private);
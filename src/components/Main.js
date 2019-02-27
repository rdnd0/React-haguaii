import React, { Component } from 'react';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <h1>Se acabó ser uno más</h1>
        <p>Tired of wearing the same as everybody else?
          Do not you think it is time to express yourself, through your clothes?
          Let's change that...
        </p>
        <button className="main-btn">Configure Your Shirt</button>
      </div>
    )
  }
}

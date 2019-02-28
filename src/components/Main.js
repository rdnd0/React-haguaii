import React, { Component } from 'react';
import './main.css';
import Nav from './Nav';
import Configurator from './Configurator'

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Nav />
        <header>
          <div className="main-content">
            <h1>Se acabó ser uno más</h1>
            <p>Tired of wearing the same as everybody else?</p>
            <p>Do not you think it is time to express yourself?</p>
            <p>Let's get started...</p>
            <a href="#configurator"><button className="main-btn">Configure Your Shirt</button></a>
          </div>
        </header>
        <Configurator/>
      </div>
    )
  }
}

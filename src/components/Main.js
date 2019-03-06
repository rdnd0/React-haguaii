import React, { Component } from 'react';
import './main.css';
import Nav from './Nav';
import Header from './Header';
import Configurator from './Configurator'

export default class Main extends Component {

  state = {
    illustrations: [],
    isLoading: true,
    allData: [],
    oldData: this.props.location.state,
  }


  render() {
    return (
      <div id="top" className='main'>
        <Nav />
        <Header />
        <Configurator/>
      </div>
    )
  }
}

import React, { Component } from 'react';
import './main.css';
import Api from '../lib/shirts-service';
import Nav from './Nav';
import Configurator from './Configurator'

export default class Main extends Component {

  state = {
    illustrations: [],
    isLoading: true,
    allData: [],
    oldData: this.props.location.state
  }
  componentDidMount(){
    this.getIllustrations();
  }

  getIllustrations = () => {
    Api.getIllustrations()
      .then((data) => {
        let components = {};
        let arr = [];
        let allData = data;
    
        
        data.forEach((object) => {
          object.components.forEach((item) => {
            components[item.short_name] = item.image
          })
        })
        Object.keys(components).forEach(function(key) {
          arr.push({
            short_name: key,
            image: components[key]
          })
        });
        this.setState({
          illustrations: arr,
          isLoading: false,
          allData
        })
      })
      .catch((error) => {
        console.log('ya got an error: ', error);
      })
  }

  render() {
    return (
      <div id="top" className='main'>
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
        <Configurator illustrations={this.state.illustrations} allData={this.state.allData}/>
      </div>
    )
  }
}

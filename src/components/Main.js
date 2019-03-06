import React, { Component } from 'react';
import './main.css';
import Api from '../lib/shirts-service';
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

  componentDidMount() {
    this.getIllustrations();
  }

  render() {
    return (
      <div id="top" className='main'>
        <Nav />
        <Header />
        <Configurator illustrations={this.state.illustrations} allData={this.state.allData}/>
      </div>
    )
  }
}

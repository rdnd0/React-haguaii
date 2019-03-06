import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider';
import { withRouter } from 'react-router-dom';
import NumberOfElements from '../components/configurator/NumberOfElements'
import Cards from '../components/configurator/Cards'
import YourShirt from '../components/configurator/YourShirt'
import Purchase from '../components/configurator/Purchase'


class Configurator extends Component {

  state = {
    stage: 0,
    elements: 0,
    shirtURL:"",
    shirtSize:""
  }

  componentDidMount() {
    if (localStorage.getItem('shirtURL')) {
      this.setState({
        stage:3,
        shirtURL: localStorage.getItem('shirtURL'),
        shirtSize: localStorage.getItem('shirtSize'),      
      }, () => {
        localStorage.removeItem('shirtURL');
        localStorage.removeItem('shirtSize');
      })
    }
  }

  componentWillUnmount = () => {
    
  }
  

  handleIncrement = () => {
    const { stage } = this.state
    this.setState({
      stage: stage + 1,
    })
  }

  handleDecrement = () => {
    const { stage } = this.state;
    this.setState({
      stage: stage - 1,
    })
  }

  //Elements selector
  passNumberOfElements = (elements) => {
    this.setState({
      elements
    })
  }

  //Cards
  passShirtURL = (shirt) => {
    this.setState({
      shirtURL: shirt,
    })
  }

  //Shirts
  passSize = (size) => {
    this.setState({
      shirtSize: size,
    })
  }

  //Purchase



  renderSelected = () => {
    let {stage} = this.state;
    switch (stage) {
      case 0:
        return <NumberOfElements moveStage={this.handleIncrement} passNumberOfElements={this.passNumberOfElements}/>
      case 1:
        return <Cards numberOfElements={this.state.elements} moveStage={this.handleIncrement} passShirtURL={this.passShirtURL}/>
      case 2:
        return <YourShirt sendShirtURL={this.state.shirtURL} moveStage={this.handleIncrement} restart={this.restart} passSize={this.passSize}/>
      case 3:
        return <Purchase shirtURL={this.state.shirtURL} shirtSize={this.state.shirtSize} restart={this.restart}/>
      default:
        return null   
    }
  }

  restart = () => {
    this.setState({
      stage: 0,
      elements: 0,
      shirtURL:"",
      shirtSize:""
    })
  }
  
  render() {
    return (
      <div id='configurator'>
        <div>
          {this.renderSelected()}
        </div>
        <div>
          <a href="#top" className="arrow-up" onClick={this.restart}>
            <img src="/images/arrow-up.png" alt="arrow-up"/></a>
        </div>
      </div>
    )
  }
}

export default withRouter(withAuth(Configurator));

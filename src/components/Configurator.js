import React, { Component } from 'react'
import ChooseSize from './ChooseSize';
import { withAuth } from '../components/AuthProvider';
import { withRouter } from 'react-router-dom';
import NumberOfElements from '../components/configurator/NumberOfElements'
import Cards from '../components/configurator/Cards'
import YourShirt from '../components/configurator/YourShirt'
import Purchase from '../components/configurator/Purchase'
import Api from '../lib/shirts-service';


class Configurator extends Component {

  state = {
    stage: 0,
    elements: 0,
    shirtURL:""
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





  renderSelected = () => {
    let {stage} = this.state;
    switch (stage) {
      case 0:
        return <NumberOfElements moveStage={this.handleIncrement} passNumberOfElements={this.passNumberOfElements}/>
      case 1:
        return <Cards numberOfElements={this.state.elements}moveStage={this.handleIncrement} passShirtURL={this.passShirtURL}/>
      case 2:
        return <YourShirt/>
      case 3:
        return <Purchase/>
      default:
        return null   
    }
  }

  restart = () => {
    this.setState({
      stage: 0
    })
  }
  
  render() {
    const { stage } = this.state;
    return (
      <div id='configurator'>
        <div>
          {this.renderSelected()}
        </div>
        {/* <div>
          <button onClick={this.handleIncrement} disabled={stage === 3}>more</button>
        </div>
        <div>
          <button onClick={this.handleDecrement} disabled={stage === 0}>less</button>
        </div> */}
        <div>
          <a href="#top" className="arrow-up" onClick={this.restart}>
            <img src="/images/arrow-up.png" alt="arrow-up"/></a>
        </div>
      </div>
    )
  }
}

export default withRouter(withAuth(Configurator));

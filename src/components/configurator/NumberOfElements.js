import React, { Component } from 'react';

class NumberOfElements extends Component {
  state = {
    elements: 0,
    outOfRange: false,
  }

  handleIncrement = () => {
    const { elements } = this.state;
    elements  === 3 ?
    this.setState({
      outOfRange:true,
    }) : this.setState({
      elements: elements + 1,
      outOfRange: false
    })
  }

  handleDecrement = () => {
    const { elements } = this.state;
    elements === 0 ?
    this.setState({
      outOfRange:true, 
    }) : this.setState({
      elements: elements - 1,
      outOfRange: false
    })
  }

  submitElementNumber = () => {
    this.props.moveStage();
    this.props.passNumberOfElements(this.state.elements);
    let elements = this.state.elements -1;
    this.setState({
      elements,
    })
  }


  render() {
    return (
    <div className="elements-section">
      <div className="choose">
        <div className="plusminus-btn">
          <button className="addremove-btn" onClick={this.handleDecrement}>-</button>
          <button className="addremove-btn" onClick={this.handleIncrement}>+</button>
        </div>
        <div>
          {this.state.outOfRange ? this.state.elements === 0 ? (<h3>Add some elements c'mon</h3>) : (<h3>That would be enough, {this.state.elements} it is</h3>) : (<h3>{this.state.elements}</h3>)}  
        </div>
      </div>
      <div className="element-confirm">
        <button className="purchase-btn" onClick={this.submitElementNumber} disabled={this.state.elements === 0}>OK!</button>
      </div>
    </div>
    )
  }
}

export default NumberOfElements;



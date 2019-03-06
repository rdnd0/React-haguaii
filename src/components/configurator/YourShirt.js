import React, { Component } from 'react'
import ChooseSize from './ChooseSize';

class YourShirt extends Component {

  state ={
    shirtSize: ""
  }

  handleSize = (size) => {
    this.setState({
      shirtSize: size.value,
    })
  }

  toCheckOut = () => {
    if(this.state.shirtSize !== "") {
      this.props.passSize(this.state.shirtSize);
      this.props.moveStage();
    }
  }

  printShirt = () => {
    let {sendShirtURL} = this.props

    return (
        <div className="shirt">
          <img src={sendShirtURL} alt="your-shirt" className="theshirt"/>
          <div className="shirtDetails">
            <p>100% silky persian cotton</p>
            {this.state.shirtSize === '' && <h4>choose your size</h4>}
            <ChooseSize onChange={this.handleSize} />
            <p>Highly reliable product</p>          
            <button className="purchase-btn" onClick={this.toCheckOut}>To checkout!</button>
            <button className="back-btn" onClick={this.props.restart}>Back</button>
          </div>
        </div>)

  }
  render() {
    return (
      <div>
        {this.printShirt()}
      </div>
    )
  }
}


export default YourShirt;



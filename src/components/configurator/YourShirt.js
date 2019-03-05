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
    this.props.passSize(this.state.shirtSize);
    this.props.moveStage();
  }

  printShirt = () => {
    let {sendShirtURL} = this.props
    console.log('shirtURL: ', sendShirtURL);

    return (
        <div className="shirt">
          <img src={sendShirtURL} alt="your-shirt" className="theshirt"/>
          <div className="shirtDetails">
            <p>100% persian silky cotton</p>
            <ChooseSize onChange={this.handleSize} />
            <p>Highly reliable product</p>          
            <button className="purchase-btn" onClick={() => {this.toCheckOut()}}>To checkout!</button>
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



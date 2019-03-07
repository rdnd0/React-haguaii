import React, { Component } from 'react'
import ChooseSize from './ChooseSize';

class YourShirt extends Component {

  state ={
    shirtSize: "",
    shirtImage: this.props.sendShirtURL,
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

  handleChamiseImg = () => {
    const {sendShirtURL} = this.props;
    this.setState({
      shirtImage: sendShirtURL,
    })
  }

  handleChamiseImg2 = () => {
    const {sendShirtURL2} = this.props;
    this.setState({
      shirtImage: sendShirtURL2,
    })
  }

  printShirt = () => {
    let {shirtImage} = this.state

    return (
        <div className="shirt">
          <div className="shirt-image">
            <img src={shirtImage} alt="your-shirt" className="theshirt"/>
            <div className="img-btns">
              <button onClick={this.handleChamiseImg}></button>
              <button onClick={this.handleChamiseImg2}></button>
            </div>  
          </div>
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



import React, { Component } from "react";
import ChooseSize from "./ChooseSize";

//Redux magic
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseStage } from "../../redux/stage/actions";
import { chooseSize } from "../../redux/shirt/actions";

class YourShirt extends Component {
  state = {
    mainShirt: true
  };
  handleSize = size => {
    const { chooseSize } = this.props;
    console.log("handlesize", size.value);
    size && chooseSize(size.value);
  };

  toCheckOut = () => {
    if (this.props.shirtSize !== "") {
      this.props.increaseStage();
    }
  };

  handleChamiseImg = () => {
    this.setState({
      mainShirt: true
    });
  };

  handleChamiseImg2 = () => {
    this.setState({
      mainShirt: false
    });
  };

  printShirt = () => {
    const { shirt1, shirt2 } = this.props;
    const { mainShirt } = this.state;

    return (
      <div className="shirt">
        <div className="shirt-image">
          <img
            src={mainShirt ? shirt1 : shirt2}
            alt="your-shirt"
            className="theshirt"
          />
          <div className="img-btns">
            <button onClick={this.handleChamiseImg} />
            <button onClick={this.handleChamiseImg2} />
          </div>
        </div>
        <div className="shirtDetails">
          <p>100% silky persian cotton</p>
          {this.props.shirtSize === "" && <h4>choose your size</h4>}
          <ChooseSize onChange={this.handleSize} />
          <p>Highly reliable product</p>
          <button className="purchase-btn" onClick={this.toCheckOut}>
            To checkout!
          </button>
          <button className="back-btn" onClick={this.props.restart}>
            Back
          </button>
        </div>
      </div>
    );
  };
  render() {
    return <div>{this.printShirt()}</div>;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increaseStage,
      chooseSize
    },
    dispatch
  );

const mapStateToProps = state => ({
  shirt1: state.shirt.path1,
  shirt2: state.shirt.path2,
  shirtSize: state.shirt.size
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourShirt);

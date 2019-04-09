import React, { Component } from "react";

//Redux magic
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseStage } from "../../redux/stage/actions";
import { increaseElements, decreaseElements } from "../../redux/shirt/actions";

class NumberOfElements extends Component {
  state = {
    outOfRange: false
  };

  handleIncrement = () => {
    const { increaseElements, elements } = this.props;
    elements === 3
      ? this.setState({
          outOfRange: true
        })
      : increaseElements();
    this.setState({
      outOfRange: false
    });
  };

  handleDecrement = () => {
    const { decreaseElements, elements } = this.props;
    elements === 0
      ? this.setState({
          outOfRange: true
        })
      : decreaseElements();
    this.setState({
      outOfRange: false
    });
  };

  goRandom = () => {
    this.props.moveStageR();
  };

  render() {
    const { elements, increaseStage } = this.props;
    return (
      <div className="elements-section">
        <img
          src="/images/whiteshirt.png"
          alt="whiteshirt"
          className="theshirt"
        />
        <div className="choose">
          <h3>Choose the number of elements</h3>
          <div className="plusminus-btn">
            <button className="addremove-btn" onClick={this.handleDecrement}>
              -
            </button>
            <button className="addremove-btn" onClick={this.handleIncrement}>
              +
            </button>
          </div>
          {<h3>{elements}</h3>}
          <div>
            <button
              className="purchase-btn"
              disabled={elements <= 0}
              onClick={increaseStage}
            >
              OK!
            </button>
          </div>
          <h4 style={{ margin: "0", fontSize: "1.3rem" }}>
            Or...
            <span className="random-btn" onClick={this.goRandom}>
              go random!
            </span>
          </h4>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increaseStage,
      increaseElements,
      decreaseElements
    },
    dispatch
  );

const mapStateToProps = state => ({
  elements: state.shirt.elements
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberOfElements);

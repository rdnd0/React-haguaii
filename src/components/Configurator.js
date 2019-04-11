import React, { Component } from "react";
import { withAuth } from "../components/AuthProvider";
import { withRouter } from "react-router-dom";

//Redux magic
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetStage, randomStage } from "../redux/stage/actions";
import { resetShirt, chooseShirt } from "../redux/shirt/actions";

//Components
import NumberOfElements from "../components/configurator/NumberOfElements";
import Cards from "../components/configurator/Cards";
import YourShirt from "../components/configurator/YourShirt";
import Purchase from "../components/configurator/Purchase";

class Configurator extends Component {
  componentDidMount() {
    this.restart();
  }
  //Random
  handleRandom = () => {
    const { randomStage, chooseShirt } = this.props;

    let shirtURL = `${
      process.env.REACT_APP_BASE_URL
    }/images/shirt-brocolipizza.png`;
    let shirtURL2 = `${
      process.env.REACT_APP_BASE_URL
    }/images/shirt-brocolipizza2.png`;
    randomStage();
    chooseShirt(shirtURL, shirtURL2);
  };

  restart = () => {
    const { resetStage, resetShirt } = this.props;
    resetStage();
    resetShirt();
  };

  renderSelected = () => {
    let { stage } = this.props;
    switch (stage) {
      case 0:
        return <NumberOfElements moveStageR={this.handleRandom} />;
      case 1:
        return <Cards />;
      case 2:
        return <YourShirt restart={this.restart} />;
      case 3:
        return <Purchase restart={this.restart} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div id="configurator">
        <div>{this.renderSelected()}</div>
        <div>
          <a href="#top" className="arrow-up" onClick={this.restart}>
            <img src="/images/arrow-up.png" alt="arrow-up" />
          </a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      resetStage,
      resetShirt,
      randomStage,
      chooseShirt
    },
    dispatch
  );

const mapStateToProps = state => ({
  stage: state.stage.stage
});

export default withRouter(
  withAuth(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Configurator)
  )
);

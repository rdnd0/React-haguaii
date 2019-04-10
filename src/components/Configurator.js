import React, { Component } from "react";
import { withAuth } from "../components/AuthProvider";
import { withRouter } from "react-router-dom";

//Redux magic
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetStage } from "../redux/stage/actions";

//Components
import NumberOfElements from "../components/configurator/NumberOfElements";
import Cards from "../components/configurator/Cards";
import YourShirt from "../components/configurator/YourShirt";
import Purchase from "../components/configurator/Purchase";

class Configurator extends Component {
  //Random
  handleRandom = () => {
    this.setState({
      stage: 2,
      shirtURL: "http://localhost:5000/images/shirt-brocolipizza.png",
      shirtURL2: "http://localhost:5000/images/shirt-brocolipizza2.png"
    });
  };

  renderSelected = () => {
    let { stage } = this.props;
    switch (stage) {
      case 0:
        return <NumberOfElements moveStageR={this.handleRandom} />;
      case 1:
        return <Cards />;
      case 2:
        return <YourShirt />;
      case 3:
        return <Purchase />;
      default:
        return null;
    }
  };

  // restart = () => {
  //   this.setState({
  //     stage: 0,
  //     elements: 0,
  //     shirtURL: "",
  //     shirtSize: ""
  //   });
  // };

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
      resetStage
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

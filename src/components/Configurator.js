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
  // state = {
  //   stage: 0,
  //   elements: 0,
  //   shirtURL: "",
  //   shirtURL2: "",
  //   shirtSize: ""
  // };

  //will not need it as I will be pulling info from store
  // componentDidMount() {
  //   if (localStorage.getItem("shirtURL")) {
  //     this.setState(
  //       {
  //         stage: 3,
  //         shirtURL: localStorage.getItem("shirtURL"),
  //         shirtSize: localStorage.getItem("shirtSize")
  //       },
  //       () => {
  //         localStorage.removeItem("shirtURL");
  //         localStorage.removeItem("shirtSize");
  //       }
  //     );
  //   }
  // }
  // store will take care of this with actions
  // handleIncrement = () => {
  //   const { stage } = this.state;
  //   this.setState({
  //     stage: stage + 1
  //   });
  // };

  // handleDecrement = () => {
  //   const { stage } = this.state;
  //   this.setState({
  //     stage: stage - 1
  //   });
  // };

  //Random
  handleRandom = () => {
    this.setState({
      stage: 2,
      shirtURL: "http://localhost:5000/images/shirt-brocolipizza.png",
      shirtURL2: "http://localhost:5000/images/shirt-brocolipizza2.png"
    });
  };

  passShirtURLR = (shirt1, shirt2) => {
    this.setState({
      shirtURL: shirt1,
      shirtURL2: shirt2
    });
  };

  //Elements selector
  passNumberOfElements = elements => {
    this.setState({
      elements
    });
  };

  //Cards
  passShirtURL = (shirt1, shirt2) => {
    this.setState({
      shirtURL: shirt1,
      shirtURL2: shirt2
    });
  };

  //Shirts
  passSize = size => {
    this.setState({
      shirtSize: size
    });
  };

  //Purchase

  renderSelected = () => {
    let { stage } = this.props;
    switch (stage) {
      case 0:
        return (
          <NumberOfElements
            moveStage={this.handleIncrement}
            passNumberOfElements={this.passNumberOfElements}
            moveStageR={this.handleRandom}
          />
        );
      case 1:
        return (
          <Cards
            numberOfElements={this.state.elements}
            moveStage={this.handleIncrement}
            passShirtURL={this.passShirtURL}
          />
        );
      case 2:
        return (
          <YourShirt
            sendShirtURL={this.state.shirtURL}
            sendShirtURL2={this.state.shirtURL2}
            moveStage={this.handleIncrement}
            restart={this.restart}
            passSize={this.passSize}
          />
        );
      case 3:
        return (
          <Purchase
            shirtURL={this.state.shirtURL}
            shirtSize={this.state.shirtSize}
            restart={this.restart}
          />
        );
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

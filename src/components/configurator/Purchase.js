import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Api from "../../lib/shirts-service";
import { withAuth } from "../../components/AuthProvider";

//Redux magic
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseStage } from "../../redux/stage/actions";
import { chooseSize } from "../../redux/shirt/actions";

class Purchase extends Component {
  purchase = () => {
    const { shirt1, shirtSize } = this.props;
    const user = this.props.user._id;

    Api.createShirt({ user, shirt1, shirtSize })
      .then(result => {
        console.log("shirt created: ", result);
        this.setState({
          redirect: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  printPurchaseScreen = () => {
    const { shirt1, shirtSize } = this.props;
    const user = this.props.user._id;

    if (user) {
      return (
        <div className="purchase-screen">
          <h1>Shopping cart</h1>
          <div className="purchase">
            <img src={shirt1} alt="shirt" className="purchase-shirt" />
            <div className="purchase-details">
              <h3>{`Your size: ${shirtSize}`}</h3>
              <button className="purchase-btn" onClick={this.purchase}>
                Buy!
              </button>
              <button className="back-btn" onClick={this.props.restart}>
                Back
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/signup"
          }}
        />
      );
    }
  };
  render() {
    return <div>{this.printPurchaseScreen()}</div>;
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
  shirtSize: state.shirt.size
});

export default withAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Purchase)
);

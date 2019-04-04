import React, { Component } from "react";
import "./main.css";
import Nav from "./Nav";
import Header from "./Header";
import Configurator from "./Configurator";
import { getIllustrations } from "../redux/actions";

//redux
import { connect } from "react-redux";

class Main extends Component {
  state = {
    illustrations: [],
    isLoading: true,
    oldData: this.props.location.state
  };

  componentDidMount() {
    const { isLoaded } = this.props;

    !isLoaded && this.props.dispatch(getIllustrations());
  }

  render() {
    return (
      <div id="top" className="main">
        <Nav />
        <Header />
        <Configurator />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  illustrations: state.illustrations,
  isLoaded: state.illustrationsLoaded,
  stage: state.stage
});

export default connect(mapStateToProps)(Main);

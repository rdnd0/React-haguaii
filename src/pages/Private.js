import React, { Component } from "react";
import { withAuth } from "../components/AuthProvider";
import Nav from "../components/Nav";

class Private extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Nav />
        <div className="confirm-screen">
          <h1>Thanks for trusting us {user.username}</h1>
          <p>
            We have received your order and we will be working on your shirt
            right away!
          </p>
          <div className="confirm-logos">
            <img src="/images/iconshirt.svg" alt="shirt" />
            <img src="/images/ilustrationicon.svg" alt="draw" />
            <img src="/images/velabcnicon.svg" alt="bcn" />
          </div>
          <a href="#top">
            <button
              className="back-btn"
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              Back
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default withAuth(Private);

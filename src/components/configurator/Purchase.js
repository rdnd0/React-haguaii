import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../../lib/shirts-service';
import { withAuth } from '../../components/AuthProvider';

class Purchase extends Component {
  state = {
    redirect: false,
  }

  purchase = () => {
    const {shirtURL, shirtSize} = this.props;
    const user = this.props.user._id;

    Api.createShirt({ user, shirtURL, shirtSize })
    .then((result) => {
      console.log('shirt created')
      localStorage.removeItem('shirtURL');
      localStorage.removeItem('shirtSize');
      this.setState({
        redirect: true,
      })
    })
    .catch((error) => {console.log(error)})
  }

  printPurchaseScreen = () => {
    localStorage.setItem('shirtURL', this.props.shirtURL);
    localStorage.setItem('shirtSize', this.props.shirtSize);
    const {shirtURL, shirtSize} = this.props;
    const user = this.props.user._id;

    if (user) {
      return(
        <div className="purchase-screen">
            <h1>Shopping cart</h1>
          <div className="purchase">
            <img src={shirtURL} alt="shirt" className="purchase-shirt"/>
            <div className="purchase-details">
              <h3>{ `Your size: ${shirtSize}` }</h3>
              <h3 className="price-tag">Price: 75€</h3>
              <button className="purchase-btn" onClick={this.purchase}>Buy!</button>
              <button className="back-btn" onClick={this.props.restart}>Back</button>
            </div>
          </div>
        </div>)
    } else {
      return <Redirect to={{ 
        pathname: '/signup', 
      }} />
      
    }

  }
  render() {
    if(this.state.redirect) {
      return(
        <Redirect to={{ 
          pathname: '/Private', 
        }} />
      )
    }
    return (
      <div>
        {this.printPurchaseScreen()}
      </div>
    )
  }
}


export default withAuth(Purchase);
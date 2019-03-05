import React from 'react';
import { withRouter } from 'react-router-dom';

 function Cards(props) {
    const goBack = () => {
    props.clearShirt();
  }
  return (
    <div>cards</div>

  )
}

export default Cards;
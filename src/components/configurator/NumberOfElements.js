import React from 'react';

 function NumberOfElements(props) {
    const goBack = () => {
    props.clearShirt();
  }
  return (
    <div>
      <div className="choose">
        <button onClick={()=>{props.addElements('minus')}}>-</button>
        <button onClick={()=>{props.addElements('plus')}}>+</button>
          {props.state.outOfRange ? props.state.elements === 0 ? (<h3>Add some elements c'mon</h3>) : (<h3>That would be enough, {props.state.elements} it is</h3>) : (<h3>{props.state.elements}</h3>)}  

        <a href="#top"><button className="back-btn" onClick={()=>{goBack()}}>Back</button></a>
      </div>
      <div className="element-confirm">
        <button className="purchase-btn" onClick={props.confirmElements}>OK!</button>
      </div>
    </div>
  )
}

export default NumberOfElements;



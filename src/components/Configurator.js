import React, { Component } from 'react'

export default class Configurator extends Component {

  state = {
    shirtPending: true,
    elements: 0,
    elementsChosen: false,
    outOfRange: false,
    chosenShirt: ''
  }

  handleIllustrations = () => {
    const {illustrations, allData} = this.props;
    console.log('allData in configurator func, ',allData);

    return <div className="cards">
          {illustrations.map((item, index) => {
            return (
              <div className="card-detail" key={`${item.short_name}+${index}`} onClick={() => {
                this.handleChosen(item.short_name);
              }}>
                <p>{item.short_name}</p>
                <img src={`${item.image}`} alt='illustration' className='illustration-img'/>
              </div>
            )
            })
          }  
        </div>

  }
  handleChosen = (itemname) => {
    const {allData} = this.props;
    let currentShirt
    allData.forEach((shirt)=>{
      if(itemname === shirt.name) {
        return currentShirt = shirt.shirt_url;
      }

    })
    return this.setState({
      chosenShirt: currentShirt,
      shirtPending: false
    })
  }

  
  addElements = (sign) => {
    let elementsAdded = 0;
    
    if (this.state.elements<3 && sign === 'plus' || this.state.elements>0 && sign === 'minus') {
      if (this.state.outOfRange === false) {
        sign === 'minus' ? (elementsAdded = -1) : (elementsAdded = 1);
        const newElements = this.state.elements + elementsAdded;
  
        this.setState(()=> ({
          elements: newElements,
          
        }));
      }


    } else {
      this.setState({
        outOfRange : true,
      })
      console.log('outside range of elements, ', this.state.elements);
    }
  }

  confirmElements = () => {
    this.setState({
      elementsChosen: true,
    })
    
  }
  
  clearShirt = (event) => {
    console.log(event.target)
    return this.setState({
      chosenShirt: '',
      shirtPending: true,
      elementsChosen: false,
      elements: 0
})
  }
  
  render() {
    const {illustrations} = this.props;
    const {chosenShirt, shirtPending, elements, outOfRange} = this.state;
    return (
      <div id='configurator'>
        
        <div className="choose">
          <button onClick={()=>{this.addElements('plus')}}>+</button>
            {outOfRange ? elements === 0 ? (<h3>Add some elements c'mon</h3>) : (<h3>That would be enough, {elements} it is</h3>) : (<h3>{elements}</h3>)}  
          <button onClick={()=>{this.addElements('minus')}}>-</button>
        </div>
        <div className="element-confirm">
          <button onClick={()=>{this.confirmElements()}}>OK!</button>
        </div>

        {shirtPending ?  
          (illustrations[0] && this.handleIllustrations()) :
          (<img src={chosenShirt} alt="your-shirt" className="theshirt"/>)
        }
        <div>
          <a href="#top" className="arrow-up" onClick={this.clearShirt}>
            <img src="/images/arrow-up.png" alt="arrow-up"/>
          </a>
        </div>
      </div>
    )
  }
}

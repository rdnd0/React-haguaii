import React, { Component } from 'react'

export default class Configurator extends Component {

  state = {
    shirtPending: true,
    elements: 0,
    elementsChosen: false,
    outOfRange: false,
    shirtURL: "",
    elementSelected: [],
    purchase:false,
    currentCard: 0,
  }

  printCards = () => {
    const {illustrations} = this.props;
    const {elements, elementSelected, currentCard} = this.state;
    let leftIllustrations = [...illustrations];
    let newIndex = currentCard;
    console.log('illustrations in configurator func, ',illustrations);
    console.log('element selected is: ', elementSelected);
    let elmentsLeft = elements + 1;
    
    const removeByAttr = (arr, attr, value) => {
      let i = arr.length;
      while(i--){
        if ( arr[i] 
          && arr[i].hasOwnProperty(attr) 
          && arr[i][attr] === value ) { 
            arr.splice(i,1);
          }
        }
        return arr;
      }  
      removeByAttr(leftIllustrations, "short_name", elementSelected[0]);
      elementSelected.length === 2 && removeByAttr(leftIllustrations, "short_name", elementSelected[1]);

    const nextCard = (direction) => {
      direction === 'right' ? 
      newIndex+1 < illustrations.length ? console.log('clicked right', newIndex+=1, illustrations[newIndex]) : console.log('out of bounds')
      
      : newIndex-1 >= 0 ? console.log('clicked left ', newIndex-=1, illustrations[newIndex]) : console.log('out of bounds')

      this.setState({
        currentCard: newIndex
      })


    }

    return (
      <div className="cards">
        {elements === 0 ? <h3>Choose an element</h3> :
                          <h3>{elmentsLeft} elements left to go!</h3>}
          <div className={`cards-slider active-slide-${currentCard}`}>
            {console.log('currentcard within card:',currentCard)}
            <div className="cards-slider-wrapper" style={{'transform': `translateX(-${currentCard*(100/leftIllustrations.length)}%)`
            }}>
              {leftIllustrations.map((item, index) => {
                return (
                  <div id={`card-${currentCard}`} className="card" key={`${item.short_name}+${currentCard}`} onClick={() => {
                    this.handleChosen(item.short_name);
                    }}>
                    <p>{item.short_name}</p>
                    <img src={`${item.image}`} alt='illustration' className='illustration-img'/>
                  </div>
                )   
              })
              }  
          </div>
      </div>

            <button className="goRight"
            onClick={() => {nextCard('right')}}>Right</button>
            <button className="goLeft" onClick={() => {nextCard('left')}}>Left</button>

        </div>)
  }

  handleChosen = (itemname) => {
    const selected = [...this.state.elementSelected];

    selected.push(itemname);

    let shirtPath;
    let waitForElement;
    let {elements} = this.state
    let newElements;
    
    if (elements > 0 ) {
      waitForElement = true;
      newElements = elements - 1;

    } else {
      waitForElement = false;
      shirtPath = `http://localhost:5000/images/shirt-${selected.join('')}.png`
    }
      
    this.setState({
      shirtPending: waitForElement,
      elements: newElements,
      shirtURL: shirtPath,
      elementSelected: selected,
    })
  }

  addElements = (sign) => {
    let elementsAdded = 0;
    let {elements} = this.state;
    let newElements;
    
    if ((elements<3 && sign === 'plus') || (elements>0 && sign === 'minus')) {
      if (this.state.outOfRange === false) {
        sign === 'minus' ? (elementsAdded = -1) : (elementsAdded = 1);
        newElements = elements + elementsAdded;
  
        this.setState(()=> ({
          elements: newElements,
          
          }));
        } else {
          if (sign === 'minus' && elements>1 ) {
            elementsAdded = -1
            newElements = elements + elementsAdded;

            this.setState(()=> ({
              elements: newElements,
              outOfRange: false
              
              }));

          }

          else if (sign === 'plus' && elements<1 ) {
            elementsAdded = +1
            newElements = elements + elementsAdded;

            this.setState(()=> ({
              elements: newElements,
              outOfRange: false
              
              }));
          }
        }
    } else {
    this.setState({
      outOfRange : true,
    })
    }
  }

  confirmElements = () => {
    let elements = this.state.elements - 1
    this.setState({
      elementsChosen: true,
      elements
    })
    
  }

  printDecideNumberOfElements = () => {
    const {elements, outOfRange} = this.state;
    return(
      <div>
        <div className="choose">
          <button onClick={()=>{this.addElements('minus')}}>-</button>
          <button onClick={()=>{this.addElements('plus')}}>+</button>
            {outOfRange ? elements === 0 ? (<h3>Add some elements c'mon</h3>) : (<h3>That would be enough, {elements} it is</h3>) : (<h3>{elements}</h3>)}  

          <button onClick={this.clearShirt}>Back</button>
        </div>
        <div className="element-confirm">
          <button onClick={()=>{this.confirmElements()}}>OK!</button>
        </div>
      </div>
    )
  }
  
  printIllustrations = () => {
    const {illustrations} = this.props;
    const {shirtURL, shirtPending} = this.state;
    
    return (shirtPending ?  
      illustrations[0] && this.printCards() :
        <div className="shirt">
          <img src={shirtURL} alt="your-shirt" className="theshirt"/>
          <div className="shirtDetails">
            <p>100% persian silky cotton</p>
            <input type="text" value="M"/>
            <p>Highly reliable product</p>          
            <button className="purchase-btn" onClick={() => {this.purchase()}}>BUY!</button>
          </div>
        </div>)

  }

  purchase = () => {
    this.setState({purchase: true})
  }

  printPurchase() {
    return(
      <div className="purchase">
        <h1>Purchase</h1>
      </div>)
  }

  clearShirt = () => {
    return this.setState({
      shirtPending: true,
      elementsChosen: false,
      outOfRange: false,
      elements: 0,
      shirtURL: "",
      elementSelected: [],
      purchase: false,
})
  }
  
  render() {
    const {elementsChosen, purchase} = this.state;
    return (
      <div id='configurator'>
        {!elementsChosen ? this.printDecideNumberOfElements() : !purchase ? this.printIllustrations() : this.printPurchase() }
        <div>
          <a href="#top" className="arrow-up" onClick={this.clearShirt}>
            <img src="/images/arrow-up.png" alt="arrow-up"/>
          </a>
        </div>
      </div>
    )
  }
}

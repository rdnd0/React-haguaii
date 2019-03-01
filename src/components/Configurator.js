import React, { Component } from 'react'

export default class Configurator extends Component {

  state = {
    shirtPending: true,
    elements: 0,
    elementsChosen: false,
    outOfRange: false,
    shirtURL: "",
    elementSelected: [],
  }

  handleIllustrations = () => {
    const {illustrations, allData} = this.props;
    const {elements} = this.state;
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
    const selected = [...this.state.elementSelected];

    selected.push(itemname);

    let shirtPath;
    let waitForElement;
    let {elements, shirtName} = this.state
    let newElements;
    
    if (elements > 0 ) {
      waitForElement = true;
      newElements = elements - 1;

    } else {
      waitForElement = false;
      shirtPath = `http://localhost:5000/images/shirt-${selected.join('')}.png`
      console.log('shirt path is: ',shirtPath);
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
    
    if ((this.state.elements<3 && sign === 'plus') || (this.state.elements>0 && sign === 'minus')) {
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
    }
  }

  confirmElements = () => {
    let elements = this.state.elements - 1
    this.setState({
      elementsChosen: true,
      elements
    })
    
  }

  printChosingElements = () => {
    const {chosenShirt, shirtPending, elements, outOfRange, elementsChosen} = this.state;
    return(
      <div>
        <div className="choose">
          <button onClick={()=>{this.addElements('plus')}}>+</button>
            {outOfRange ? elements === 0 ? (<h3>Add some elements c'mon</h3>) : (<h3>That would be enough, {elements} it is</h3>) : (<h3>{elements}</h3>)}  
          <button onClick={()=>{this.addElements('minus')}}>-</button>
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
    console.log(shirtURL);
    
    return (shirtPending ?  
      illustrations[0] && this.handleIllustrations() :
        <img src={shirtURL} alt="your-shirt" className="theshirt"/>)

  }

  clearShirt = () => {
    return this.setState({
      chosenShirt: '',
      shirtPending: true,
      elementsChosen: false,
      outOfRange: false,
      elements: 0,
      shirtURL: "",
      elementSelected: []
})
  }
  
  render() {
    const {elementsChosen} = this.state;
    return (
      <div id='configurator'>
        {!elementsChosen ? this.printChosingElements() : this.printIllustrations() }
        <div>
          <a href="#top" className="arrow-up" onClick={this.clearShirt}>
            <img src="/images/arrow-up.png" alt="arrow-up"/>
          </a>
        </div>
      </div>
    )
  }
}

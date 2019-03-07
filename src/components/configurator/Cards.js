import React, { Component } from 'react';
import Api from '../../lib/shirts-service.js';

class Cards extends Component {
  
  state = {
    illustrations: [],
    isLoading: true,
    allData: [],
    elementsSelected: [],
    currentCard: 0,
    elements: this.props.numberOfElements - 1,
    shirtURL: "",
  }
  componentDidMount(){
    this.getIllustrations();
  }

  getIllustrations = () => {
    Api.getIllustrations()
      .then((data) => {
        let components = {};
        let arr = [];
        let allData = data;
    
        data.forEach((object) => {
          object.components.forEach((item) => {
            components[item.short_name] = item.image
          })
        })
        Object.keys(components).forEach(function(key) {
          arr.push({
            short_name: key,
            image: components[key]
          })
        });
        this.setState({
          illustrations: arr,
          isLoading: false,
          allData
        })
      })
      .catch((error) => {
        console.log('ya got an error: ', error);
      })
  }

  handleChosen = (itemname) => {
    const selected = [...this.state.elementsSelected];

    selected.push(itemname);

    let shirtPath;
    let {elements} = this.state
    let newElements;
    
    if (elements > 0 ) {
      newElements = elements - 1;

    } else {
      shirtPath = `${process.env.REACT_APP_BASE_URL}/images/shirt-${selected.sort().join('')}.png`;
      this.props.passShirtURL(shirtPath);
      this.props.moveStage();
    }
      
    this.setState({
      elements: newElements,
      shirtURL: shirtPath,
      elementsSelected: selected,
    })
  }

  printCards = () => {
    const {elementsSelected, currentCard, illustrations, elements} = this.state;
    let leftIllustrations = [...illustrations];
    let newIndex = currentCard;
    let elementsLeft = elements;
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
    
    removeByAttr(leftIllustrations, "short_name", elementsSelected[0]);
    elementsSelected.length === 2 && removeByAttr(leftIllustrations, "short_name", elementsSelected[1]);


    const nextCard = (direction) => {
      direction === 'right' ? 
      newIndex+1 < illustrations.length ? console.log('clicked right', newIndex+=1,illustrations[newIndex]) : console.log('out of bounds')
      
      : newIndex-1 >= 0 ? console.log('clicked left ', newIndex-=1, illustrations[newIndex]) : console.log('out of bounds')

      this.setState({
        currentCard: newIndex
      })
    }

    return (
        <div className="cards-app">
          <div className="cards-tittle">
            {elementsSelected === 0 ? <h1>Choose an element</h1> :
                              <h1>{elementsLeft+1} element/s left to go!</h1>}
          </div>
          <div className="cards">
              <div className={`cards-slider active-slide-${currentCard}`}>
                {console.log('currentcard within card:',currentCard)}
  
                <div className="cards-slider-wrapper" style={{'transform': `translateX(-${currentCard*(100/leftIllustrations.length)}%)`
                }}>
                  {leftIllustrations.map((item, index) => {
                    return (
                      <div id={`card-${index}`} className="card" key={`${item.short_name}+${index}`} onClick={() => {
                        this.handleChosen(item.short_name);
                        }}>
                        <p>{item.short_name}</p>
                        <img src={`${process.env.REACT_APP_BASE_URL}/images/${item.short_name}.png`} alt='illustration' className='illustration-img'/>
                      </div>
                    )   
                  })
                  }  
              </div>
          </div>
          </div> 
          <div className="cards-btns">
            <img className="goLeft" onClick={() => {nextCard('left')}} src="/images/arrow-left.png" alt="left-arrow"/>
            <img className="goRight" onClick={() => {nextCard('right')}}src="/images/arrow-right.png" alt="right-arrow"/>    
          </div>
        </div>
    )
  }

  

  render() {
    return (
      <div>
        {this.printCards()}
      </div>
    )
  }
}

export default Cards;
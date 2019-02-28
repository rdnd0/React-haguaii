import React, { Component } from 'react'

export default class Configurator extends Component {

  state = {
    shirtPending: true,
    elements: null,
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
          return this.setState({
            chosenShirt: currentShirt,
            shirtPending: false
      })


    })
  
    console.log('this item was clicked: ', itemname);
    console.log('all data in handlechosen, ',(allData));
  
  }



  render() {
    const {illustrations} = this.props;
    const {chosenShirt} = this.state;
    return (
      <div id='configurator'>
        {this.state.shirtPending ?  
          (illustrations[0] && this.handleIllustrations()) :
          (<img src={chosenShirt} alt="your-shirt" className='theshirt'/>)
        }
        <div>
          <a href="#top" className='arrow-up'>UP</a>
        </div>
      </div>
    )
  }
}

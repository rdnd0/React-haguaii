import React, { Component } from 'react'

export default class Configurator extends Component {
  render() {
    const {illustrations} = this.props;
    console.log('in configurator ',illustrations);
    
    return (
      <div id='configurator'>
        {illustrations[0] && 
        <div className="cards">
          {illustrations.map((item, index) => {
            console.log(item)
            return (
              <div className="card-detail" key={`${item.short_name}+${index}`}>
                <p>{item.short_name}</p>
                <img src={`${item.image}`} alt='illustration-image' className='illustration-img'/>
              </div>
            )
            })
          }  
        </div>}
        <div>
          <a href="#top" className='arrow-up'>UP</a>
        </div>
      </div>
    )
  }
}

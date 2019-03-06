import React, { Component } from 'react'

export default class Header extends Component {

  state = {
    counter: 1,
  }

  componentDidMount() {
    this.interval = setInterval( this.addImage , 3000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  addImage = () => {
    if (this.state.counter === 9) {
      this.setState ({
        counter: 1,
      })
    } else {
      this.setState ({
        counter: this.state.counter + 1,
      })
    }
  }



  render() {
    return (
      <header style={{ backgroundImage: `url(/images/background${this.state.counter}.png)`  }} className='backgroundImages'>
      <div className="main-content">
        <h1>Se acabó ser uno más</h1>
        <p>Tired of wearing the same as everybody else?</p>
        <p>Do not you think it is time to express yourself?</p>
        <p>Let's get started...</p>
        <a href="#configurator"><button className="main-btn">Configure Your Shirt</button></a>
      </div>
    </header>
    )
  }
}

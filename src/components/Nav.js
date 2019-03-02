import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="/"><img src="images/haguaii.png" alt="logo"/></a>
        <a href="https://www.linkedin.com/in/davidredondo83/" target="_blank" rel="noopener noreferrer" className="donate-link">
        <button className="donate-btn">DONATE</button></a>
      </nav>
    )
  }
}

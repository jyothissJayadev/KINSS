import React from 'react'
import possibilityImage from '../../img/possibility.png'
import './Section3.css'

const Section3 = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>With Kinss, users can unlock the power of immersive experiences, cutting-edge technology, boundless exploration, and seamless connection, creating a truly remarkable virtual reality journey.</p>
      <h4 className='cursor'>Request Early Access to Get Started</h4>
    </div>
  </div>
  )
}

export default Section3

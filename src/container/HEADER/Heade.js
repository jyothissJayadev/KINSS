import React from 'react'
import './Header.css'
import people from '../../img/people.png'
import ai from '../../img/ai.png'

const Heade = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with KINSS V-R</h1>
      <p>
Kinss: Unleash the power of VR. Experience mind-blowing adventures, explore new realms, and connect like never before. Pushing boundaries and fueling imagination, Kinss is all about building something incredible in the world of virtual reality. Let's dive in and create unforgettable experiences together.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  )
}

export default Heade

import React from 'react'
import './Footer.css'
import gpt3Logo from '../../img/logo1.png'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
    

 

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Email</p>
        <p>Social Media</p>
        <p>Chat</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Madiwala banglore india</p>
        <p>085-132567</p>
        <p>kinss2022@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 KINSS. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer

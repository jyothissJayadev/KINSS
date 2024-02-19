import React from 'react'
import logo from '../../img/logo1.png'
import {RiCloseLine,RiMenu3Line} from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} />
          </div>
          <div className="gpt3__navbar-links_container">
            <Link to='/'> <p><a >Home</a></p></Link>
           
            <Link to='/2'> <p><a >What is KINSS</a></p></Link>
           
            <Link to='/3'> <p><a >virtual Reality</a></p></Link>
          
            <Link to='/5'> <p><a >Library</a></p></Link>
           
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
          )}
        </div>
      </div>
  )
}

export default Nav

import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../../images/logo.png'
import { useRef } from 'react';
const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
  navRef.current.classList.toggle("active");
  }
  return (
  <>
  <React.Fragment>
  <header>
    <div className="logo">
      <img src={logo} alt="logo"/>
    </div>

    <nav ref={navRef}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Menu-container">Menu</Link></li>
          <li><Link to="/About-container">About</Link></li>
          <li><Link to="/Reviews-container">Reviews</Link></li>
          <li><Link to="/Contact-container">Contact</Link></li>
          <li>
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languge
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">English</a></li>
              <li><a className="dropdown-item" href="/">Arabeic</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">other Languge</a></li>
            </ul>
        </li>
        </ul>
        <i className='close-icon fa fa-xmark' onClick={showNavbar}></i>
    </nav>

    <div className='nav-icon'>
    <i className='menu-bars fa fa-bars' onClick={showNavbar}></i>
    <i className="fas fa-shopping-cart"></i>
    </div>
  </header>
  </React.Fragment>
  </>
  )
}

export default Header
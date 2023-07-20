import React from 'react'
import logo from '../../assets/paloma_header.png';
import './header.css'


const Header = () => {
  return (
    <div className="paloma__header">
      <div className="paloma__header-image">
        <div className="fade-in">
        <img src={logo} alt='logo' />
        </div>
      </div>      
    </div>
  )
}

export default Header
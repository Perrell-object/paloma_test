import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="https://perrellarray.netlify.app/">Hear</a></p>
  <p><a href="https://perrellarray.netlify.app/">Latest</a></p>
  <p><a href="https://www.google.com/">Tour</a></p>
  <p><a href="https://www.google.com/">See</a></p>
  <p><a href="https://www.google.com/">Shop</a></p>
  <p><a href="https://www.google.com/">Watch</a></p>
  <p><a href="https://perrellarray.netlify.app/">Personal</a></p>
  <p><a href="https://www.google.com/">Aid</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  // <div className="fade-in-bottom">
    <div className="paloma__navbar">
      <div className="paloma__navbar-text">
      <div className="paloma__navbar-text_container fade-in">
        <Menu />
      </div>
      <div className="paloma__navbar-bmenu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={50} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={50} onClick={() => setToggleMenu(true)} /> 
        }
        {toggleMenu && (
          <div className="paloma__navbar-bmenu_container scale-up-center">
            <div className="paloma__navbar-bmenu_links">
              <Menu />
           
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  // </div>
  )
}

export default Navbar

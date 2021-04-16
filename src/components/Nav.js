import { stack as Menu } from 'react-burger-menu'
import barsSolid from '../images/bars-solid.svg'
import React from 'react'

function NavBar () {
  return (
    <Menu right customBurgerIcon={ <img src={barsSolid} alt="navMenuBars" /> }>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/services">Services</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  )
}
export default NavBar

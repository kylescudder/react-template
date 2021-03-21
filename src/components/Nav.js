import { stack as Menu } from 'react-burger-menu'
import barsSolid from '../images/bars-solid.svg'

function NavBar () {
  return (
        <Menu pageWrapId={ 'page-wrap' } right customBurgerIcon={ <img src={barsSolid} alt="navMenuBars" /> }>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/services">Services</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
        </Menu>
  )
}
export default NavBar

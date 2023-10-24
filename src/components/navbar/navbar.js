// rafce and enter
import React from 'react';
import './navbar.css'
import logo from '../../assets/winy.png'
import { Link } from 'react-scroll';
import contactImg from '../../assets/w (3).png';
const Navbar = () => {
  return (
 <nav className='navbar'  >
 <img src ={logo} alt="logo" className='logo'/>
 <div className="desktopmenu">
<Link className="desktopMenuListItem">Home </Link>
<Link className="desktopMenuListItem">About </Link>
<Link className="desktopMenuListItem">Portfolio </Link>
<Link className="desktopMenuListItem">Client </Link>
 </div>
<button className = "desktopmenuBtn">
   <img src = {contactImg} alt = "" width = "50" height ="50" className = "desktopMenuImg"/> contact me
</button>
 </nav>
  )
}

export default Navbar
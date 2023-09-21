"use client"
import React, {useState} from 'react'
import logo from '../images/FraktionalLogo.png'
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Image from 'next/image';
import "../styles/home.css"
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  

  return (
    <div className="container">
     
      
         
     <a href='/'>
     <Image className="navbar-brand"  src = {logo} width={200} height={300}  alt = "logo" />
      </a>
          
           
         
      <div className='headerContainer'>
    
        <div className={`menuIcon ${menuOpen ? 'mobile' : ''}`} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars size={20} />} {/* Use the React Icons components */}
        </div>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li >Home</li>
          <li>Landings</li>
          <li>Company</li>
          <li>Account</li>
          <li>Pages</li>
          <li>Blogs</li>
        </ul>

    </div>
   
      </div>
  )
}

export default Header

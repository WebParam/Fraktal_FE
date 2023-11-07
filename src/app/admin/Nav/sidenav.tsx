import React from 'react';
import Image from 'next/image';
import logo from '../../images/FraktionalLogo.png'
import './sideNav.scss';


function SideNav() {
    return(
      
        <div id="mySidenav" className="sidenav">
            <div>
                <Image
                    src={logo}
                    alt="logo"
                    className="logo"
                />
            </div>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>


    )
}
export default SideNav
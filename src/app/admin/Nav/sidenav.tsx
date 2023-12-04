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
            <div className='center-container'>
                <div className='company'>
                    <p>Company A</p>
                    <p>CompanyA@gmail.com</p>
                </div>
            </div>
            <div className='navHeader'>
            <h6>Fraktional</h6><h6 style={{ color: '#FF7BED' }}>.Dev</h6>
            </div>
           
            <a href="#">Developers</a>
            <a href="#">Job Posts</a>
            <a href="#">Analytics</a>
            <a href="#">Notifications</a>
            <a href="#">Settings</a>
        </div>


    )
}
export default SideNav
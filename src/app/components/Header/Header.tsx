import { memo, useState, ReactElement, FC } from 'react';
import './Header.scss';
import logo from '../../../assets/additional/logo.webp';
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  menuTogglerFunction: (state: boolean) => void;
  menuTogglerValue: boolean;
};

const Header: FC<HeaderProps> = ({ menuTogglerFunction, menuTogglerValue }: HeaderProps): ReactElement => {

  return (
    <header className='header'>
      <a href="#home">
        <Image src={logo} alt="logo" />
      </a>

      <nav>
        <ul className='header-navItems'>
          <li>
            <Link href='/' passHref>
              Home
            </Link>
          </li>
          <li className="dropdown-li liOneDesk">
            Company <i className="bi bi-chevron-down"></i>
            <div className='dropdown-Items dropdownOne'>
              <Link href='/about'>About</Link>
              <Link href='/services'>Services</Link>
              <Link href='/'>Customer Stories</Link>
              <Link href='/'>Customer Story</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Careers Overview</Link>
              <Link href='/'>Hire Us</Link>
              <Link href='/pricing'>Pricing</Link>
              <Link href='/'>Contacts: Agency</Link>
              <Link href='/'>Contacts: Startup</Link>
            </div>
          </li>
          <li className="dropdown-li liTwoDesk">
            Account <i className="bi bi-chevron-down"></i>
            <div className='dropdown-Items dropdownTwo'>
              <Link href='/auth/register'>Authentication</Link>
              <Link href='/'>Personal Info</Link>
              <Link href='/'>Security</Link>
              <Link href='/'>Notifications</Link>
              <Link href='/'>Preference</Link>
              <Link href='/'>Orders</Link>
              <Link href='/'>Wishlist</Link>
              <Link href='/'>Payments</Link>
              <Link href='/'>Address</Link>
              <Link href='/'>Teams</Link>
            </div>
          </li>
          <li className="dropdown-li liThreeDesk">
          Pages <i className="bi bi-chevron-down"></i>
            <div className='dropdown-Items dropdownThree'>
              <Link href='/'>FAQ</Link>
              <Link href='/'>Terms & Conditions</Link>
              <Link href='/'>Privacy & Policy</Link>
              <Link href='/'>Coming Soon</Link>
              <Link href='/'>Maintainance Mode</Link>
              <Link href='/'>Invoice</Link>
              <Link href='/'>Status</Link>
              <Link href='/'>Error 404</Link>
            </div>
          </li>
          <li className="dropdown-li liFourDesk">
          Blog <i className="bi bi-chevron-down"></i>
            <div className='dropdown-Items dropdownFour'>
              <Link href='/'>Journal</Link>
              <Link href='/'>Metro</Link>
              <Link href='/'>Newsroom</Link>
              <Link href='/'>Article</Link>
              <Link href='/'>Author Profile</Link>
            </div>
          </li>
          <li className="dropdown-li liFiveDesk">
          Portfolio <i className="bi bi-chevron-down"></i>
            <div className='dropdown-Items dropdownFive'>
              <Link href='/'>Grid</Link>
              <Link href='/'>Product Article</Link>
              <Link href='/'>Case Studies: Branding</Link>
              <Link href='/'>Case Studies: Product</Link>
            </div>
          </li>
        
          <li className='hirenow'>
              <Link href='/auth/register'>
                Hire Now
              </Link>
            
          </li>
        </ul>
      </nav>

      <div 
        className={`toggle ${menuTogglerValue ? "toggled" : ""}`}
        onClick={() => {
          menuTogglerFunction(!menuTogglerValue)
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default memo(Header);

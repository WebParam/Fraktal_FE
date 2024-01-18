import { memo, useState, ReactElement, FC } from 'react';
import './Header.scss';
import logo from '../../../assets/additional/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/app/banner/Banner';
import loginpage from '../../auth/login/page';

type HeaderProps = {
  menuTogglerFunction: (state: boolean) => void;
  menuTogglerValue: boolean;
};

const Header: FC<HeaderProps> = ({ menuTogglerFunction, menuTogglerValue }: HeaderProps): ReactElement => {

  return (
    <>
   
    <header className='header'>
      <Link href="/">
        <Image src={logo} priority={true} alt="logo" />
      </Link>

      <nav>
        <ul className='header-navItems'>
          <li>
            <Link href='/' style={{color: '#4B4C4E'}}>
              Home
            </Link>
          </li>
          
          <li className="dropdown-li liOneDesk">
          Get a F/ Dev <i className="bi bi-chevron-down"></i>
            <div className='dropdown-Items dropdownOne'>
              <Link href='/fraktional-dev'>Start Hiring on Fraktional</Link>
              {/* <Link href='/faq'>FAQ</Link> */}
             
            </div>
          </li>
          <li className="dropdown-li liOneDesk">
          Get a F/ Gig <i className="bi bi-chevron-down"></i>
            <div className='dropdown-Items dropdownOne'>
              <Link href='/fraktional-gig'>Fraktional Gigs</Link>
              {/* <Link href='/devfaq'>FAQ</Link> */}
            
            </div>
          </li>
          <li >
          <Link style={{color: '#4B4C4E'}} href='/about'>About</Link>
          </li>
          <li >
          <Link style={{color: '#4B4C4E'}} href='/faq'>FAQ</Link>
          </li>
          <li className="dropdown liTwoDesk">
          <Link style={{color: '#4B4C4E'}} href='/contact-us'>Contact us</Link>
          </li>
          {/* <li className="dropdown-li liThreeDesk">
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
          </li> */}
        
          <li className='hirenow'>
              <Link href={'../../auth/login'}>
                Login
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
    </>
  );
};

export default memo(Header);
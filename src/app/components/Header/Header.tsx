import { memo, useState, ReactElement, FC } from 'react';
import './Header.scss';
import logo from '../../../assets/additional/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/app/banner/Banner';
import loginpage from '../../auth/login/page';
import { usePathname } from 'next/navigation'

type HeaderProps = {
  menuTogglerFunction: (state: boolean) => void;
  menuTogglerValue: boolean;
};

const Header: FC<HeaderProps> = ({ menuTogglerFunction, menuTogglerValue }: HeaderProps): ReactElement => {
  const pathname = usePathname();

  return (
    <>
   
    <header className='header'>
      <Link href="/">
        <Image src={logo} priority={true} alt="logo" />
      </Link>

      <nav>
        <ul className='header-navItems'>
          <li>
            <Link href='/' style={{color: '#4B4C4E'}} className={`${pathname === '/' ? 'activeLink':''}`}>
              Home
            </Link>
          </li>
          
          <li style={{color: '#4B4C4E'}} className={`dropdown-li liOneDesk ${pathname === '/fraktional-dev' ? 'activeLink':''}`}>
            F/ Dev <i className="bi bi-chevron-down"></i>
            <div className='dropdown-Items dropdownOne'>
              <Link href='/fraktional-dev'>Start Hiring on Fraktional</Link>
              {/* <Link href='/faq'>FAQ</Link> */}
             
            </div>
          </li>
          <li className={`dropdown-li liOneDesk ${pathname === '/fraktional-gig' ? 'activeLink':''}`}>
          F/ Gig <i className="bi bi-chevron-down"></i>
            <div className='dropdown-Items dropdownOne'>
              <Link href='/fraktional-gig'>Find a Fraktional Gig</Link>
              {/* <Link href='/devfaq'>FAQ</Link> */}
            
            </div>
          </li>
          <li >
          <Link style={{color: '#4B4C4E'}} href='/about' className={`${pathname === '/about' ? 'activeLink':''}`}>About</Link>
          </li>
          <li >
          <Link style={{color: '#4B4C4E'}} href='/blog-posts' className={`${pathname === '/blog-posts' ? 'activeLink':''}`}>News</Link>
          </li>
          <li >
          <Link style={{color: '#4B4C4E'}} href='/faq' className={`${pathname === '/faq' ? 'activeLink':''}`}>FAQ</Link>
          </li>
          <li className="dropdown liTwoDesk">
          <Link style={{color: '#4B4C4E'}} href='/contact-us' className={`${pathname === '/contact-us' ? 'activeLink':''}`}>Contact us</Link>
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
        
          <li 
            style={{
              background: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(0, 63, 189, 0.4) 124.34%)',
              padding: '10px',
              borderRadius: '8px'
            }}

          className='hirenow'>
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
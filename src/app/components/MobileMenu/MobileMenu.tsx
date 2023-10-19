import { useState, ReactElement } from 'react';
import './MobileMenu.scss';
import Link from 'next/link';

type MobileMenuProps = {
  menuToggler: boolean;
};

const MobileMenu = ({ menuToggler }: MobileMenuProps): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<string | null>('home');

  const selectItemHandler = (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <div className={`mobileMenu ${menuToggler ? 'open' : ''}`}>
      <ul className={`${menuToggler ? 'open' : ''}`}>
        <li
          onClick={() => {
            selectItemHandler('home');
          }}
        >
          <Link href="/" style={{ color: '#4B4C4E' }}>
            Home
          </Link>
        </li>
        <li
          className='dropdown-li liOne'
          style={{color: `${selectedItem === 'getDev' ? 'lightpink' : ''}`}}
          onClick={() => {
              selectItemHandler('getDev');
          }}
        >
          Get a F / Dev <i className="bi bi-chevron-down"></i>
          <div className={`dropdown-Items_Mobile dropdownOne ${selectedItem === 'getDev' ? 'clicked' : ''}`}>
            <Link href='/fraktional-dev'>Start Hiring on Fraktional</Link>
              {/* <Link href='/faq'>FAQ</Link> */}
          </div>
        </li>
        <li
          className='dropdown-li liTwo'
          style={{color: `${selectedItem === 'getGig' ? 'lightpink' : ''}`}}
          onClick={() => {
            selectItemHandler('getGig');
          }}
        >
          Get a F / Gig <i className="bi bi-chevron-down"></i>
          <div className={`dropdown-Items_Mobile dropdownTwo ${selectedItem === 'getGig' ? 'clicked' : ''}`}>
          <Link href='/fraktional-gig'>Fraktional Gigs</Link>
              {/* <Link href='/devfaq'>FAQ</Link> */}
          </div>
        </li>
        {/* <li
          className='dropdown-li liThree'
          style={{color: `${selectedItem === 'pages' ? 'lightpink' : ''}`}}
          onClick={() => {
            selectItemHandler('pages');
          }}
        >
          Pages <i className="bi bi-chevron-down"></i>
          <div className={`dropdown-Items_Mobile dropdownThree ${selectedItem === 'pages' ? 'clicked' : ''}`}>
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
        <li
          className={`dropdown-li liFour ${selectedItem === 'blog' ? 'clicked' : ''}`}
          style={{color: `${selectedItem === 'blog' ? 'lightpink' : ''}`}}
          onClick={() => {
            selectItemHandler('blog');
          }}
        >
          Blog <i className="bi bi-chevron-down"></i>
          <div className={`dropdown-Items_Mobile dropdownFour ${selectedItem === 'blog' ? 'clicked' : ''}`}>
            <Link href='/'>Journal</Link>
            <Link href='/'>Metro</Link>
            <Link href='/'>Newsroom</Link>
            <Link href='/'>Article</Link>
            <Link href='/'>Author Profile</Link>
          </div>
        </li>
        <li
          className='dropdown-li liFive'
          style={{color: `${selectedItem === 'portfolio' ? 'lightpink' : ''}`}}
          onClick={() => {
            selectItemHandler('portfolio');
          }}
        >
          Portfolio <i className="bi bi-chevron-down"></i>
          <div className={`dropdown-Items_Mobile dropdownFive ${selectedItem === 'portfolio' ? 'clicked' : ''}`}>
            <Link href='/'>Grid</Link>
            <Link href='/'>Product Article</Link>
            <Link href='/'>Case Studies: Branding</Link>
            <Link href='/'>Case Studies: Product</Link>
          </div>
        </li> */}
       
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li className="hirenow">
          <Link href="/fraktional-dev">Hire Now</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;

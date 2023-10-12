import { useState, ReactElement } from 'react';
import './MobileMenu.scss';
import Link from 'next/link';

type MobileMenuProps = {
  removeMenu: () => void;
  menuToggler: boolean;
};

const MobileMenu = ({ removeMenu, menuToggler }: MobileMenuProps): ReactElement => {
  const [home, setHome] = useState(true);
  const [company, setCompany] = useState(false);
  const [account, setAccount] = useState(false);
  const [pages, setPages] = useState(false);
  const [blog, setBlog] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>('home');

  const selectItemHandler = (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <div className={`mobileMenu ${menuToggler ? 'open' : ''}`}>
      <ul className={`${menuToggler ? 'open' : ''}`}>
        <li
          onClick={() => {
            removeMenu();
            selectItemHandler('home');
          }}
        >
          <Link href="/" style={{ color: '#4B4C4E' }}>
            Home
          </Link>
        </li>
        <li
          className='dropdown-li liOne'
          style={{color: `${selectedItem === 'company' ? 'lightpink' : ''}`}}
          onClick={() => {
            removeMenu();
            selectItemHandler('company');
            setCompany(!true)
          }}
        >
          Company <i className="bi bi-chevron-down"></i>
          <div className={`dropdown-Items_Mobile dropdownOne ${selectedItem === 'company' ? 'clicked' : ''}`}>
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
        <li
          className='dropdown-li liTwo'
          style={{color: `${selectedItem === 'account' ? 'lightpink' : ''}`}}
          onClick={() => {
            removeMenu();
            selectItemHandler('account');
          }}
        >
          Account <i className="bi bi-chevron-down"></i>
          <div className={`dropdown-Items_Mobile dropdownTwo ${selectedItem === 'account' ? 'clicked' : ''}`}>
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
        <li
          className='dropdown-li liThree'
          style={{color: `${selectedItem === 'pages' ? 'lightpink' : ''}`}}
          onClick={() => {
            removeMenu();
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
            removeMenu();
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
            removeMenu();
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
        </li>
        <li className="hirenow">
          <Link href="/auth/register">Hire Now</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;

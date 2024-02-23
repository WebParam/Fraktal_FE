import { useState, ReactElement } from 'react';
import './MobileMenu.scss';
import Link from 'next/link';
import Banner from '../../banner/Banner';
import { usePathname } from 'next/navigation'

type MobileMenuProps = {
  menuToggler: boolean;
};

const MobileMenu = ({ menuToggler }: MobileMenuProps): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<string | null>('home');
  const pathname = usePathname();

  const selectItemHandler = (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <>
    <Banner />
    <div className={`mobileMenu ${menuToggler ? 'open' : ''}`}>
      <ul className={`${menuToggler ? 'open' : ''}`}>
        <li
          onClick={() => {
            selectItemHandler('home');
          }}
        >
          <Link href="/" style={{ color: '#4B4C4E' }} className={`${pathname === '/' ? 'MobileactiveLink':''}`}>
            Home
          </Link>
        </li>
        <li
          className={`dropdown-li liOne ${pathname === '/fraktional-dev' ? 'MobileactiveLink':''}`}
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
          className={`dropdown-li liTwo ${pathname === '/fraktional-gig' ? 'MobileactiveLink':''}`}
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
         <li>
       <Link style={{ color: '#4B4C4E' }} href='/blog-posts' className={`${pathname === '/blog-posts' ? 'MobileactiveLink':''}`}>News</Link>
       </li>
        <li>
          <Link style={{ color: '#4B4C4E' }} href="/about" className={`${pathname === '/about' ? 'MobileactiveLink':''}`}>About</Link>
        </li>
        <li>
          <Link style={{ color: '#4B4C4E' }} href="/contact-us" className={`${pathname === '/contact-us' ? 'MobileactiveLink':''}`}>Contact Us</Link>
        </li>
        <li>
          <Link style={{ color: '#4B4C4E' }} href="/fraktional-dev">Hire Now</Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default MobileMenu;

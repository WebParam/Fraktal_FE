import { memo, useState, ReactElement } from 'react';
import './Header.scss';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';

type HeaderProps = {
  menuTogglerFunction: (state: boolean) => void;
  menuTogglerValue: boolean;
};

const Header = memo(({ menuTogglerFunction, menuTogglerValue }: HeaderProps): ReactElement => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('home');

  const handleMenuItemClick = (menuItem: string): void => {
    setActiveMenuItem(menuItem);
  };

  return (
    <header className='header'>
      <a href="#home">
        <Image src={logo} alt="logo" priority={true} />
      </a>

      <nav>
        <ul className='header-navItems'>
        <li>
          <a
            href="#home"
            className={activeMenuItem === 'home' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('home');
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href=""
            className={activeMenuItem === 'item2' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('item2');
            }}
          >
            item 2
          </a>
        </li>

        <li>
          <a
            href=""
            className={activeMenuItem === 'item3' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('item3');
              
            }}
          >
            item 3
          </a>
        </li>
        
        <li>
          <a
            href=""
            className={activeMenuItem === 'item4' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('item4');
            }}
          >
            item 4
          </a>
        </li>
        
        <li>
          <a
            href=""
            className={activeMenuItem === 'item5' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('item5');
            }}
          >
            item 5
          </a>
        </li>
        
        <li>
          <a
            href=""
            className={activeMenuItem === 'item6' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('item6');
            }}
          >
            item 6
          </a>
        </li>
        
        <li>
          <a
            href=""
            className={activeMenuItem === 'item7' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('item7');
            }}
          >
            item 7
          </a>
        </li>

        </ul>
      </nav>

      <div
        className={`toggle ${menuTogglerValue ? 'toggled' : ''}`}
        onClick={() => {
          menuTogglerFunction(!menuTogglerValue);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
});

export default Header;

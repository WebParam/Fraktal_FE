import { useState, ReactElement } from 'react';
import './MobileMenu.scss';

type MobileMenuProps = {
  removeMenu: () => void;
  menuToggler: boolean;
};

const MobileMenu = ({ removeMenu, menuToggler }: MobileMenuProps): ReactElement => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('home');

  const handleMenuItemClick = (menuItem: string): void => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className={`mobileMenu ${menuToggler ? 'open' : ''}`}>
      <ul className={`${menuToggler ? 'open' : ''}`}>
        <li>
          <a
            href="#home"
            className={activeMenuItem === 'home' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('home');
              removeMenu();
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
              removeMenu();
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
              removeMenu();
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
              removeMenu();
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
              removeMenu();
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
              removeMenu();
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
              removeMenu();
            }}
          >
            item 7
          </a>
        </li>

      </ul>
    </div>
  );
};

export default MobileMenu;

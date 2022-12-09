import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from '../utils/hooks/useWindowSize';

function Header({ onShowSidebar, isMiniSidebar }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const headerRef = useRef();
  const size = useWindowSize();

 

  const renderNavRight = () => {
    return (
      <div className='navbar-right'>
        <ul className='navbar-right__menu'>
          <li className='nav-link'>
            <ul className='nav-link-top'></ul>
          </li>
          <li className='nav-flag-author'></li>
        </ul>
      </div>
    );
  };

  return (
    <header className='header-top'>
      <nav className='navbar navbar-light'>
        <div className='navbar-left'>
          <div onClick={onShowSidebar} ref={headerRef} className='menu-mini'>
            {isMiniSidebar ? <i className='fas fa-indent'></i> : <i className='fas fa-outdent'></i>}
          </div>
          <Link href='/' passHref>
            <div className='navbar-img'>
             
            </div>
          </Link>
          <div className='info-merchant'>
            <div className='name-merchant'>
             
            </div>
            <div className='id-merchant'>
             
            </div>
          </div>
        </div>
       
      </nav>
     
    </header>
  );
}

export default Header;

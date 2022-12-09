import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sidebarMenuList from '../constants/SidebarMenuList';
const ROLES_IS_ALLOW_GOLIVE = ['MANAGER', 'OWNER'];

function Menu({ classMobile = null, onShowSidebar, onMiniSidebar }) {
  const router = useRouter();
  const dispatch = useDispatch();
  let xDown = null;
  let yDown = null;
  const [showNotice, setShowNotice] = useState(false);
  const sidebarRef = useRef();
  const [showGolive, setShowGolive] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // onMiniSidebar();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef]);

  const handleOpenKyc = () => {
    dispatch(kyc(true));
    dispatch(addMasterMCAction({ action: false, switch: false }));
  };

  useEffect(() => {
    const sidebar = document.getElementById('sidebar-nav');
    const items = sidebar.getElementsByTagName('a');
    let url = null;
    sidebarMenuList.map((item) => {
      item.children.map((iChildren) => {
        if (
          iChildren?.path === router.pathname ||
          iChildren?.urlActive.find((i) => i === router.pathname)
        ) {
          url = iChildren?.path;
        }
      });
    });
    if (url === null) {
      return;
    }

    for (let i = 0; i < items.length; ++i) {
      if (url === items[i].pathname) {
        items[i].classList.add('active');
        setShowNotice(!(url === '/payment/new'));
        return;
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart, false);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart, false);
    };
  });

  useEffect(() => {
    document.addEventListener('touchmove', handleTouchMove, false);
    return () => {
      document.removeEventListener('touchmove', handleTouchMove, false);
    };
  });
  const getTouches = (evt) => {
    return evt.touches || evt.originalEvent.touches;
  };

  const handleTouchStart = (e) => {
    const firstTouch = getTouches(e)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleHideGolive = () => {
    setShowGolive(false);
    formGolive.clearErrors();
    formGolive.reset();
  };

  const handleTouchMove = (e) => {
    if (!xDown || !yDown) {
      return;
    }
    var xUp = e.touches[0].clientX;
    var yUp = e.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        onMiniSidebar();
      } else {
        if (xDown <= 50) {
          onShowSidebar();
        }
      }
    }
    xDown = null;
    yDown = null;
  };

  const renderMenuSidebar = () => {
    return sidebarMenuList.map((item, index) => {
      return (
        <div key={index}>
          <div className='title-sidebar-setting'>
            {item.title && <span className='label-menu-group'>{item.title}</span>}
          </div>
          <ul>
            {item.children.map((child, key) => {
              return (
                <li key={key} data-title={child.title}>
                  <Link href={child.path} data-layout='light'>
                    <a>
                      <i className={child.icon}></i>
                      <span>{child.title}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  const approvedRef = useRef();

  return (
    <div className={`sidebar ${classMobile}`} id='sidebar' onClick={onShowSidebar} ref={sidebarRef}>
      <div className='sidebar__menu-group'>
        <ul className='sidebar_nav' id='sidebar-nav'>
          {renderMenuSidebar()}
        </ul>
      </div>
    </div>
  );
}

export default Menu;

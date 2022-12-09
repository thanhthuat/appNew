import React, { useEffect, useLayoutEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
//import {useWindowSize} from '../utils/hooks/useWindowSize'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function MainLayout(props) {
  const [width, height] =useWindowSize();
  const [isMiniSidebar, setIsMiniSidebar] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (width <= 1200) {
      setIsMiniSidebar(isHover || (!isHover && width <= 1200));
    }
  }, []);

  // console.log(isMiniSidebar)
  const onShowSidebar = () => {
    if (width <= 1200) {
      // setIsHover(true);
      // setIsMiniSidebar(false);
      // setIsHover((state) => !state);
      setIsMiniSidebar(!isMiniSidebar);
    }
  };
  const handleClickOutside1 = () => {
    if (width <= 1200) {
      // setIsHover(true);
      // setIsMiniSidebar(false);
      // setIsHover((state) => !state);
      setIsMiniSidebar(false);
    }
  };

  const onMiniSidebar = () => {
    if (width <= 1200) {
      setIsHover(false);
      setIsMiniSidebar(true);
    }
  };
  return (
    <div className='layout-light side-menu overlayScroll tools-container'>
      <Header onShowSidebar={onShowSidebar} isMiniSidebar={isMiniSidebar} />
      <div className='main-content'>
        <Sidebar
          classMobile={width <= 1200 && isMiniSidebar && 'mini'}
          onShowSidebar={onShowSidebar}
          onMiniSidebar={onMiniSidebar}
          handleClickOutside1={handleClickOutside1}
        />
        <div className={`contents ${width <= 1200 && 'mini'}`}>
          <div className='container-fluid'>{props.children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;


import { useRef, useState } from 'react';
import { useOnClickOutside } from '../utils/hooks/useOnClickOutside';

export default function Footer({ isFull = false }) {
  const [show, setShow] = useState(false);
  const [hiden, setHiden] = useState(false);
  const [bounds, setBounds] = useState({ x: 0, y: 0 });
  const elementSupport = useRef();
  const elementButton = useRef();
  const keyIsDrag = 'isDragKey';

  const getIsDrag = () => {
    return localStorage.getItem(keyIsDrag) === 'true';
  };

  const setIsDrag = (tmp) => {
    localStorage.setItem(keyIsDrag, tmp);
  };

  const handleShowTicket = () => {
    if (!getIsDrag()) {
      if (show) {
        setHiden(true);
        setTimeout(() => setShow((state) => !state), 480);
      } else {
        setHiden(false);
        setShow((state) => !state);
      }
    }
  };

  const onStart = () => {
    setIsDrag(true);
    setTimeout(() => {
      handleShowTicket();
    }, 200);
  };

  const handleStop = (event, dragElement) => {
    setBounds({ x: 0, y: dragElement.y });
    setTimeout(() => {
      setIsDrag(false);
    }, 80);
  };

  useOnClickOutside([elementSupport, elementButton], () => {
    if (show) {
      setShow(false);
    }
  });

  return (
    <>
     
      <div
        className={`footer ${isFull ? 'w-100' : ''}`}
        style={
          isFull
            ? {
                width: '100%',
                left: 0,
              }
            : {}
        }>
        <div className='left'>
          {'Powered by Thanh Thuat' }
        
        </div>
        <div className='right'>
         
          
        </div>
      </div>
    </>
  );
}

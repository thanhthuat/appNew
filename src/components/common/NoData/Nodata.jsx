import React from 'react';
import Image from 'next/image';
import img from '../../../../assets/img/no-data.png'
export default function Nodata({ imageDataEmpty, messageDataEmpty }) {
 
  return (
    <div className='no-data-table'>
      <Image src={img} alt='no-data' />
      <span className='d-block' style={{ marginLeft: -10 }}>
        No data
      </span>
    </div>
  );
}

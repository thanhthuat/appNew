import React from 'react';
import Image from 'next/image';
import activeImg from '../../../assets/img/Icon-filter_active.png';
import Img from '../../../assets/img/Icon-filter.png';

export default function HeaderPaymentLink({
  isCreate,
  toggleModalCreatePaymentLink,
  showFilter,
  toggleFilter,
}) {
  return (
    <div className='headerCountry'>
      <div className='headerCountry-title'>{'Sumary'}</div>
      <div className='headerCountry-filter' style={{ flexWrap: 'nowrap' }}>
        <button
          className={` btn-filter  ${showFilter ? 'btn-filter-active' : ''}`}
          onClick={() => toggleFilter()}>
          <Image src={showFilter ? activeImg : Img}  alt='' />
          <span className='ml-2'>
          {showFilter ? 'Hide filter' : 'Filter'}
          </span>
         
        </button>
      </div>
    </div>
  );
}

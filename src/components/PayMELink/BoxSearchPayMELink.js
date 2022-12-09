import classNames from 'classnames';
import React, { useState } from 'react';

const optionFillter = [
  { title: 'The most total confirmed cases', value: 'total_confirmed' },
  { title: 'The highest number of deaths', value: 'highest_deaths' },
  { title: 'The least number of recovered cases', value: 'least_recovered' },
];
export default function BoxSearchPaymentLink({ handleClickFilter, showFilter }) {
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [selectValue, setSelectValue] = useState('All');
  const handleChangeOption = (e) => {
    const { name, value } = e.target;
    if (name === 'option') {
      setSelectValue(value);
    }
  };

  return (
    <div className={classNames({' animate-search':showFilter})}>
      {showFilter ? (
        <div className='boxSearch'>
          <label>Filter</label>
          <div className='boxSearch-content '>
            <select
              onChange={handleChangeOption}
              name='option'
              value={selectValue}
              className='form-control'>
              <option value='All' disabled hidden>
                Select option
              </option>
              {optionFillter.map((item, id) => {
                return (
                  <option value={item.value} key={item.value}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <button onClick={() => handleClickFilter(selectValue)} className='btn-search'>
              Search
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

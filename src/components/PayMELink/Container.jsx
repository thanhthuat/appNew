import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesSummary } from '../../api/apiConfig';
import alert from '../common/Loading/arlert';
import {
  getCountryList,
  sortHighestDeaths,
  sortLeastRecovered,
  sortTotalConfirmed,
} from '../../redux/actions';
import Modal from '../common/Loading/Modal';


import BoxSearch from './BoxSearch';
import DataTable from './DataTable';
import Header from './Header';

const dateOptions = {
  sevenDay: {
    from: new Date(new Date().setDate(new Date().getDate() - 7)),
    to: new Date(),
  },
};

export default function PaymentLink() {
  const dispatch = useDispatch();
  const dataContry = useSelector((state) => state.countryList.listCountry);
  const [filter, setFilter] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClickFilter = (value) => {
    let dataBuffer = [...dataContry];
    switch (value) {
      case 'total_confirmed':
        dataBuffer.sort((a, b) => b?.TotalConfirmed - a?.TotalConfirmed);
        dispatch(sortTotalConfirmed(dataBuffer));
        break;
      case 'highest_deaths':
        dataBuffer.sort((a,b)=> b?.TotalDeaths - a?.TotalDeaths)
        dispatch(sortHighestDeaths(dataBuffer));
        break;
      case 'least_recovered':
        dataBuffer.sort((a, b) => b?.TotalRecovered - a?.TotalRecovered);
        dispatch(sortLeastRecovered(dataBuffer));
        break;

      default:
        break;
    }
  };

  const handleShowModal = (value) => {
    //   {
    //     "ID": "90e71aba-655e-414f-8e3f-300570c16aa0",
    //     "Country": "Afghanistan",
    //     "CountryCode": "AF",
    //     "Slug": "afghanistan",
    //     "NewConfirmed": 83,
    //     "TotalConfirmed": 206414,
    //     "NewDeaths": 2,
    //     "TotalDeaths": 7837,
    //     "NewRecovered": 0,
    //     "TotalRecovered": 0,
    //     "Date": "2022-12-08T10:48:52.978Z",
    //     "Premium": {}
    // }
    const { CountryCode, Country } = value;

    setFilter({ CountryCode: CountryCode, Country: Country });
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);
  const toggleFilter = () => setShowFilter(!showFilter);
  useEffect(() => {
    dispatch(
      getCountryList({}, (status, res) => {
        if (!status) {
          alert('error', res.Message || 'See in Network');
        }
      })
    );
  }, []);

  return (
    <div className='countryContainer'>
      <Header toggleFilter={toggleFilter} showFilter={showFilter} />
      <BoxSearch handleClickFilter={handleClickFilter} showFilter={showFilter} /> 
      <DataTable data={dataContry} handleShowModal={handleShowModal} />
      {showModal ? <Modal show={showModal} handleClose={handleClose} data={filter} /> : null}
    </div>
  );
}

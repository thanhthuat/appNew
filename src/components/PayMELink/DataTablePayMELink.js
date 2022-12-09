/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import DataTable from 'react-data-table-component';
import dayjs from 'dayjs';
import { NumericFormat } from 'react-number-format';
import Nodata from '../common/NoData/Nodata';
import LoadingInline from '../common/Loading/LoadingInline';
import { useSelector } from 'react-redux';
export default function DataTablePaymentLink({ data, handleShowModal }) {
  const loadingTable = useSelector((state) => state.main?.loadingTable) || false;
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
  const columns = useMemo(
    () => [
      {
        name: 'Country',
        cell: (data) => <div>{data?.Country ?? '-'}</div>,
        maxWidth: '150px',
        // selector: (row) => row.Country,
        // sortable: true,
      },
      {
        name: 'CountryCode',
        cell: (data) => <div>{data?.CountryCode ?? '-'}</div>,
        maxWidth: '150px',
      },
      {
        name: 'NewConfirmed',
        cell: (data) => (
          <div>
            <NumericFormat
              value={data.NewConfirmed ?? '-'}
              displayType='text'
              thousandSeparator=','
            />
          </div>
        ),
        maxWidth: '150px',
      },
      {
        name: 'TotalConfirmed',
        cell: (data) => (
          <div>
            <NumericFormat
              value={data?.TotalConfirmed ?? '-'}
              displayType='text'
              thousandSeparator=','
            />
          </div>
        ),
        maxWidth: '150px',
       
      },
      {
        name: 'NewDeaths',
        cell: (data) => (
          <div>
            <NumericFormat
              value={data?.NewDeaths ?? '-'}
              displayType='text'
              thousandSeparator=','
            />
          </div>
        ),
        maxWidth: '150px',
      },
      {
        name: 'TotalDeaths',
        cell: (data) => (
          <div>
            <NumericFormat
              value={data?.TotalDeaths ?? '-'}
              displayType='text'
              thousandSeparator=','
            />
          </div>
        ),
        maxWidth: '150px',
      },
      {
        name: 'NewRecovered',
        cell: (data) => (
          <div>
            <NumericFormat
              value={data?.NewRecovered ?? '-'}
              displayType='text'
              thousandSeparator=','
            />
          </div>
        ),
        maxWidth: '150px',
      },
      {
        name: 'TotalRecovered',
        cell: (data) => (
          <div>
            <NumericFormat
              value={data?.TotalRecovered ?? '-'}
              displayType='text'
              thousandSeparator=','
            />
          </div>
        ),
        maxWidth: '150px',
      },
      {
        name: 'Date',
        cell: (data) => <div>{data?.Date ? dayjs(data.Date).format('DD/MM/YYYY') : '-'}</div>,
        maxWidth: '150px',
      },
      {
        name: 'Action Show Country',
        cell: (data) => (
          <div className='action'>
            {
              <div onClick={() => handleShowModal(data)} className='gradient-border' id='box'>
                <div className='gradient-display'>Show detail</div>
              </div>
            }
          </div>
        ),
        minWidth: '150px',
        center:true
      },
     
    ],
    []
  );
  return (
    <div className={`table-payment cls-datatable `}>
      <LoadingInline loading={loadingTable} />
      <DataTable
        columns={columns}
        data={data}
        className='data-table-custom'
        pagination
        paginationPerPage={15}
        noDataComponent={<Nodata />}
      />
    </div>
  );
}

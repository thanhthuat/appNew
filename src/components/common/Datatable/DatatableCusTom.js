import useWindowDimensions from '../../../utils/hooks/useWindowSize';

import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

export default function DataTableCustom({
  dataList,
  columns,
  defaultColumn = [],
  isLoading = false,
  nameDataTable,
  className,
  isNotPaginationServer,
  isShowDisplayRowOption = true,
  imageDataEmpty,
  messageDataEmpty,
  defaultPaginationPerPage = 20,
  ...rest
}) {
  
  const [listCol, setListCol] = useState([]);
  const [toggleColumn, setToggleColumn] = useState(false);
  const router = useRouter();
  //const loadingTable = useSelector((state) => state.main.loadingDataTable);

  // const getKeyDataTable = () => {
  //   var key = md5(nameDataTable ? nameDataTable : JSON.stringify(columns));
  //   return { data: localStorage.getItem(key) || null, key };
  // };

  // const getKeyTableStyle = () => {
  //   let key = md5(router.route);
  //   return { data: localStorage.getItem(key) || false, key };
  // };

  // useEffect(() => {
  //   const dataTableCl = getKeyTableStyle();
  //   setToggleColumn(dataTableCl.data);
  // }, []);

  // useEffect(() => {
  //   const dataTableCl = getKeyTableStyle();
  //   localStorage.setItem(dataTableCl.key, toggleColumn);
  // }, [toggleColumn, localStorage]);

  // const toggleColumnView = () => {
  //   const dataTableCl = getKeyTableStyle();
  //   setToggleColumn(!JSON.parse(dataTableCl.data));
  // };

  // const onChangeCol = (e, key) => {
  //   const dataTableCl = getKeyDataTable();
  //   const { checked } = e.target;
  //   const arr = [...listCol];
  //   arr[key] = {
  //     ...arr[key],
  //     omit: !checked,
  //   };
  //   setListCol([...arr]);
  //   const arrCol = [];
  //   arr.map((item) => {
  //     if (item.name) arrCol.push({ name: item.name, isShow: !item.omit });
  //   });
  //   localStorage.setItem(dataTableCl.key, JSON.stringify(arrCol));
  // };

  // const renderListCol = () => {
  //   return listCol.map((item, key) => {
  //     if (!item.name) return null;
  //     return (
  //       <div className='checkbox-theme-default custom-checkbox item-col' key={key}>
  //         <input
  //           className='checkbox'
  //           type='checkbox'
  //           id={'checkbox' + key}
  //           onChange={(e) => onChangeCol(e, key)}
  //           checked={item?.omit ? false : true}
  //         />
  //         <label htmlFor={'checkbox' + key}>
  //           <span className='checkbox-text'>{t(item?.name)}</span>
  //         </label>
  //       </div>
  //     );
  //   });
  // };

  // const renderPaginationComponent = useMemo(
  //   () => ({
  //     rowsPerPageText: `${('Rows per page')}:`,
  //     rangeSeparatorText: ('of'),
  //     noRowsPerPage: false,
  //     selectAllRowsItem: false,
  //     selectAllRowsItemText: ('All'),
  //   }),
  //   []
  // );



  return (
    <div
      className={`table-payment cls-datatable ${className} ${
        JSON.parse(toggleColumn) ? 'data-in-column' : ''
      }`}>
      {/* <LoadingInline loading={isLoading || loadingTable} /> */}
      <DataTable
        striped
        noHeader
        pagination
        highlightOnHover
        columns={columns}
        data={dataList || []}
        className='data-table-custom'
      //  paginationServer={isNotPaginationServer ? false : true}
        // noDataComponent={
        //   <Nodata imageDataEmpty={imageDataEmpty} messageDataEmpty={messageDataEmpty} />
        // }
      //  paginationPerPage={defaultPaginationPerPage}
      //  paginationComponentOptions={renderPaginationComponent}
        {...rest}
      />
      {/* {isShowDisplayRowOption && dataList?.length > 0 && (
        <div className='show-hide-col'>
          <Dropdown>
            <Dropdown.Toggle id='dropdown-button-drop-up'>
              <i className='fas fa-list'></i>
              <div>{t('Display options')}</div>
              <div className='icon-up'>
                <i className='fas fa-caret-up'></i>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>{renderListCol()}</Dropdown.Menu>
            <button
              className='btn btn-primary btn-hover__push ml-3'
              style={{ padding: '8px', borderRadius: '8px' }}
              onClick={toggleColumnView}>
              <img src='/assets/img/svg/grid.svg' alt='toggle' />
            </button>
          </Dropdown>
        </div>
      )} */}
    </div>
  );
}

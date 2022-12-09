
import  * as types from '../types/index';
export function getCountryList(data, callback) {
    return {
      type: types.GET_COUNTRY_LIST.REQUEST,
      payload: data,
      callback,
    };
  }

  export function sortTotalConfirmed(data) {
    return {
      type: types.SORT_TOTAL_CONFIRMED.REQUEST,
      payload: data,
    };
  }

  export function sortHighestDeaths(data) {
    return {
      type: types.SORT_HIGHEST_DEATHS.REQUEST,
      payload: data,
    };
  }

  export function sortLeastRecovered(data) {
    return {
      type: types.SORT_LEAST_RECOVERED.REQUEST,
      payload: data,
    };
  }
  export function getDetailCountry(data, callback) {
    return {
      type: types.GET_DETAIL_COUNTRY.REQUEST,
      payload: data,
      callback,
    };
  }

  export function getTvList(data, callback) {
    return {
      type: types.GET_TV_LIST.REQUEST,
      payload: data,
      callback,
    };
  }

  export function getSimilarList(data, callback) {
    return {
      type: types.GET_SIMILAR_LIST.REQUEST,
      payload: data,
      callback,
    };
  }
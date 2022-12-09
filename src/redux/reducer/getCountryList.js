import * as types from '../types';

const initialState = {
  loading: false,
  error: false,
  listCountry: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_COUNTRY_LIST.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_COUNTRY_LIST.SUCCESS: {
      return {
        ...state,
        loading: false,
        listCountry: payload.data,
      };
    }
    case types.GET_COUNTRY_LIST.FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
    case types.SORT_TOTAL_CONFIRMED.REQUEST: {
      return {
        ...state,
        listCountry: payload,
      };
    }
    case types.SORT_HIGHEST_DEATHS.REQUEST: {
      return {
        ...state,
        listCountry: payload,
      };
    }
    case types.SORT_LEAST_RECOVERED.REQUEST: {
      return {
        ...state,
        listCountry: payload,
      };
    }
    
    

    default:
      return state;
  }
};

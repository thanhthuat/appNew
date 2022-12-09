import * as types from '../types';

const initialState = {
  loading: false,
  error: false,
  detailCountry: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DETAIL_COUNTRY.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_DETAIL_COUNTRY.SUCCESS: {
      return {
        ...state,
        loading: false,
        detailCountry: payload.data,
      };
    }
    case types.GET_DETAIL_COUNTRY.FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
    default:
      return state;
  }
};

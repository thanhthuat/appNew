import * as types from '../types';

const initialState = {
  loadingTable: false,
  loadingFullscreen: false,
  errorApi: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOADING_TABLE.SHOW: {
      return {
        ...state,
        loadingTable: true,
      };
    }
    case types.LOADING_TABLE.HIDEN: {
      return {
        ...state,
        loadingTable: false,
      };
    }
    case types.LOADING_FULLSCREEN.SHOW: {
      return {
        ...state,
        loadingFullscreen: true,
      };
    }
    case types.LOADING_FULLSCREEN.HIDEN: {
      return {
        ...state,
        loadingFullscreen: false,
      };
    }
    default:
      return state;
  }
};

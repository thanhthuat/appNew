
// import * as types from '../types';

// const initialState = {
//   loading: false,
//   error: false,
//   listMovie: [],
// };

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.GET_MOVIES_CAROUSEL_LIST.REQUEST: {
//       return {
//         ...state,
//         loading: true,
//       };
//     }
//     case types.GET_MOVIES_CAROUSEL_LIST.SUCCESS: {
//       const { list } = payload;
//       return {
//         ...state,
//         loading: false,
//         listMovie: payload,
//       };
//     }
//     case types.GET_MOVIES_CAROUSEL_LIST.FAILURE: {
//       return {
//         ...state,
//         loading: false,
//         error: payload.error,
//       };
//     }

//     default:
//       return state;
//   }
// };

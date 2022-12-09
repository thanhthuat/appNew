import { all, fork } from 'redux-saga/effects';
import getCountryList from './getCountryList';

import getDetailList from './getDetaiCountry';
const arrFork = [
  fork(getCountryList),
  fork(getDetailList),
  
];
function* rootSaga() {
  yield all(arrFork);
}

export default rootSaga;

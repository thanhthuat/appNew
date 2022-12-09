import { call, delay, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import * as types from '../redux/types';
import { getCountriesSummary } from '../api/apiConfig';
function* getCountryList({ payload, callback }) {
  try {
    yield put({ type: types.LOADING_TABLE.SHOW });
    delay(1000)
    const res = yield call(getCountriesSummary, payload);
    yield put({ type: types.LOADING_TABLE.HIDEN });
    if (Array.isArray(res?.data?.Countries)) {
      yield put({
        type: types.GET_COUNTRY_LIST.SUCCESS,
        payload: { data: res?.data?.Countries || [] },
      });
      callback && callback(true, res?.data?.Countries);
    } else {
      yield put({
        type: types.GET_COUNTRY_LIST.FAILURE,
        payload: { error: res || {} },
      });
      callback && callback(false, res.data);
    }
  } catch (error) {
    console.error(error);
    callback && callback(false, { message: 'Lỗi kết nối server' });
    yield put({ type: types.LOADING_TABLE.HIDEN });
  } finally {
    // yield put({ type: types.GET_ADD_FUND_INFO_REFRESH });
  }
}

export default function* watchAction() {
  yield takeLatest(types.GET_COUNTRY_LIST.REQUEST, getCountryList);
}

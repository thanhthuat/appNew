import { call, delay, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import * as types from '../redux/types';
import { getDetailCountry } from '../api/apiConfig';
function* getDetailList({ payload, callback }) {
  try {
    yield put({ type: types.LOADING_FULLSCREEN.SHOW });
    const res = yield call(getDetailCountry, payload?.params);

    yield put({ type: types.LOADING_FULLSCREEN.HIDEN });
    if (Array.isArray(res?.data)) {
      yield put({
        type: types.GET_DETAIL_COUNTRY.SUCCESS,
        payload: { data: res?.data[0] || {} },
      });
      callback && callback(true, res?.data[0]);
    } else {
      yield put({
        type: types.GET_DETAIL_COUNTRY.FAILURE,
        payload: { error: res || {} },
      });
      callback && callback(false, res);
    }
  } catch (error) {
    console.error(error);
    callback && callback(false, { message: 'Lỗi kết nối server' });
    yield put({ type: types.LOADING_FULLSCREEN.HIDEN });
  } finally {
    // yield put({ type: types.GET_ADD_FUND_INFO_REFRESH });
  }
}

export default function* watchAction() {
  yield takeLatest(types.GET_DETAIL_COUNTRY.REQUEST, getDetailList);
}

import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../redux/types';
import tmdbApi from '../api/tmdbApi';
function* getsimilarList({ payload, callback }) {
  try {
    const res = yield call(tmdbApi.similar, payload.type, payload.params);
    callback && callback(true, res?.results);
  } catch (error) {
    console.error(error);
    callback && callback(false, { message: 'Lỗi kết nối server' });
    // yield put({ type: types.SERVER_ERROR_API });
  } finally {
    // yield put({ type: types.GET_ADD_FUND_INFO_REFRESH });
  }
}

export default function* watchAction() {
  yield takeLatest(types.GET_SIMILAR_LIST.REQUEST, getsimilarList);
}

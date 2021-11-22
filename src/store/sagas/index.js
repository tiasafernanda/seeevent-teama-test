import { all } from 'redux-saga/effects';
import eventSaga from './eventSaga';
import { watchLogin } from './auth';
import { watchGetEvents, watchEventSearch } from './event';
// import { watchEventSearch } from './event';

export default function* rootSaga() {
  yield all([eventSaga(), watchGetEvents(), watchLogin(), watchEventSearch()]);
}

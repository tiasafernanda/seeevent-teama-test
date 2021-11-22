import { all } from "redux-saga/effects";
import eventSaga from "./eventSaga";
import { all } from 'redux-saga/effects';
import { watchLogin } from './auth';
import { watchGetEvents, watchGetEventDetail } from './event';

export default function* rootSaga() {
  yield all([eventSaga()]);
}

export default function* rootSaga() {
  yield all([watchGetEvents(), watchGetEventDetail(), watchLogin()]);
}
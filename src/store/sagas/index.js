<<<<<<< HEAD
import { all } from "redux-saga/effects";
import eventSaga from "./eventSaga";
import { watchLogin } from "./auth";
import { watchGetEvents, watchGetEventDetail } from "./event";

export default function* rootSaga() {
  yield all([watchGetEvents(), watchGetEventDetail(), watchLogin(), eventSaga()]);
=======
import { all } from 'redux-saga/effects';
import eventSaga from './eventSaga';
import { watchLogin } from './auth';
import { watchGetEvents, watchEventSearch } from './event';
// import { watchEventSearch } from './event';

export default function* rootSaga() {
  yield all([eventSaga(), watchGetEvents(), watchLogin(), watchEventSearch()]);
>>>>>>> 589b82885d41e34552190b4e96b63bde397ccfe7
}

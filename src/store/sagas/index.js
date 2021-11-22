import { all } from "redux-saga/effects";
import eventSaga from "./eventSaga";
import { watchLogin } from "./auth";
import { watchGetEvents, watchGetEventDetail, watchEventSearch } from "./event";

export default function* rootSaga() {
  yield all([watchGetEvents(), watchGetEventDetail(), watchLogin(), eventSaga(), watchEventSearch()]);
}

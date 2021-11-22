import { call, put, takeEvery } from "redux-saga/effects";
// import detailEvent from "../reducer/event";
import axios from "axios";
const apiUrl = "http://see-event.herokuapp.com/event/${id}";

function getDetailEvent(id) {
  return axios.get(`http://see-event.herokuapp.com/event/${id}`, {
    headers: {
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImZpcnN0X25hbWUiOiJEYXZpZCIsImxhc3RfbmFtZSI6IlJveSIsImVtYWlsIjoiZGF2aWRAcm95LmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJE96RFlDS1JFelI5QkwvaHgwaVN4RU9NZ1J3UzdoaFFSNWV0N2o3cmdISFhHdUgvZGJLRmtDIiwiY3JlYXRlZEF0IjoiMjAyMS0xMS0xNlQwODozMjo1MC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMS0xMS0xNlQwODozMjo1MC4wMDBaIiwiZGVsZXRlZEF0IjpudWxsLCJpYXQiOjE2MzcwNjkxMzN9.-mIvLtDWYskupO58bZMME1c5HurtCjymuu7yhIF2j2I",
    },
  });
}

function* fetchDetailEvent(action) {
  console.log(action, "action");
  try {
    const eventDetail = yield call(getDetailEvent, action.payload);
    console.log(eventDetail, "eventDetail");
    yield put({ type: "GET_DETAIL_EVENT_SUCCESS", detailEvent: eventDetail });
  } catch (e) {
    console.log(e, "e");
    yield put({ type: "GET_DETAIL_EVENT_FAILED", err: e.message });
  }
}

function* eventSaga() {
  yield takeEvery("GET_DETAIL_EVENT_REQUESTED", fetchDetailEvent);
}

export default eventSaga;

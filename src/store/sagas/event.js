import { put, takeEvery } from '@redux-saga/core/effects';
import {
  GET_EVENTS_BEGIN,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  GET_EVENT_DETAIL_BEGIN,
  GET_EVENT_DETAIL_FAIL,
  GET_EVENT_DETAIL_SUCCESS,
  GET_LIST_EVENT_BEGIN,
  GET_LIST_EVENT_FAIL,
  GET_LIST_EVENT_SUCCESS,
  GET_EVENT_SEARCH_BEGIN,
  GET_EVENT_SEARCH_FAIL,
  GET_EVENT_SEARCH_SUCCESS,
} from '../actions/types';
import axios from 'axios';

const baseUrl = 'http://see-event.herokuapp.com';
const token = localStorage.getItem('token');
function* getEvents() {
  try {
    const res = yield axios.get(baseUrl);
    console.log(res);
    yield put({
      type: GET_EVENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_EVENTS_FAIL,
      error: err,
    });
  }
}

function* getEventDetail(actions) {
  const { id } = actions;
  try {
    const res = yield axios.get(`${baseUrl}/event/${id}`);
    console.log(res);
    yield put({
      type: GET_EVENT_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_EVENT_DETAIL_FAIL,
      error: err,
    });
  }
}

function* getEventList() {
  // const { keyword } = actions;
  try {
    const res = yield axios.get(`${baseUrl}/event`);
    console.log(res);
    yield put({
      type: GET_LIST_EVENT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_LIST_EVENT_FAIL,
      error: err,
    });
  }
}

function* getEventSearch(actions) {
  const { keyword } = actions;
  try {
    const res = yield axios.get(`${baseUrl}/home?search=${keyword}`);
    console.log(res);
    yield put({
      type: GET_EVENT_SEARCH_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_EVENT_SEARCH_FAIL,
      error: err,
    });
  }
}

export function* watchGetEvents() {
  yield takeEvery(GET_EVENTS_BEGIN, getEvents);
}

export function* watchGetEventDetail() {
  yield takeEvery(GET_EVENT_DETAIL_BEGIN, getEventDetail);
}

export function* watchEventList() {
  yield takeEvery(GET_LIST_EVENT_BEGIN, getEventList);
}

export function* watchEventSearch() {
  yield takeEvery(GET_EVENT_SEARCH_BEGIN, getEventSearch);
}

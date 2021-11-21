import {
  GET_EVENTS_BEGIN,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  GET_EVENT_DETAIL_BEGIN,
  GET_EVENT_DETAIL_SUCCESS,
  GET_EVENT_DETAIL_FAIL,
  GET_LIST_EVENT_BEGIN,
  GET_LIST_EVENT_FAIL,
  GET_LIST_EVENT_SUCCESS,
} from '../actions/types';

const initialState = {
  events: [],
  loading: false,
  error: null,
  detailEvent: {
    loading: false,
    error: null,
    details: {},
  },
};

const event = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_EVENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        events: payload,
      };
    case GET_EVENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        events: [],
      };
    case GET_EVENT_DETAIL_BEGIN:
      return {
        ...state,
        detailEvent: {
          loading: true,
          error: null,
        },
      };
    case GET_EVENT_DETAIL_SUCCESS:
      return {
        ...state,
        detailEvent: {
          loading: false,
          error: null,
          details: payload,
        },
      };
    case GET_EVENT_DETAIL_FAIL:
      return {
        ...state,
        detailEvent: {
          loading: false,
          error: error,
          details: [],
        },
      };
    case GET_LIST_EVENT_BEGIN:
      return {
        ...state,
        detailEvent: {
          loading: true,
          error: null,
        },
      };
    case GET_LIST_EVENT_SUCCESS:
      return {
        ...state,
        detailEvent: {
          loading: false,
          error: null,
          details: payload,
        },
      };
    case GET_LIST_EVENT_FAIL:
      return {
        ...state,
        detailEvent: {
          loading: false,
          error: error,
          details: [],
        },
      };
  }
};

export default event;

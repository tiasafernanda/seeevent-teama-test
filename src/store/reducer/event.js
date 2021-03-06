import { GET_EVENTS_BEGIN, GET_EVENTS_SUCCESS, GET_EVENTS_FAIL, GET_LIST_EVENT_BEGIN, GET_LIST_EVENT_FAIL, GET_LIST_EVENT_SUCCESS, GET_EVENT_SEARCH_BEGIN, GET_EVENT_SEARCH_FAIL, GET_EVENT_SEARCH_SUCCESS } from "../actions/types";

const initialState = {
  events: [],
  loading: false,
  error: null,
  detailEvent: {
    loading: false,
    error: null,
    details: {},
  },
  searchEvent: {
    loading: false,
    error: null,
    search: [],
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
    case GET_EVENT_SEARCH_BEGIN:
      return {
        ...state,
        searchEvent: {
          loading: true,
          error: null,
        },
      };
    case GET_EVENT_SEARCH_SUCCESS:
      return {
        ...state,
        searchEvent: {
          loading: false,
          error: null,
          search: payload,
        },
      };
    case GET_EVENT_SEARCH_FAIL:
      return {
        ...state,
        searchEvent: {
          loading: false,
          error: error,
          search: [],
        },
      };
    case type.GET_DETAIL_EVENT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_DETAIL_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        detailEvent: action.detailEvent,
      };
    case type.GET_DETAIL_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        err: action.err,
      };
  }
};

// export default function detailEvent(state = initialState, action) {
//   console.log(action.payload);
//   switch (action.type) {
//     case type.GET_DETAIL_EVENT_REQUESTED:
//       return {
//         ...state,
//         loading: true,
//       };
//     case type.GET_DETAIL_EVENT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         detailEvent: action.detailEvent,
//       };
//     case type.GET_DETAIL_EVENT_FAILED:
//       return {
//         ...state,
//         loading: false,
//         err: action.err,
//       };
//     default:
//       return state;
//   }
// }

export default event;

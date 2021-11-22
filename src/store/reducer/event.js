import * as type from "../actions/types";

const initialState = {
  detailEvent: null,
  loading: false,
  err: null,
};

export default function detailEvent(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
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
    default:
      return state;
  }
}

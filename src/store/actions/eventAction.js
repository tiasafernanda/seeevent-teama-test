import * as type from "./types";

export function getDetailEvent(id) {
  return {
    type: type.GET_DETAIL_EVENT_REQUESTED,
    payload: id,
  };
}

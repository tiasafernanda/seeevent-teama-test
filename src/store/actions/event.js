import { GET_EVENTS_BEGIN, GET_EVENT_DETAIL_BEGIN, GET_LIST_EVENT_BEGIN } from './types';

export const getEvents = () => {
  return {
    type: GET_EVENTS_BEGIN,
  };
};

export const getEventDetail = (id) => {
  return {
    type: GET_EVENT_DETAIL_BEGIN,
    id,
  };
};

export const getEventList = (id) => {
  return {
    type: GET_LIST_EVENT_BEGIN,
    id,
  };
};

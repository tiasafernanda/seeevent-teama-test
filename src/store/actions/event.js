import {
  GET_EVENTS_BEGIN,
  GET_EVENT_DETAIL_BEGIN,
  GET_EVENT_SEARCH_SUCCESS,
  GET_LIST_EVENT_BEGIN,
  GET_EVENT_SEARCH_BEGIN,
} from './types';
import axios from 'axios';

export const getEvents = () => {
  return {
    type: GET_EVENTS_BEGIN,
  };
};

// export const getEventDetail = (id) => {
//   return {
//     type: GET_EVENT_DETAIL_BEGIN,
//     id,
//   };
// };

export const getEventList = () => {
  return {
    type: GET_LIST_EVENT_BEGIN,
  };
};

export const getEventSearch = (keyword) => {
  return {
    type: GET_EVENT_SEARCH_BEGIN,
    keyword,
  };
};

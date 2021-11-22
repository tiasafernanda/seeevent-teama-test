import { GET_EVENTS_BEGIN, GET_EVENT_DETAIL_BEGIN, GET_EVENT_SEARCH_SUCCESS, GET_LIST_EVENT_BEGIN } from "./types";
import axios from "axios";

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

export const getEventList = () => {
  return {
    type: GET_LIST_EVENT_BEGIN,
  };
};

export const getEventSearch = (keyword) => {
  console.log(keyword);
  // const res = await axios.get(`http://see-event.herokuapp.com/home?search=${keyword}`);
  // const datas = await res.data;
  // const daata = await datas.data;
  // console.log(daata);
  return {
    type: GET_EVENT_SEARCH_SUCCESS,
    // payload: daata,
  };
};

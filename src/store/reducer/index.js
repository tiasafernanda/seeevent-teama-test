import { combineReducers } from "redux";
import event from "./event";
const rootReducers = combineReducers({
  event: event,
});

export default rootReducers;

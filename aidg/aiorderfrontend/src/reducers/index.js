import { combineReducers } from "redux";
import orders from "./orders";
import errors from "./errors";
import messages from "./messages";
export default combineReducers({
  orders,
  errors,
  messages,
});

import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import {
  GET_ORDERS,
  DELETE_ORDER,
  ADD_ORDER,
  GET_ERRORS,
  CREATE_MESSAGE,
} from "./types";

import { tokenConfig } from "./auth";

//get orders
export const getOrders = () => (dispatch, getState) => {
  axios
    .get("/api/orders/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//delete order
export const deleteOrder = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/orders/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteOrder: "Order Deleted" }));
      dispatch({
        type: DELETE_ORDER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//add orders
export const addOrder = (order) => (dispatch, getState) => {
  console.log(tokenConfig(getState));
  axios
    .post("/api/orders/", order, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addOrder: "Order Added" }));
      dispatch({
        type: ADD_ORDER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

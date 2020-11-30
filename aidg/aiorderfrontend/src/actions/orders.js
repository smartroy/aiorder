import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import {
  GET_ORDERS,
  DELETE_ORDER,
  ADD_ORDER,
  GET_ERRORS,
  CREATE_MESSAGE,
} from "./types";

//get orders
export const getOrders = () => (dispatch) => {
  axios
    .get("/api/orders/")
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
export const deleteOrder = (id) => (dispatch) => {
  axios
    .delete(`/api/orders/${id}/`)
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
export const addOrder = (order) => (dispatch) => {
  axios
    .post("/api/orders/", order)
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

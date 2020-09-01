import axios from "axios";

import { GET_ORDERS, DELETE_ORDER } from "./types";

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
    .catch((err) => console.log(err));
};

//delete order
export const deleteOrder = (id) => (dispatch) => {
  axios
    .delete(`/api/orders/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_ORDER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

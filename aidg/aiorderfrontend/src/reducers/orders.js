import { GET_ORDERS, DELETE_ORDER } from "../actions/types.js";

const initialState = {
  description: "text",
  orders: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    default:
      return state;
  }
}

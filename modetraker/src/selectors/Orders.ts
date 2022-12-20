import { State } from "../Store";

export const orderLoadingSelector = (state: State) => {
  return state.orders.loading;
};

export const ordersSelector = (state: State) => {
  const normalizeorders = state.orders.orders;
  const orderArr = Object.keys(normalizeorders).map(
    (orderId) => normalizeorders[+orderId]
  );
  return orderArr;
};

import Product from "../modules/product";
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
export const ordersMapSelector = (state: State) => {
  return state.orders.orders;
};
export const orderProductSelector = (state: State) => {
  return Object.keys(state.orders.orders).reduce<{
    [productId: number]: Product[];
  }>((previous, currentOrderId) => {
    const order = state.orders.orders[+currentOrderId];
    const products = order.products.map((pid) => state.products.products[pid]);

    return { ...previous, [currentOrderId]: products };
  }, {});
};

import { createSelector } from "reselect";
import Product from "../modules/product";
import { State } from "../Store";
import { productMapSelector } from "./product";

export const orderStateSelector = (state: State) => {
  return state.orders;
};
export const orderLoadingSelector = createSelector(
  orderStateSelector,
  (orderState) => {
    return orderState.loading;
  }
);

// export const ordersMapSelector = (state: State) => {
//   return state.orders.orders;
// };

export const ordersMapSelector = createSelector(
  orderStateSelector,
  (orderState) => {
    return orderState.orders;
  }
);

export const ordersSelector = createSelector(
  ordersMapSelector,
  (normalizeorders) =>
    Object.keys(normalizeorders).map((orderId) => normalizeorders[+orderId])
);
// export const ordersSelector = (state: State) => {
//   const normalizeorders = state.orders.orders;
//   const orderArr = Object.keys(normalizeorders).map(
//     (orderId) => normalizeorders[+orderId]
//   );
//   return orderArr;
// };

export const orderProductSelector = createSelector(
  ordersMapSelector,
  productMapSelector,
  (orderMap, productMap) => {
    return Object.keys(orderMap).reduce<{
      [orderId: number]: Product[];
    }>((previous, currentOrderId) => {
      const order = orderMap[+currentOrderId];
      const products = order.products.map((pid) => productMap[pid]);

      return { ...previous, [currentOrderId]: products };
    }, {});
  }
);

//    export const orderProductSelector = (state: State) => {
//   return Object.keys(state.orders.orders).reduce<{
//     [productId: number]: Product[];
//   }>((previous, currentOrderId) => {
//     const order = state.orders.orders[+currentOrderId];
//     const products = order.products.map((pid) => state.products.products[pid]);

//     return { ...previous, [currentOrderId]: products };
//   }, {});
// };

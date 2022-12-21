import { ActionCreater } from ".";
import Order from "../modules/order";

export const LODE_ORDER = " LODE_ORDER";
export const LodeOrderAction: ActionCreater = () => ({
  type: LODE_ORDER,
});

export const ORDER_LOADED = " ORDER_LOADED";
export const orderLoadedAction: ActionCreater<Order[]> = (oredrs: Order[]) => ({
  type: ORDER_LOADED,
  payload: oredrs,
});

export const ORDER_LOADED_ACTION = " ORDER_LOADED_ACTION";
export const orderLoadingProduct: ActionCreater<Order> = (order: Order) => ({
  type: ORDER_LOADED_ACTION,
  payload: order,
});

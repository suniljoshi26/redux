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

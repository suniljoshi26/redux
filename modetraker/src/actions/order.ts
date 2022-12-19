import { ActionCreater } from ".";

export const LODE_ORDER = " LODE_ORDER";
export const LodeOrderAction: ActionCreater = () => ({
  type: LODE_ORDER,
});

export const ORDER_LOADED = " ORDER_LOADED";
export const orderLoadedAction: ActionCreater<any[]> = (oredrs: any[]) => ({
  type: ORDER_LOADED,
  payload: oredrs,
});

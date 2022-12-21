import produce, { produceWithPatches } from "immer";
import { AnyAction } from "redux";
import { Action } from "../actions/index";
import {
  LODE_ORDER,
  ORDER_LOADED,
  ORDER_LOADED_ACTION,
} from "../actions/order";
import Order from "../modules/order";
type NormalizedOrder = { [id: number]: Order };
export type State = {
  loading: boolean;
  orders: NormalizedOrder;
};
export const initalState: State = {
  loading: false,
  orders: {},
};
function orderReduser(state = initalState, action: Action): State {
  switch (action.type) {
    case LODE_ORDER:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case ORDER_LOADED:
      return produce(state, (draft) => {
        draft.loading = false;
        const orderarr = action.payload;
        const normalizedOrder = orderarr.reduce(function (
          prv: NormalizedOrder,
          crt: Order
        ) {
          return { ...prv, [crt.id]: crt };
        },
        {});
        draft.orders = normalizedOrder;
      });
    case ORDER_LOADED_ACTION:
      return produce(state, (draft) => {
        const order = action.payload;
        draft.orders[order.id] = order;
      });
    default:
      return state;
  }
}
export default orderReduser;

import produce, { produceWithPatches } from "immer";
import { schema, normalize } from "normalizr";
import { AnyAction } from "redux";
import { Action } from "../actions/index";
import {
  LODE_ORDER,
  ORDER_DETAIL_LOADED,
  ORDER_LOADED,
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

        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });
        const data = normalize(orderarr, [orderEntity]);
        console.log("data", data);

        // const normalizedOrder = orderarr.reduce(function (
        //   prv: NormalizedOrder,
        //   crt: Order
        // ) {
        //   return { ...prv, [crt.id]: crt };
        // },
        // {});
        draft.orders = data.entities.orders!;
      });
    case ORDER_DETAIL_LOADED:
      return produce(state, (draft) => {
        const order = action.payload;

        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });
        const data = normalize(order, orderEntity);

        draft.orders[order.id] = data.entities.orders![order.id];
      });
    default:
      return state;
  }
}
export default orderReduser;

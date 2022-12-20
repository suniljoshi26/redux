import produce from "immer";
import { AnyAction } from "redux";
import { LODE_ORDER, ORDER_LOADED } from "../actions/order";
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
function reducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case LODE_ORDER:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case ORDER_LOADED:
      return produce(state, (draft) => {
        draft.loading = false;
        const orderarr = action.payload;
        const normalizedOrder = orderarr.reducer(
          (prv: NormalizedOrder, crt: Order) => {
            return { ...prv, crt };
          },
          {}
        );
        draft.orders = normalizedOrder;
      });
    default:
      return state;
  }
}
export default reducer;

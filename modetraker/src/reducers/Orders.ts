import { AnyAction } from "redux";
import Order from "../modules/order";

export type State = {
  loading: boolean;
  orders: { [id: number]: Order };
};
export const initalState: State = {};
function reducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer;

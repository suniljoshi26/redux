import { AnyAction } from "redux";
import { LOAD_PRODECT, PRODUCT_LOADED } from "../actions/product";
import Product from "../modules/product";
import produce from "immer";

export type State = {
  products: Product[];
  loading: boolean;
};
export const initalState: State = {
  products: [],
  loading: false,
};
function productreducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case LOAD_PRODECT:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case PRODUCT_LOADED:
      return produce(state, (draft) => {
        draft.products = action.payload;
        draft.loading = false;
      });
    default:
      return state;
  }
}
export default productreducer;

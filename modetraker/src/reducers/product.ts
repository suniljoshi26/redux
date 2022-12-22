import { AnyAction } from "redux";
import { LOAD_PRODECT, PRODUCT_LOADED } from "../actions/product";
import Product from "../modules/product";
import produce from "immer";
import { ORDER_LOADED, ORDER_DETAIL_LOADED } from "../actions/order";
import { normalize, schema } from "normalizr";
type normalizedProduct = {
  [id: number]: Product;
};
export type State = {
  products: normalizedProduct;
  loading: boolean;
};
export const initalState: State = {
  products: {},
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
        const products = action.payload;
        const normalizedProduct = products.reduce(function (
          pre: normalizedProduct,
          crt: Product
        ) {
          return {
            ...pre,
            [crt.id]: crt,
          };
        },
        {});
        draft.products = normalizedProduct;
        draft.loading = false;
      });
    case ORDER_LOADED:
      return produce(state, (draft) => {
        const orders = action.payload;
        const products = orders.reduce(function (pre: Product[], crt: any) {
          return [...pre, ...crt.products];
        }, []);
        const normalizedProduct = products.reduce(function (
          pre: normalizedProduct,
          crt: Product
        ) {
          return {
            ...pre,
            [crt.id]: crt,
          };
        },
        {});
        draft.products = normalizedProduct;
      });
    case ORDER_DETAIL_LOADED:
      return produce(state, (draft) => {
        const order = action.payload;
        const productEntity = new schema.Entity("products");
        const data = normalize(order.products, [productEntity]);
        draft.products = { ...draft.products, ...data.entities.products };
      });
    default:
      return state;
  }
}
export default productreducer;

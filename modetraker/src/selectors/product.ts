import { State } from "../Store";

export function productLoadingSelector(state: State) {
  return state.product.loading;
}
export function productSelector(state: State) {
  return state.product.products;
}

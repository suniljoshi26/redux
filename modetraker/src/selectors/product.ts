import { State } from "../Store";

export function productLoadingSelector(state: State) {
  return state.product.loading;
}
export function productSelector(state: State) {
  const normalizedProducts = state.product.products;
  return Object.keys(normalizedProducts).map((pid) => normalizedProducts[+pid]);
}

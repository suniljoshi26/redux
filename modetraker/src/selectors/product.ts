import { State } from "../Store";

export function productLoadingSelector(state: State) {
  return state.products.loading;
}
export function productSelector(state: State) {
  const normalizedProducts = state.products.products;
  return Object.keys(normalizedProducts).map((pid) => normalizedProducts[+pid]);
}

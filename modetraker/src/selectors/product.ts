import { State } from "../Store";
import { createSelector } from "reselect";

export function productStateSelector(state: State) {
  return state.products;
}

export const productLoadingSelector = createSelector(
  productStateSelector,
  (productState) => productState.loading
);
export const productMapSelector = createSelector(
  productStateSelector,
  (productState) => productState.products
);
// export function productSelector(state: State) {
//   const normalizedProducts = state.products.products;
//   return Object.keys(normalizedProducts).map((pid) => normalizedProducts[+pid]);
// }

export const productSelector = createSelector(
  productMapSelector,
  (normalizedProducts) =>
    Object.keys(normalizedProducts).map((pid) => normalizedProducts[+pid])
);

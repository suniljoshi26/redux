import Product from "../modules/product";
import { ActionCreater } from "./index";

export const LOAD_PRODECT = " LOAD_PRODECT";
export const loadProduct: ActionCreater = () => ({
  type: LOAD_PRODECT,
  payload: undefined,
});

export const PRODUCT_LOADED = " PRODUCT_LOADED";
export const loadedProduct: ActionCreater<Product[]> = (
  products: Product[]
) => ({
  type: PRODUCT_LOADED,
  payload: products,
});

import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productLoadingSelector, productSelector } from "./selectors/product";
import { loadedProduct, loadProduct } from "./actions/product";

import axios from "axios";
import Product from "./modules/product";
import ProductList from "./ProductList";

type productListPageProps = {};

const ProductListPage: FC<productListPageProps> = (props) => {
  const loading = useSelector(productLoadingSelector);
  const products = useSelector(productSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProduct());
    axios.get("https://myeasykart.codeyogi.io/products").then((res) => {
      dispatch(loadedProduct(res.data.data));
    });
  }, []);
  console.log("sdds", products);
  return (
    <>
      <div className=" grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 space-y-2 sm:space-y-0">
        {loading && <div>Loading...</div>}
        {/* {products && products.map(p => <ProductList />)} */}

        {products.map((m) => {
          return (
            <ProductList
              key={m.id}
              price={m.price}
              category={m.category}
              thumbnail={m.thumbnail}
              title={m.title}
              id={m.id}
            />
          );
        })}
      </div>
    </>
  );
};

ProductListPage.defaultProps = {};

export default ProductListPage;

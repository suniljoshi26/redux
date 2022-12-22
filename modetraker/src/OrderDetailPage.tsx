import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderLoadingProduct } from "./actions/order";
import { orderProductSelector, ordersMapSelector } from "./selectors/Orders";

type OrderDetailPageProps = {};

const OrderDetailPage: FC<OrderDetailPageProps> = (props) => {
  const params = useParams();
  const orderId = +params.orderId!;
  const ordermap = useSelector(ordersMapSelector);
  const ordermapProduct = useSelector(orderProductSelector);
  const order = ordermap[orderId];
  const dispatch = useDispatch();
  const products = ordermapProduct[orderId];

  useEffect(() => {
    if (!ordermap[orderId]) {
      axios.get("https:dummyjson.com/carts/" + orderId).then((res) => {
        console.log(res.data);
        dispatch(orderLoadingProduct(res.data));
      });
    }
  }, [orderId]);
  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <>
      id: {order.id} total Price:{order.total}
      <div>
        {products.map((p) => (
          <div key={p.id}>
            {p.category}
            {p.title}
            {p.price}
          </div>
        ))}
      </div>
    </>
  );
};

OrderDetailPage.defaultProps = {};

export default memo(OrderDetailPage);

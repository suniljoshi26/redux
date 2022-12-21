import axios from "axios";
import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderLoadingProduct } from "./actions/order";
import { ordersMapSelector } from "./selectors/Orders";

type OrderDetailPageProps = {};

const OrderDetailPage: FC<OrderDetailPageProps> = (props) => {
  const params = useParams();
  const orderId = +params.orderId!;
  const selector = useSelector(ordersMapSelector);
  const order = selector[orderId];
  const dispatch = useDispatch();
  if (!order) {
    axios.get("https:dummyjson.com/carts/" + orderId).then((res) => {
      console.log(res.data);
      dispatch(orderLoadingProduct(res.data));
    });
    return <div>Loading...</div>;
  }

  return (
    <>
      id: {order.id} total Price:{order.total}
    </>
  );
};

OrderDetailPage.defaultProps = {};

export default memo(OrderDetailPage);

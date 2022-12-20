import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LodeOrderAction, orderLoadedAction } from "./actions/order";
import { orderLoadingSelector, ordersSelector } from "./selectors/Orders";

type OrderListPageProps = {};

const OrderListPage: FC<OrderListPageProps> = (props) => {
  const despatch = useDispatch();
  const orderLoading = useSelector(orderLoadingSelector);
  const order = useSelector(ordersSelector);
  useEffect(() => {
    despatch(LodeOrderAction());
    axios.get("https:dummyjson.com/carts").then((res) => {
      despatch(orderLoadedAction(res.data.carts));
    });
  }, []);

  if (orderLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="text-2xl">
      {order.map((p) => (
        <div key={p.id}>
          <Link className="text-indigo-500" to={"/orders/" + p.id}>
            Order No:{p.id} total:{p.total} product:{p.totalProduct} Quantity:
            {p.totalQuantity}
          </Link>
        </div>
      ))}
    </div>
  );
};

OrderListPage.defaultProps = {};

export default memo(OrderListPage);

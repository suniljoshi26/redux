import { FC, memo } from "react";
import { useDispatch } from "react-redux";

type OrderListPageProps = {};

const OrderListPage: FC<OrderListPageProps> = (props) => {
  const despatch = useDispatch();
  return <> This is Order List Page</>;
};

OrderListPage.defaultProps = {};

export default memo(OrderListPage);

import { FC, memo } from "react";

type OrderListPageProps = {};

const OrderListPage: FC<OrderListPageProps> = (props) => {
  return <> This is Order List Page</>;
};

OrderListPage.defaultProps = {};

export default memo(OrderListPage);

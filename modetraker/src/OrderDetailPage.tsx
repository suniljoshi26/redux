import { FC, memo } from "react";
import { useParams } from "react-router-dom";

type OrderDetailPageProps = {};

const OrderDetailPage: FC<OrderDetailPageProps> = (props) => {
  const params = useParams();
  const orderId = params.id && +params.id;
  return <>This is Order Detail Page{orderId}</>;
};

OrderDetailPage.defaultProps = {};

export default memo(OrderDetailPage);

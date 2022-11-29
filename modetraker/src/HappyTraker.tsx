import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyCountSelectoe } from "./selectors";

type happyProps = {};

const HappyTraker: FC<happyProps> = (props) => {
  const select = useSelector(happyCountSelectoe);
  return (
    <div className="bg-orange-600 py-4 px-8">You were Happy {select} times</div>
  );
};
HappyTraker.defaultProps = {};

export default memo(HappyTraker);

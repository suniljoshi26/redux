import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadCountSelectoe } from "./selectors";
type SaidTrakerProps = {};

const SaidTraker: FC<SaidTrakerProps> = (props) => {
  const select = useSelector(sadCountSelectoe);
  return (
    <div>
      {" "}
      <h1 className="bg-blue-500 py-4 px-8">You were Sad {select} times</h1>
    </div>
  );
};
SaidTraker.defaultProps = {};

export default memo(SaidTraker);

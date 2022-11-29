import { FC, memo } from "react";

import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./Actions";
type said = {};

const SaidIncrement: FC<said> = (props) => {
  const dispatch = useDispatch();
  function Decrement() {
    dispatch(sadButtonClicked);
  }
  return (
    <div>
      <h1>are you sad</h1>
      <button
        onClick={Decrement}
        className="px-4 py-2 rounded-md bg-blue-500 text-white"
      >
        yes
      </button>
    </div>
  );
};
SaidIncrement.defaultProps = {};

export default memo(SaidIncrement);

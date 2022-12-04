import { FC, memo, useState } from "react";

import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./Actions";
type said = {};

const SaidIncrement: FC<said> = (props) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  function Decrement() {
    dispatch(sadButtonClicked(quantity));
  }
  return (
    <div>
      <h1>are you sad</h1>
      <input
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
        className="border border-gray-500 rounded-md "
      />
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

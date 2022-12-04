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
    <div className="text-center">
      <input
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
        className="border border-gray-500 rounded-md ring-2 p-2 ring-blue-500  outline-none"
      />
      <button
        onClick={Decrement}
        className="px-4 p-2 ml-2 rounded-md bg-blue-500 text-white "
      >
        Add
      </button>
    </div>
  );
};
SaidIncrement.defaultProps = {};

export default memo(SaidIncrement);

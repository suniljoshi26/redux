import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./Actions";
type happyProps = {};

const HappyIncrement: FC<happyProps> = (props) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  function increment() {
    dispatch(happyButtonClicked(quantity));
  }
  return (
    <div className="text-center ">
      {" "}
      <input
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
        className="border border-yellow-500 outline-none rounded-md  p-2 ring-2 ring-green-500"
      />
      <button
        onClick={increment}
        className="px-4 p-2 ml-2 bg-green-500 rounded-md text-white "
      >
        Add
      </button>
    </div>
  );
};
HappyIncrement.defaultProps = {};

export default memo(HappyIncrement);

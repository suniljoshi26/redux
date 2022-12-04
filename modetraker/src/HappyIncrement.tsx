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
    <div>
      {" "}
      <h1>are you Happy</h1>
      <input
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
        className="border border-gray-500 rounded-md "
      />
      <button
        onClick={increment}
        className="px-4 py-2 bg-orange-500 rounded-md text-white"
      >
        yes
      </button>
    </div>
  );
};
HappyIncrement.defaultProps = {};

export default memo(HappyIncrement);

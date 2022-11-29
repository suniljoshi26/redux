import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./Actions";
type happyProps = {};

const HappyIncrement: FC<happyProps> = (props) => {
  const dispatch = useDispatch();
  function increment() {
    dispatch(happyButtonClicked);
  }
  return (
    <div>
      {" "}
      <h1>are you Happy</h1>
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

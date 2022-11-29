import { FC, memo } from "react";

type said = {};

const SaidIncrement: FC<said> = (props) => {
  return (
    <div>
      <h1>are you sad</h1>
      <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
        yes
      </button>
    </div>
  );
};
SaidIncrement.defaultProps = {};

export default memo(SaidIncrement);

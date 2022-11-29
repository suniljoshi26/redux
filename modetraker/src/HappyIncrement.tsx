import { FC, memo } from "react";

type happyProps = {};

const HappyIncrement: FC<happyProps> = (props) => {
  return (
    <div>
      {" "}
      <h1>are you Happy</h1>
      <button className="px-4 py-2 bg-orange-500 rounded-md text-white">
        yes
      </button>
    </div>
  );
};
HappyIncrement.defaultProps = {};

export default memo(HappyIncrement);

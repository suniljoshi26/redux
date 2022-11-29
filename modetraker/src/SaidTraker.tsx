import { FC, memo } from "react";

type SaidTrakerProps = {};

const SaidTraker: FC<SaidTrakerProps> = (props) => {
  return (
    <div>
      {" "}
      <h1 className="bg-blue-500 py-4 px-8">You were Sad 20 times</h1>
    </div>
  );
};
SaidTraker.defaultProps = {};

export default memo(SaidTraker);

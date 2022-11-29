import { FC, memo } from "react";

type happyProps = {};

const HappyTraker: FC<happyProps> = (props) => {
  return <div className="bg-orange-600 py-4 px-8">You were Happy 20 times</div>;
};
HappyTraker.defaultProps = {};

export default memo(HappyTraker);

import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyMomentsSelectoe } from "./selectors";

type happyProps = {};

const HappyTraker: FC<happyProps> = (props) => {
  const happyMoments = useSelector(happyMomentsSelectoe);
  return (
    <div className="bg-orange-600 py-4 px-8">
      {" "}
      {happyMoments.map((m) => (
        <div>
          <>
            Happyness:{m.intensity}, Time:{m.when.toTimeString()}
          </>
        </div>
      ))}{" "}
    </div>
  );
};
HappyTraker.defaultProps = {};

export default memo(HappyTraker);

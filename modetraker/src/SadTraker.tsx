import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadMomentsSelectoe } from "./selectors";
type SaidTrakerProps = {};

const SaidTraker: FC<SaidTrakerProps> = (props) => {
  const sadMoments = useSelector(sadMomentsSelectoe);
  return (
    <div>
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-200  py-4 px-8 rounded-md">
        {sadMoments.map((m) => (
          <div className="text-white text-xl">
            <>
              Sadness : {m.intensity}, Time : {m.when.toTimeString()}
            </>
          </div>
        ))}
      </h1>
    </div>
  );
};
SaidTraker.defaultProps = {};

export default memo(SaidTraker);

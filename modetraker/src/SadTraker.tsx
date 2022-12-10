import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadMomentsSelectoe } from "./selectors";
type SaidTrakerProps = {};

const SaidTraker: FC<SaidTrakerProps> = (props) => {
  console.log("sad");
  const SadMoments = useSelector(sadMomentsSelectoe);
  return (
    <div>
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-200  py-4 px-8 rounded-md">
        {SadMoments.length === 0 && (
          <h1 className="text-white text-xl">Add Sadness...</h1>
        )}
        {SadMoments.map((m: any) => (
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

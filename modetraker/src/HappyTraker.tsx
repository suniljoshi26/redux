import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyMomentsSelectoe } from "./selectors";

type happyProps = {};

const HappyTraker: FC<happyProps> = (props) => {
  console.log("happy");
  const happyMoments = useSelector(happyMomentsSelectoe);
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-200 py-4 px-8 rounded-md">
      {happyMoments.length == 0 && (
        <h1 className="text-white text-xl">Add Happyness...</h1>
      )}
      {happyMoments.map((m, index) => (
        <div key={index} className="text-white text-xl">
          <>
            Happyness : {m.intensity},<br />
            Time : {m.when.toTimeString()}
          </>
        </div>
      ))}{" "}
    </div>
  );
};
HappyTraker.defaultProps = {};

export default memo(HappyTraker);

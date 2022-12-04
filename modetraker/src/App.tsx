import React from "react";
import { useDispatch } from "react-redux";
import { clearButtonClicked } from "./Actions";
import HappyIncrement from "./HappyIncrement";
import HappyTraker from "./HappyTraker";
import SadIncrement from "./SadIncrement";
import SadTraker from "./SadTraker";

function App() {
  const d = useDispatch();
  function clear() {
    d(clearButtonClicked);
  }

  return (
    <div className=" p-10  space-y-6">
      <HappyTraker />
      <SadTraker />
      <div className=" flex justify-center">
        <button
          className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-300  text-white rounded-md "
          onClick={clear}
        >
          Clear
        </button>
      </div>
      <HappyIncrement />
      <SadIncrement />
    </div>
  );
}

export default App;

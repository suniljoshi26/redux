import React from "react";
import HappyIncrement from "./HappyIncrement";
import HappyTraker from "./HappyTraker";
import SadIncrement from "./SadIncrement";
import SadTraker from "./SadTraker";

function App() {
  return (
    <div className=" p-10  space-y-6">
      <HappyTraker />
      <SadTraker />
      <HappyIncrement />
      <SadIncrement />
    </div>
  );
}

export default App;

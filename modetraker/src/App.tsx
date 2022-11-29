import React from "react";
import HappyIncrement from "./HappyIncrement";
import HappyTraker from "./HappyTraker";
import SaidIncrement from "./SaidIncrement";
import SaidTraker from "./SaidTraker";

function App() {
  return (
    <div className=" p-10  space-y-6">
      <HappyTraker />
      <SaidTraker />
      <HappyIncrement />
      <SaidIncrement />
    </div>
  );
}

export default App;

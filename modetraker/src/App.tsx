import React from "react";
import { useDispatch } from "react-redux";
import { clearButtonClicked } from "./Actions";
import HappyIncrement from "./HappyIncrement";
import HappyTraker from "./HappyTraker";
import ProductListPage from "./productListPage";
import SadIncrement from "./SadIncrement";
import SadTraker from "./SadTraker";

import { Routes, Route } from "react-router-dom";
function App() {
  const d = useDispatch();
  function clear() {
    d(clearButtonClicked());
    console.log("clear button");
  }

  return (
    <div className=" p-10  space-y-6">
      <Routes>
        <Route index element={<ProductListPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

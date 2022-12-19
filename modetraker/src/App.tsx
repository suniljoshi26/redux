import React from "react";
import { useDispatch } from "react-redux";
import { clearButtonClicked } from "./Actions";
import HappyIncrement from "./HappyIncrement";
import HappyTraker from "./HappyTraker";
import ProductListPage from "./productListPage";
import SadIncrement from "./SadIncrement";
import SadTraker from "./SadTraker";

import { Routes, Route } from "react-router-dom";
import OrderListPage from "./OrderListPage";
import OrderDetailPage from "./OrderDetailPage";
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
        <Route path="/orders" element={<OrderListPage />}></Route>
        <Route path="/orders/:id" element={<OrderDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

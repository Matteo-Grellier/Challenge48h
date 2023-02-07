import Basket from "./components/Basket.js"
import order from "./components/order.js"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./assets/Pages/Home.js";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OrdersPage" element={<Basket />} />
        <Route path="/Order" element={<order />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
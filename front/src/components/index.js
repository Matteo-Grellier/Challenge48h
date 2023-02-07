import Shop from "./components/shop.js";
import Card from "./components/Card.js";
import Header from "./components/header.js";
import OrdersPage from "./components/OrdersPage.js";
import SellerPage from "./components/SellerPage.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Card.js" element={<Card />}>
          <Route path="/shop.js" element={<Shop />} />
          <Route path="/header" element={<Header />} />
          <Route path="/OrdersPage" element={<OrdersPage />} />
          <Route path="/SellerPage.js" element={<SellerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

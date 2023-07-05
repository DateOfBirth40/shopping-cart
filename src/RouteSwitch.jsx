import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Cart from "./Components/Cart";

const RouteSwitch = () => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  function addToCart(item) {
    setCart(prevCart => [...prevCart, {model: item.model, size: item.size}]);
    setTotal(current => current + item.price);
  }

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<App cart={cart} total={total} />} />
        <Route path="/shop" element={<Shop cart={cart} total={total} addToCart={addToCart} />} />
        <Route path="/about" element={<About cart={cart} total={total} />} />
        <Route path="/cart" element={<Cart cart={cart} total={total} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
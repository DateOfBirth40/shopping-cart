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

  // If key and size are the same, find a way to update the quantity
  function addToCart(item) {
    if (item.size != '') {
      setCart(prevCart => [...prevCart, {id: item.id,
                                        qty: 1,
                                        model: item.model,
                                        color: item.color,
                                        image: item.image,
                                        price: item.price,
                                        size: item.size
                                      }]);
      setTotal(current => current + item.price);
    }
  }

  return (
    <BrowserRouter>
    <Navbar cart={cart} />
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
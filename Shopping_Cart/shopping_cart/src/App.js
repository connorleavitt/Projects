import "./App.css";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      const updatedCartItem = cart.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCart(updatedCartItem);
    }
    const newCartItems = [...cart, { ...product, qty: 1 }];
    setCart(newCartItems);
  };

  // useEffect(() => {
  //   console.log("cart changed");
  // }, [cart]);

  return (
    <div className="App">
      <Header countCartItems={cart.length} />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/products"
            element={<Products handleClick={handleClick} />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

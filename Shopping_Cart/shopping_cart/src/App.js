import "./App.css";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

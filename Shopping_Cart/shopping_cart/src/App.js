import "./App.css";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/home":
      component = <Home />;
      break;
    case "/products":
      component = <Products />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    default:
      return;
  }
  return (
    <div className="App">
      <Header />
      <div className="page-container">{component}</div>
    </div>
  );
}

export default App;

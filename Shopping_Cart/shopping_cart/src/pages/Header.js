import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../components/CustomLink";

// import Cart from "./Cart";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link className="store-title" to="/">
        Plant Store
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/products">Products</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
      {/* <Cart /> */}
    </nav>
  );
}

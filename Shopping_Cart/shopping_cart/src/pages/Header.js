import React from "react";
import { Link } from "react-router-dom";
import DisplayCart from "../components/DisplayCart";
import CustomLink from "../components/CustomLink";

// import Cart from "./Cart";

export default function NavBar(props) {
  const { countCartItems } = props;

  return (
    <nav className="nav">
      <Link className="store-title" to="/">
        Plant Store
      </Link>
      <div className="page-cart-container">
        <ul>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/products">Products</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
        <Link className="cart-item" to="/cart">
          <DisplayCart countCartItems={countCartItems} />
        </Link>
      </div>
    </nav>
  );
}

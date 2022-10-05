import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

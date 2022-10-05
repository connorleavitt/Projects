import React from "react";
// import Cart from "./Cart";

export default function NavBar() {
  return (
    <nav className="nav">
      <a className="store-title" href="/home">
        Plant Store
      </a>
      <ul>
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/products">Products</CustomLink>
        <CustomLink href="/contact">Contact</CustomLink>
      </ul>
      {/* <Cart /> */}
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  if (path)
    return (
      <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>
          {children}
        </a>
      </li>
    );
}

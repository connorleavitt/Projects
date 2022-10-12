import React from "react";
import Search from "../components/Search";

export default function Main() {
  return (
    <main className="main">
      <h3 className="main-title">Learn how to compost, recycle and more! </h3>
      <p className="main-body-content">
        Find out how to properly dispose of your items below.
      </p>
      <Search />
    </main>
  );
}

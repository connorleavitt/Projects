import React, { useState } from "react";
import data from "../data/data";
import Searchbar from "./Searchbar";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  const findSearchInput = (input) => {
    return console.log(input);
  };

  data.map((item) => {
    // return console.log(item.id);
  });

  return (
    <div className="search-wrapper">
      <Searchbar findSearchInput={findSearchInput} />
      <div className="search-result-container">
        {/* put search result HTML here */}
      </div>
    </div>
  );
}

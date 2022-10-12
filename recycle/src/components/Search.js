import React, { useState } from "react";
import data from "../data/data";
import ItemCard from "./ItemCard";
import Searchbar from "./Searchbar";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState({});

  const findSearchInput = (input) => {
    // console.log(input);
    setSearchInput(input);
    searchDataset(input);
  };

  function searchDataset(input) {
    // console.log(result);
    if (input === null || input === "") return;
    else {
      const findItem = data.find((object) => input === object.item);
      //   console.log(findItem);
      return setResult({
        id: findItem.id,
        item: findItem.item,
        type: findItem.type,
        category: findItem.category,
        description: findItem.description,
        tags: [...findItem.tags],
      });
    }
  }

  console.log(result);

  //   const setSearchResult = (input) => {
  //   };

  return (
    <div className="search-wrapper">
      <Searchbar findSearchInput={findSearchInput} />
      <div className="search-result-container">
        <ItemCard result={result} />
      </div>
    </div>
  );
}

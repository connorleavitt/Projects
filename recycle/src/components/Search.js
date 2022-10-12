import React, { useState } from "react";
import data from "../data/data";
import ItemCard from "./ItemCard";
import NotFound from "./NotFound";
import Searchbar from "./Searchbar";

export default function Search() {
  const [searchInput, setSearchInput] = useState({
    userInput: "",
    isSubmitted: false,
  });
  const [result, setResult] = useState({});

  function findSearchInput(input) {
    setSearchInput({
      userInput: input,
      isSubmitted: true,
    });
    searchDataset(input);
  }

  function searchDataset(input) {
    if (input === null || input === "") return;
    else {
      const findItem = data.find((object) => input === object.item);
      if (findItem === undefined) {
        return setResult(false);
      }
      setResult({
        id: findItem.id,
        item: findItem.item,
        type: findItem.type,
        category: findItem.category,
        description: findItem.description,
        tags: [...findItem.tags],
      });
    }
  }

  return (
    <div className="search-wrapper">
      <Searchbar findSearchInput={findSearchInput} />
      <div className="search-result-container">
        {searchInput.isSubmitted && <ItemCard result={result} />}
        {!result && <NotFound />}
      </div>
    </div>
  );
}

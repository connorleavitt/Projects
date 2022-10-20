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
    if (input === null || input === "") return setResult({ notfound: true });
    else {
      const findItem = data.find((object) => input === object.item);
      // console.log(findItem);
      if (findItem === undefined) {
        // aka search for tag match, if null then return notFound
        const output = data.find((obj) => obj.tags.includes(input));
        if (output !== undefined) {
          return setResult({
            id: output.id,
            item: output.item,
            type: output.type,
            category: output.category,
            description: output.description,
            tags: [...output.tags],
          });
        } else {
          return setResult({ notfound: true });
        }
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
        {searchInput.isSubmitted && !result.notfound && (
          <ItemCard result={result} />
        )}
        {result.notfound && <NotFound />}
      </div>
    </div>
  );
}

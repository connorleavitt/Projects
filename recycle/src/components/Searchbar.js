import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export default function Searchbar({ findSearchInput }) {
  const query = useRef();

  const handleClick = () => {
    console.log(query.current.value);
    findSearchInput(query.current.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query.current.value);
    findSearchInput(query.current.value.toLowerCase());
  };

  function focus() {
    query.current.focus();
  }

  return (
    <div onClick={focus} className="searchbar-wrapper">
      <button className="searchbar-btn" onClick={handleClick}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            ref={query}
            type="search"
            id="search"
            placeholder="Enter Item"
          />
        </label>
      </form>
    </div>
  );
}

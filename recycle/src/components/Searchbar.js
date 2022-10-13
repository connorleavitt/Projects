import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export default function Searchbar({ findSearchInput }) {
  const searchForm = useRef(null);

  const handleClick = () => {
    const form = searchForm.current;
    findSearchInput(form[0].value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = searchForm.current;
    findSearchInput(form[0].value.toLowerCase());
  };

  return (
    <div className="searchbar-wrapper">
      <button className="searchbar-btn" onClick={handleClick}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
      <form ref={searchForm} onSubmit={handleSubmit}>
        <input type="search" id="search" placeholder="Enter Item" />
      </form>
    </div>
  );
}

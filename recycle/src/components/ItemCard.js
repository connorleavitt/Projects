import React from "react";

export default function ItemCard({ result }) {
  const { id, item, tags, type, category, description } = result;

  let Capitalize = () => {
    if (item === null || item === undefined) return;
    let capitalItem = item.slice(0, 1).toUpperCase() + item.slice(1);
    return capitalItem;
  };

  return (
    <div className="item-card-container">
      <h3 className="item-card-title">{Capitalize()}</h3>
    </div>
  );
}

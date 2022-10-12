import React from "react";

export default function ItemCard({ result }) {
  const { id, item, tags, type, category, description } = result;

  return (
    <div className="item-card-container">
      <h3 className="item-card-title">{result.item}</h3>
    </div>
  );
}

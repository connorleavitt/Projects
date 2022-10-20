import React from "react";

export default function ItemCard({ result }) {
  const { id, item, tags, type, category, description } = result;

  let Capitalize = (input) => {
    if (input === null || input === undefined) return;
    let capitalItem = input.slice(0, 1).toUpperCase() + input.slice(1);
    return capitalItem;
  };

  let TypeCheck = (input) => {
    if (input === "compost") {
      return (
        <p className="item-card--type">
          {"Yay! Please "}
          <span className="item-card--type-compost">{input}</span>
          {" this item!"}
        </p>
      );
    } else if (input === "recycle") {
      return (
        <p className="item-card--type">
          {"Yay! Please "}
          <span className="item-card--type-recycle">{input}</span>
          {" this item!"}
        </p>
      );
    } else if (input === "landfill") {
      return (
        <p className="item-card--type">
          {"Ah! Unfortunately this item needs to be put into the "}
          <span className="item-card--type-landfill">
            {"trash (black bin)!"}
          </span>
        </p>
      );
    }
  };

  let GetTagList = (tags) => {
    return (
      <p className="item-card--tags-list">
        <strong>Related: </strong>
        {[tags.join(", ")]}
      </p>
    );
  };

  return (
    <div className="item-card--container" data={type} key={id}>
      <div className="item-card--fake-img">IMAGE HERE</div>
      <div className="item-card--overview">
        <h3 className="item-card--title">{Capitalize(item)}</h3>
        {TypeCheck(type)}
        <p className="item-card--category">
          <strong>Category: </strong>
          {Capitalize(category)}
        </p>
        <p className="item-card--description">
          <strong>Description: </strong>
          {description}
        </p>
        {GetTagList(tags)}
      </div>
    </div>
  );
}

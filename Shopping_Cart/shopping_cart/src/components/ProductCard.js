// import { storePrices } from "../data/constants";
// import { useState } from "react";
import ItemQuantity from "./ItemQuantity";

// function getName(product) {
//   let plant = getStoreInfo(product);
//   let initialName = "";
//   for (const prop in plant) {
//     if (prop === "plantName") {
//       initialName = plant[prop];
//       let plantName =
//         initialName.charAt(0).toUpperCase() + initialName.slice(1);
//       return plantName;
//     }
//   }
// }

// function getPrice(product) {
//   let plant = getStoreInfo(product);
//   let plantPrice = "";
//   for (const prop in plant) {
//     if (prop === "price") {
//       plantPrice = plant[prop];
//       return plantPrice;
//     }
//   }
// }

// function getImage(product) {
//   let plant = getStoreInfo(product);
//   let plantImage = "";
//   for (const prop in plant) {
//     if (prop === "img") {
//       plantImage = plant[prop];
//       return plantImage;
//     }
//   }
// }

// function getStoreInfo(input) {
//   let storeInfo = [...storePrices];
//   let plantObj = storeInfo.find((obj) => {
//     return obj.plantName === input;
//   });
//   return plantObj;
// }

export default function ProductCard({ product, handleClick }) {
  let currentPlantName =
    product.plantName.charAt(0).toUpperCase() + product.plantName.slice(1);

  return (
    <div className="product-card--container">
      <img className="product-card--img" src={product.img} alt={product.img} />
      <div className="product-card--top-info">
        <h3 className="product-card--title">{currentPlantName}</h3>
        <div className="product-card--price">{product.price}</div>
      </div>
      <div className="product-card--item-actions">
        {/* <ItemQuantity /> */}
        <button
          className="product-card-add-to-cart-btn"
          onClick={() => handleClick(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

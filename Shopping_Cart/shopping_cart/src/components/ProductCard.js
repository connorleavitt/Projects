import { storePrices } from "../data/constants";

function getName(product) {
  let plant = getStoreInfo(product);
  let plantName = "";
  for (const prop in plant) {
    if (prop === "plantName") {
      plantName = plant[prop];
      return plantName;
    }
  }
}

function getPrice(product) {
  let plant = getStoreInfo(product);
  let plantPrice = "";
  for (const prop in plant) {
    if (prop === "price") {
      plantPrice = plant[prop];
      return plantPrice;
    }
  }
}

function getImage(product) {
  let plant = getStoreInfo(product);
  let plantImage = "";
  for (const prop in plant) {
    if (prop === "img") {
      plantImage = plant[prop];
      return plantImage;
    }
  }
}

function getStoreInfo(input) {
  let storeInfo = [...storePrices];
  let plantObj = storeInfo.find((obj) => {
    return obj.plantName === input;
  });
  return plantObj;
}

export default function ProductCard({ product }) {
  let currentPlantName = getName(product);
  let currentPlantPrice = getPrice(product);
  let currentPlantImage = getImage(product);

  return (
    <div className="product-card--container">
      <img
        className="product-card-img"
        src={currentPlantImage}
        alt={currentPlantImage}
      />
      <h3 className="product-card-title">{currentPlantName}</h3>
      <div className="product-card-price">{currentPlantPrice}</div>
    </div>
  );
}

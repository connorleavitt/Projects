import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function ItemQuantity() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      return setQuantity((prevCount) => prevCount - 1);
    }
    return;
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      return setQuantity((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="product-card--quantity-container">
      <button onClick={handleDecrement}>
        <FontAwesomeIcon icon={["fas", "minus"]} />
      </button>
      <div className="product-card--quantity-container-value">{quantity}</div>
      <button onClick={handleIncrement}>
        {" "}
        <FontAwesomeIcon icon={["fas", "plus"]} />
      </button>
    </div>
  );
}

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function ItemQuantity({ setSubtotal, qty }) {
  const { currentQty } = qty;
  const [quantity, setQuantity] = useState(currentQty);

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
      <div
        className="product-card--quantity-container-value"
        onChange={() => qty.setSubtotal(quantity)}
      >
        {quantity}
      </div>
      <div className="product-card--quantity-container-buttons">
        <button onClick={handleDecrement}>
          <FontAwesomeIcon icon={["fas", "minus"]} />
        </button>
        <button onClick={handleIncrement}>
          {" "}
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </button>
      </div>
    </div>
  );
}

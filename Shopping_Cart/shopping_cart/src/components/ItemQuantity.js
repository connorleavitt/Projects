import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function ItemQuantity({ id, cart, setCart }) {
  const productId = id;
  let displayQty = () => {
    const exist = cart.find((x) => x.id === productId);
    if (exist) {
      // console.log(`id:${productId}, qty: ${exist.qty}`);
      return exist.qty;
    }
  };

  const handleDecrement = () => {
    const exist = cart.find((x) => x.id === productId);
    if (exist) {
      if (exist.qty === 1) return;
      const updatedCartQty = cart.map((x) =>
        x.id === productId ? { ...exist, qty: exist.qty - 1 } : x
      );
      return setCart(updatedCartQty);
    }
  };

  const handleIncrement = () => {
    const exist = cart.find((x) => x.id === productId);
    if (exist) {
      if (exist.qty === 10) return;

      const updatedCartQty = cart.map((x) =>
        x.id === productId ? { ...exist, qty: exist.qty + 1 } : x
      );
      return setCart(updatedCartQty);
    }
  };

  return (
    <div className="product-card--quantity-container">
      <div className="product-card--quantity-container-value">
        {displayQty(productId)}
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

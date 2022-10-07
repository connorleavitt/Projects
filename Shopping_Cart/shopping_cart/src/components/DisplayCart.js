import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DisplayCart(props) {
  const { countCartItems } = props;

  return (
    <div className="cart-container">
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
      <div className="cart-current-quantity">{countCartItems}</div>
    </div>
  );
}

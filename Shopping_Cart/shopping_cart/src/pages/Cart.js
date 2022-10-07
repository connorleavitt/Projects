import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItems from "../components/CartItems";

export default function Cart(props) {
  const { cart } = props;

  return (
    <div className="cart--container">
      <div className="cart--title-container">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        <h2 className="cart--title">My Cart</h2>
      </div>
      <CartItems cart={cart} />
    </div>
  );
}

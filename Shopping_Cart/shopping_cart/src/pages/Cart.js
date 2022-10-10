import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItems from "../components/CartItems";
import Checkout from "../components/Checkout";

export default function Cart(props) {
  const { cart, setCart } = props;

  const removeCartItem = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cart.filter((x) => x.id !== product.id);
      return setCart(newCartItems);
    }
  };

  return (
    <div className="cart--container">
      <div className="cart--title-container">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        <h2 className="cart--title">My Cart</h2>
      </div>
      <CartItems
        cart={cart}
        setCart={setCart}
        removeCartItem={removeCartItem}
      />
      <Checkout cart={cart} />
    </div>
  );
}

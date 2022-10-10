// import { useState } from "react";
import ItemQuantity from "../components/ItemQuantity";
import Subtotal from "./Subtotal";
// import Subtotal from "../components/Subtotal";

export default function CartItems(props) {
  const { cart, setCart, removeCartItem } = props;

  return (
    <div>
      {cart.map((product) => (
        <div className="cart-box--container" key={product.id}>
          <hr></hr>
          <button
            className="cart-box-remove-button"
            onClick={() => removeCartItem(product)}
          >
            Remove
          </button>
          <div className="cart-box--subcontainer">
            <img
              className="cart-box--img"
              src={product.img}
              alt={product.img}
            />
            <div className="cart-box-info">
              <div className="cart-box--product">
                <h3 className="cart-box--product-title">Product</h3>
                <p>
                  {product.plantName.charAt(0).toUpperCase() +
                    product.plantName.slice(1)}
                </p>
              </div>
              <div className="cart-box--price">
                <h3 className="cart-box--price-title">Price</h3>

                <p>${product.price}</p>
              </div>
              <div className="cart-box--qty">
                <h3 className="cart-box--qty-title">Quantity</h3>

                <ItemQuantity
                  //   setSubtotal={setSubtotal}
                  id={product.id}
                  cart={cart}
                  setCart={setCart}
                />
              </div>
              <div className="cart-box--price-total">
                <h3 className="cart-box--price-title-subtotal">Subtotal</h3>
                <Subtotal id={product.id} cart={cart} />
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

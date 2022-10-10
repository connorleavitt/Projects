// import { useState } from "react";

export default function Subtotal({ id, cart }) {
  const productId = id;
  let displaySubtotal = () => {
    const exist = cart.find((x) => x.id === productId);
    if (exist) {
      const subtotal = exist.price * exist.qty;
      return subtotal;
    }
  };
  return (
    <div className="product-card--price-subtotal">
      ${displaySubtotal(productId)}
    </div>
  );
}

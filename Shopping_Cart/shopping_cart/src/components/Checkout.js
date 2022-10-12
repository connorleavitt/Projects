export default function Checkout(props) {
  const { cart } = props;
  let displayTotal = () => {
    const subtotalArray = cart.reduce((prevVal, currentVal) => {
      return prevVal + currentVal.price * currentVal.qty;
    }, 0);
    return subtotalArray;
  };

  return (
    <div className="product-card--checkout-container">
      <h3 className="product-card--checkout-title">COST SUMMARY</h3>
      <div className="checkout--price-total">Total: ${displayTotal()}</div>
      <button className="fake-checkout-btn">CHECK OUT</button>
    </div>
  );
}

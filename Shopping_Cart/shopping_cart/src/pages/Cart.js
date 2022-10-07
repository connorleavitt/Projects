import ItemQuantity from "../components/ItemQuantity";

export default function Cart(props) {
  const { cart } = props;
  console.log(...cart);
  return (
    <div className="cart--container">
      {cart.map((product) => (
        <div className="cart-box--container" key={product.id}>
          <img className="cart-box--img" src={product.img} alt={product.img} />
          <div>{product.plantName}</div>
          <div>{product.price}</div>
          <ItemQuantity currentQty={product.qty} />
        </div>
      ))}

      {/* 
      <div className="product-card--container">
        <img
          className="product-card--img"
          src={product.img}
          alt={product.img}
        />
        <div className="product-card--top-info">
          <h3 className="product-card--title">{currentPlantName}</h3>
          <div className="product-card--price">{product.price}</div>
        </div>
        <div className="product-card--item-actions">
          <ItemQuantity />
          <button
            className="product-card-add-to-cart-btn"
            onClick={() => handleClick(product)}
          >
            Add to Cart
          </button>
        </div>
      </div> */}
    </div>
  );
}

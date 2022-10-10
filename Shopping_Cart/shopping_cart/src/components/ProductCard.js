export default function ProductCard({ product, addToCart }) {
  let currentPlantName =
    product.plantName.charAt(0).toUpperCase() + product.plantName.slice(1);

  return (
    <div className="product-card--container">
      <img className="product-card--img" src={product.img} alt={product.img} />
      <div className="product-card--top-info">
        <h3 className="product-card--title">{currentPlantName}</h3>
        <div className="product-card--price">{product.price}</div>
      </div>
      <div className="product-card--item-actions">
        {/* <ItemQuantity /> */}
        <button
          className="product-card-add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

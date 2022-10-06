import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="product-category--container">
      <h3 className="product-category--subtitle">All Products</h3>
      <ul className="product-category--list">
        <li className="product-category--list-item">
          <Link to="./indoor">Indoor</Link>
        </li>
        <li className="product-category--list-item">
          <Link to="./outdoor">Outdoor</Link>
        </li>
      </ul>
    </div>
  );
}

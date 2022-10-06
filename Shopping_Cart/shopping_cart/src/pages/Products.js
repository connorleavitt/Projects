import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="main--products">
      <Category />
      <section className="products-display--container">
        <ProductCard product="cactus" />
      </section>
    </div>
  );
}

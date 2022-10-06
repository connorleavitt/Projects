import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="main--products">
      <Category />
      <section className="products-display--container">
        <ProductCard product="aglaonema" />
        <ProductCard product="aloe" />
        <ProductCard product="asplenium" />
        <ProductCard product="cactus" />
        <ProductCard product="calathea" />
        <ProductCard product="ficusTineke" />
        <ProductCard product="monstera" />
        <ProductCard product="philodendron" />
        <ProductCard product="pilea" />
        <ProductCard product="rubberTree" />
        <ProductCard product="sansevieria" />
        <ProductCard product="zzPlant" />
      </section>
    </div>
  );
}

// import { useState } from "react";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import { storePrices } from "../data/constants";

export default function Products(props) {
  const { addToCart } = props;

  return (
    <div className="main--products">
      <Category />
      <section className="products-display--container">
        {storePrices.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
        {/* <ProductCard product="aglaonema" handleClick={handleClick} />
        <ProductCard product="aloe" handleClick={handleClick} />
        <ProductCard product="asplenium" handleClick={handleClick} />
        <ProductCard product="cactus" handleClick={handleClick} />
        <ProductCard product="calathea" handleClick={handleClick} />
        <ProductCard product="ficusTineke" handleClick={handleClick} />
        <ProductCard product="monstera" handleClick={handleClick} />
        <ProductCard product="philodendron" handleClick={handleClick} />
        <ProductCard product="pilea" handleClick={handleClick} />
        <ProductCard product="rubberTree" handleClick={handleClick} />
        <ProductCard product="sansevieria" handleClick={handleClick} />
        <ProductCard product="zzPlant" handleClick={handleClick} /> */}
      </section>
    </div>
  );
}

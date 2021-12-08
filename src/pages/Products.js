import React from "react";
import ProductCard from "../components/ProductCard";
import ProductOils from "../components/ProductOils";
import ProductFlowers from "../components/ProductFlowers";
import ProductTrims from "../components/ProductTrims";
import ProductJoints from "../components/ProductJoints";

function Products() {
  return (
    <div className="product-container">
      <h1 className="product-container__title">Produkty CBD</h1>
      <p className="product-container__description">
        Poniżej znajduje się lista wszystkich produktów, które obecnie mamy w
        ofercie naszego sklepu.
      </p>
      <ProductOils />
      <ProductFlowers />
      <ProductTrims />
      <ProductJoints />
    </div>
  );
}

export default Products;

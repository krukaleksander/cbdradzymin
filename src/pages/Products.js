import React from "react";
import ProductOils from "../components/ProductOils";
import ProductFlowers from "../components/ProductFlowers";
import ProductTrims from "../components/ProductTrims";
import ProductJoints from "../components/ProductJoints";

function Products() {
  return (
    <div className="product-container">
      <h1 className="product-container__title">
        Produkty <span>CBD</span>
      </h1>
      <p className="product-container__description">
        Poniżej znajduje się lista wszystkich produktów, które obecnie mamy w
        ofercie naszego sklepu. Lista ta obejmuje kolejno: olejki cbd, susz cbd
        w postaci kwiatów (flowers), susz w postaci rozdrobionej (trims), oraz
        susz w postacie pre-rolls (zwinięty w bibułkę).
      </p>
      <ProductOils />
      <ProductFlowers />
      <ProductTrims />
      <ProductJoints />
    </div>
  );
}

export default Products;

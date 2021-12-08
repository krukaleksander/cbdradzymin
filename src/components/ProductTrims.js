import React from "react";
import ProductCard from "../components/ProductCard";

import ak_trims from "../images/products/trims/ak_trims.jpg";
import amnesia_trims from "../images/products/trims/amnesia_trims.jpg";
import blueberry_trims from "../images/products/trims/blueberry_trims.jpg";
import lemon_haze_trims from "../images/products/trims/lemon_haze_tims.jpg";
import pineapple_trims from "../images/products/trims/pineapple_trims.jpg";
import raspberry_trims from "../images/products/trims/raspberry_trims.jpg";
import whitewidow_trims from "../images/products/trims/whitewidow_trims.jpg";

function ProductTrims() {
  return (
    <div className="product-trims">
      <ProductCard
        img={ak_trims}
        alt="Susz CBD TRIMS Ak-47"
        name="Susz CBD TRIMS Ak-47"
        price="35.00"
      />
      <ProductCard
        img={amnesia_trims}
        alt="Susz CBD TRIMS Amnesia Skunk"
        name="Susz CBD TRIMS Amnesia Skunk"
        price="35.00"
      />
      <ProductCard
        img={blueberry_trims}
        alt="Susz CBD TRIMS Blueberry"
        name="Susz CBD TRIMS Blueberry"
        price="35.00"
      />
      <ProductCard
        img={lemon_haze_trims}
        alt="Susz CBD TRIMS Lemon Haze"
        name="Susz CBD TRIMS Lemon Haze"
        price="35.00"
      />
      <ProductCard
        img={pineapple_trims}
        alt="Susz CBD TRIMS Pineapple"
        name="Susz CBD TRIMS Pineapple"
        price="35.00"
      />
      <ProductCard
        img={raspberry_trims}
        alt="Susz CBD TRIMS Raspberry"
        name="Susz CBD TRIMS Raspberry"
        price="35.00"
      />
      <ProductCard
        img={whitewidow_trims}
        alt="Susz CBD TRIMS White Widow"
        name="Susz CBD TRIMS White Widow"
        price="35.00"
      />
    </div>
  );
}

export default ProductTrims;

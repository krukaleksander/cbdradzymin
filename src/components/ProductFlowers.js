import React from "react";
import ProductCard from "../components/ProductCard";

import ak_flowers from "../images/products/flowers/ak_flowers.jpg";
import amnesia_flowers from "../images/products/flowers/amnesia_flowers.jpg";
import blueberry_flowers from "../images/products/flowers/blueberry_flowers.jpg";
import bubblegum_flowers from "../images/products/flowers/bubblegum_flowers.jpg";
import finola_flowers from "../images/products/flowers/finola_flowers.jpg";
import lemonhaze_flowers from "../images/products/flowers/lemonhaze_flowers.jpg";
import purplehaze_flowers from "../images/products/flowers/purplehaze_flowers.jpg";
import whitewidow_flowers from "../images/products/flowers/whitewidow_flowers.jpg";

function ProductFlowers() {
  return (
    <>
      <h1 className="all-product-container__title">cbd flowers</h1>

      <div className="product-flowers all-product-container">
        <ProductCard
          img={ak_flowers}
          alt="Susz CBD Flowers Ak-47"
          name="Susz CBD Flowers Ak-47"
          price="59.00"
        />
        <ProductCard
          img={amnesia_flowers}
          alt="Susz CBD Flowers Amnesia Haze"
          name="Susz CBD Flowers Amnesia Haze"
          price="59.00"
        />
        <ProductCard
          img={blueberry_flowers}
          alt="Susz CBD Flowers Blueberry"
          name="Susz CBD Flowers Blueberry"
          price="59.00"
        />
        <ProductCard
          img={bubblegum_flowers}
          alt="Susz CBD Flowers Bubblegum"
          name="Susz CBD Flowers Bubblegum"
          price="59.00"
        />
        <ProductCard
          img={finola_flowers}
          alt="Susz CBD Flowers Finola"
          name="Susz CBD Flowers Finola"
          price="59.00"
        />
        <ProductCard
          img={lemonhaze_flowers}
          alt="Susz CBD Flowers Lemon Haze"
          name="Susz CBD Flowers Lemon Haze"
          price="59.00"
        />
        <ProductCard
          img={purplehaze_flowers}
          alt="Susz CBD Flowers Purple Haze"
          name="Susz CBD Flowers Purple Haze"
          price="59.00"
        />
        <ProductCard
          img={whitewidow_flowers}
          alt="Susz CBD Flowers White Widow"
          name="Susz CBD Flowers White Widow"
          price="59.00"
        />
      </div>
    </>
  );
}

export default ProductFlowers;

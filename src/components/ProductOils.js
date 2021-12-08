import React from "react";
import ProductCard from "../components/ProductCard";
// import oils
import oil5 from "../images/products/oils/olejek_5.jpg";
import oil10 from "../images/products/oils/olejek_10.jpg";
import oil20 from "../images/products/oils/olejek_20.jpg";
import oil30 from "../images/products/oils/olejek_30.jpg";

function ProductOils() {
  return (
    <>
      <h1 className="all-product-container__title">cbd olejki</h1>
      <div className="product-oils all-product-container">
        <ProductCard
          img={oil5}
          alt="Olejek CBD 5%"
          name="Olejek CBD Spectral 5%"
          price="49.00"
        />
        <ProductCard
          img={oil10}
          alt="Olejek CBD 10%"
          name="Olejek CBD Spectral 10%"
          price="75.00"
        />
        <ProductCard
          img={oil20}
          alt="Olejek CBD 20%"
          name="Olejek CBD Spectral 20%"
          price="120.00"
        />
        <ProductCard
          img={oil30}
          alt="Olejek CBD 30%"
          name="Olejek CBD Spectral 30%"
          price="199.00"
        />
      </div>
    </>
  );
}

export default ProductOils;

import React from "react";
import ProductCard from "../components/ProductCard";

import amnezia_joint from "../images/products/joints/amnezia_joint.jpg";
import blueberry_joint from "../images/products/joints/blueberry_joint.jpg";
import bubblegum_joint from "../images/products/joints/bubblegum_joint.jpg";
import lemonhaze_joint from "../images/products/joints/lemonhaze_joint.jpg";
import mangohaze_joint from "../images/products/joints/mangohaze_joint.jpg";
import purplehaze_joint from "../images/products/joints/purplehaze_joint.jpg";
import strawberryhaze_joint from "../images/products/joints/strawberryhaze_joint.jpg";
import whitewidow_joint from "../images/products/joints/whitewidow_joint.jpg";

function ProductJoints() {
  return (
    <div className="product-joints">
      <ProductCard
        img={amnezia_joint}
        alt="Joint CBD Amnesia Haze – 2 szt"
        name="Joint CBD Amnesia Haze – 2 szt"
        price="29.00"
      />
      <ProductCard
        img={blueberry_joint}
        alt="Joint CBD Blueberry – 2 szt"
        name="Joint CBD Blueberry – 2 szt"
        price="29.00"
      />
      <ProductCard
        img={bubblegum_joint}
        alt="Joint CBD Bubblegum – 2 szt"
        name="Joint CBD Bubblegum – 2 szt"
        price="29.00"
      />
      <ProductCard
        img={lemonhaze_joint}
        alt="Joint CBD Lemon Haze – 2 szt"
        name="Joint CBD Lemon Haze – 2 szt"
        price="29.00"
      />
      <ProductCard
        img={mangohaze_joint}
        alt="Joint CBD Mango Haze – 2 szt"
        name="Joint CBD Mango Haze – 2 szt"
        price="29.00"
      />
      <ProductCard
        img={purplehaze_joint}
        alt="Joint CBD Purple Haze – 2 szt"
        name="Joint CBD Purple Haze – 2 szt"
        price="29.00"
      />
      <ProductCard
        img={strawberryhaze_joint}
        alt="Joint CBD Strawberry Haze – 2 szt"
        name="Joint CBD Strawberry Haze – 2 szt"
        price="29.00"
      />
      <ProductCard
        img={whitewidow_joint}
        alt="Joint CBD White Widow – 2 szt"
        name="Joint CBD White Widow – 2 szt"
        price="29.00"
      />
    </div>
  );
}

export default ProductJoints;

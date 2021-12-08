import React from "react";

function ProductCard({ img, alt, name, price }) {
  return (
    <div className="product">
      <img className="product__image" src={img} alt={alt} />
      <h4 className="product__name">{name}</h4>
      <span className="product__price">{price} PLN</span>
    </div>
  );
}

export default ProductCard;

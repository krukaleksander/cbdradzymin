import React from "react";
import olejki from "../../images/olejki.jpg";
import susz from "../../images/susz.jpg";
import prerolls from "../../images/pre-rolls.jpg";

function HomeProducts() {
  return (
    <div className="home-products">
      <h1 className="home-products__title">
        <span>pierwszy sklep z</span>
        <span> cbd w radzyminie</span>
      </h1>
      <div className="cards-wrapper">
        <div className="card">
          <h2 className="card__title">Olejki CBD</h2>
          <img className="card__image" src={olejki} alt="" />
        </div>
        <div className="card">
          <h2 className="card__title">Susz CBD</h2>
          <img className="card__image" src={susz} alt="" />
        </div>
        <div className="card">
          <h2 className="card__title">Pre-rolls CBD</h2>
          <img className="card__image" src={prerolls} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;

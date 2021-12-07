import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import HomeProducts from "../components/home/HomeProducts";
import HomeWhyUs from "../components/home/HomeWhyus";

function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <HomeProducts />
      <HomeWhyUs />
    </div>
  );
}

export default Home;

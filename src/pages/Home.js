import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import HomeProducts from "../components/home/HomeProducts";

function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <HomeProducts />
    </div>
  );
}

export default Home;

import React from "react";
import { FaBars } from "react-icons/fa";

function Bars() {
  const showMenuFn = () =>
    (document.querySelector(".navigation-wrapper").style.left = "0px");
  return (
    <div className="bars" onClick={() => showMenuFn()}>
      <FaBars />
    </div>
  );
}

export default Bars;

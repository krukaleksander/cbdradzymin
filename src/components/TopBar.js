import React from "react";
import { AiFillHome, AiFillPhone } from "react-icons/ai";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar__adress">
        <span className="top-bar__icon">
          <AiFillHome />
        </span>
        <span> Radzymin, ul. Norwida 22a</span>
      </div>
      <div className="top-bar__phone">
        <span className="top-bar__icon">
          <AiFillPhone />
        </span>
        <span>
          <a href="tel:+48601877700">601 877 700</a>
        </span>
      </div>
    </div>
  );
}

export default TopBar;

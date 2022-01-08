import React from "react";
import logo from "../images/logo.png";

function Logo({ id }) {
  return (
    <div className="logo" id={id}>
      <img src={logo} alt="cbradzymin.pl" />
    </div>
  );
}

export default Logo;

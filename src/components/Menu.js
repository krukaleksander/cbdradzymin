import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Legality from "../pages/Legality";
import Information from "../pages/Information";
import Contact from "../pages/Contact";
import Logo from "../components/Logo";
import { RiCloseLine } from "react-icons/ri";

function Menu() {
  const hideMenu = () => {
    if (window.innerWidth < 641)
      document.querySelector(".navigation-wrapper").style.left = "-250px";
  };
  return (
    <Router>
      <div>
        <div className="navigation-wrapper">
          <Logo />
          <ul className="navigation">
            <li className="navigation__close-mobile" onClick={() => hideMenu()}>
              <RiCloseLine />
            </li>
            <li onClick={() => hideMenu()}>
              <Link to="/">Strona główna</Link>
            </li>
            <li onClick={() => hideMenu()}>
              <Link to="/produkty">Produkty</Link>
            </li>
            <li onClick={() => hideMenu()}>
              <Link to="/legalnosc">Legalność</Link>
            </li>
            <li onClick={() => hideMenu()}>
              <Link to="/informacje">Informacje</Link>
            </li>
            <li onClick={() => hideMenu()}>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produkty" element={<Products />} />
          <Route exact path="/legalnosc" element={<Legality />} />
          <Route exact path="/informacje" element={<Information />} />
          <Route exact path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Menu;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Legality from "../pages/Legality";
import Information from "../pages/Information";
import Contact from "../pages/Contact";

function Menu() {
  return (
    <Router>
      <div>
        <div className="header-wrapper">
          <div className="navigation-wrapper">
            <ul className="navigation">
              <li>
                <Link to="/">Strona główna</Link>
              </li>
              <li>
                <Link to="/produkty">Produkty</Link>
              </li>
              <li>
                <Link to="/legalnosc">Legalność</Link>
              </li>
              <li>
                <Link to="/informacje">Informacje</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
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

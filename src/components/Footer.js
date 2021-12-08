import React from "react";
import logo from "../images/logo_radzymin_nbg_white.png";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="company">
        <div className="company__img-wrapper">
          <img src={logo} alt="logo cbd radzymin" />
        </div>
        <p className="company__under-img-text">
          Korzystając z naszej oferty masz pewność, że dostajesz w pełni
          naturalny, legalny i działający produkt.
        </p>
        <div className="company__info">
          <p>CBDradzymin.pl</p>
          <p>FPH Aleksander Alicja Lewandowska</p>
          <p>ul. Norwida 22a</p>
          <p>05-250 Radzymin</p>
          <p>NIP: 125-003-99-43</p>
        </div>
      </div>
      <div className="footer-contact">
        <p>PN-PT 11-18</p>
        <p>SB 10-16</p>
        <p>
          <span>
            <AiOutlineMail />
          </span>
          aleksander@onet.pl
        </p>
        <p>
          <span>
            <AiOutlinePhone />
          </span>
          601 877 700
        </p>
      </div>
      <div className="useful">
        <p>Przydatne linki:</p>
        <ul>
          <li>
            <a
              target="_blank"
              rel="nofollow noreferrer"
              href="https://pl.wikipedia.org/wiki/Kannabidiol"
            >
              CBD Wikipedia
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noreferrer"
              href="https://www.superpharm.pl/blog/cbd-co-to-jest-i-jakie-ma-wlasciwosci"
            >
              SuperPharm - CBD zdrowie i uroda
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noreferrer"
              href="https://www.medonet.pl/zdrowie,jak-uzywac-olejku-cbd--zeby-osiagnac-najlepszy-efekt-,artykul,00369417.html"
            >
              Medonet - Jak używać olejku?
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

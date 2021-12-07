import React from "react";
import olejki from "../../images/olejki.jpg";
import euIcon from "../../images/eu_icon.png";
import exIcon from "../../images/extraction_icon.png";
import organicIcon from "../../images/organic__icon.png";
import testIcon from "../../images/test__icon.png";

function HomeWhyus() {
  return (
    <div className="why-us">
      <h1 className="why-us__title">
        Zalety naszego <span>CBD</span>
      </h1>
      <p className="why-us__description">
        CBD obecnie szeroko stosowane jest w leczeniu różnych dolegliwości na
        całym świecie. Poprawa jakości życia i ogólnego samopoczucia naszych
        klientów wymaga spełnienia przez produkt pewnych warunków.
      </p>
      <div className="why-us__properties">
        <div className="first-block">
          <div>
            <section>
              <h2>Wyprodukowane w UE</h2>
              <p>
                Konopie uprawiane wyłącznie na terenie Unii Europejskiej przez
                sprawdzonych dostawców.
              </p>
            </section>
            <img src={euIcon} alt="" />
          </div>
          <div>
            <section>
              <h2>Proces ekstrakcji</h2>
              <p>
                Unikalny proces ekstrakcji zapewniający pewność co do stężenia a
                także właściwości olejku.
              </p>
            </section>
            <img src={exIcon} alt="" />
          </div>
        </div>
        <div className="second-block">
          <img src={olejki} alt="olejek cbd radzymin" />
        </div>
        <div className="third-block">
          <div>
            <img src={organicIcon} alt="" />
            <section>
              <h2>100% naturalna uprawa</h2>
              <p>
                Żadnych pestycydów, tylko ekologiczna uprawa w zgodzie z naturą.
              </p>
            </section>
          </div>
          <div>
            <img src={testIcon} alt="" />
            <section>
              <h2>Udokumentowana jakość</h2>
              <p>
                Każda partia towaru przechodzi badania pod kątem zawartość CBD i
                THC.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWhyus;

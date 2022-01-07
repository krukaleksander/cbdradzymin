import React from "react";
import Men from "../images/arystokrata.png";
import Leaf from "../images/list_leaf.png";
function Information() {
  return (
    <div className="information-container">
      <div className="information-container__div">
        <img src={Men} alt="" />
        <div>
          <p className="information-container__plot">
            Radziłem mu – mówił – iżby siemię konopne w kieszeni nosił i po
            trochu spożywał. To tak ci się do tego przyzwyczaił, że teraz coraz
            to ziarno wyjmie, wrzuci do gęby, rozgryzie, miazgę zje, a łuskwinę
            wyplunie. W nocy, jak się obudzi, także to czyni. Od tej pory tak mu
            się dowcip zaostrzył, że i najbliżsi go nie poznają. – Jakże to? –
            pytał starosta kałuski. – Bo w konopiach oleum się znajduje, przez
            co i w głowie jedzącemu go przybywa. – Bodajże waszą mość! – rzekł
            jeden z pułkowników. – Toż w brzuchu oleju przybywa, nie w głowie. –
            Est modus in rebus! – rzecze na to Zagłoba – trzeba co najwięcej
            wina pić: oleum, jako lżejsze, zawsze będzie na wierzchu, wino zaś,
            które i bez tego idzie do głowy, poniesie ze sobą każdą cnotliwą
            substancję.
          </p>
          <p className="information-container__author">
            Henryk Sienkiewicz – Potop
          </p>
        </div>
      </div>
      <h2>
        Suplementacja CBD może wpłynąć pozytywnie na osoby mające problem z:
      </h2>
      <ul>
        <li>
          <span>
            <img src={Leaf} alt="" />
          </span>
          depresją,
        </li>
        <li>
          <span>
            <img src={Leaf} alt="" />
          </span>
          atakami paniki,
        </li>
        <li>
          <span>
            <img src={Leaf} alt="" />
          </span>
          nerwicami,
        </li>
        <li>
          <span>
            <img src={Leaf} alt="" />
          </span>
          artretyzmem,
        </li>
        <li>
          <span>
            <img src={Leaf} alt="" />
          </span>
          problemami ze snem,
        </li>
        <li>
          <span>
            <img src={Leaf} alt="" />
          </span>
          stresem.
        </li>
      </ul>
      <p className="information-container__par">
        Ponadto CBD oddziaływuje także na kondycję skóry i może pomóc w walce z
        trądzikiem. Inne{" "}
        <span>
          badania wykazują, że CBD ma potencjał działania przeciwcukrzycowego,
          przeciwnowotworowego, neuroprotekcyjnego, czy ochronnego w stosunku do
          układu krwionośnego.
        </span>{" "}
        Wskazuje się coraz częściej, że CBD może być też pomocny w terapii
        uzależnień, boreliozy, endometriozy.
      </p>
    </div>
  );
}

export default Information;

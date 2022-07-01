import React from "react";
import { MdChildCare } from "react-icons/md";
import { BsBook, BsCalculator } from "react-icons/bs";

import "./Prices.scss";

import Title from "../Title";
import Card from "./Card";

function Prices() {
  return (
    <div id="prices" className="prices">
      <Title title={"Aranceles"} />

      <div className="prices__card-container">
        <Card
          title={"Nivel inicial"}
          price={"15.000"}
          icon={<MdChildCare className="price-card__icon" />}
        />
        <Card
          title={"Ciclo Básico"}
          price={"20.000"}
          icon={<BsBook className="price-card__icon" />}
        />
        <Card
          title={"Ciclo Orientado"}
          price={"30.000"}
          icon={<BsCalculator className="price-card__icon" />}
        />
      </div>
    </div>
  );
}

export default Prices;

import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <img
          style={{ transform: "scaleX(-1)" }}
          src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="hero"
        />
      </div>

      <div className="hero__text">
        <div className="hero__text-container">
          <h3>
            Mejor educación. <br /> Para un mejor futuro.
          </h3>

          <p className="long-text">
            Utilizamos nuestros años de experiencia con el sistema Montessori
            para asegurar una educación eficiente y completa.
          </p>

          <div className="hero__text__actions">
            <Link to="/contact" className="hero__text__actions-btn">
              Contáctanos
            </Link>

            <div className="hero__text__actions-social">
              <Link to="/" className="hero__text__actions-social__link">
                <AiFillFacebook className="hero__text__actions-social__link-icon" />
              </Link>
              <Link to="/" className="hero__text__actions-social__link">
                <AiFillInstagram className="hero__text__actions-social__link-icon" />
              </Link>
              <Link to="/" className="hero__text__actions-social__link">
                <AiFillTwitterCircle className="hero__text__actions-social__link-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import { AiFillGitlab } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { IoMdPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__logo">
          <Link to="/">
            <AiFillGitlab className="navbar__brand-logo" />
          </Link>
        </div>

        <div className="footer__data">
          <h4>Datos</h4>
          <ul>
            <li>
              <IoMdPin />
              <p>Capilla del Monte, Córdoba, Argentina</p>
            </li>
            <li>
              <MdEmail />
              <p>corazondetiza@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Links de interés</h4>

          <ul>
            <li>
              <Link to="/jobs">Trabajo</Link>
            </li>
            <li>
              <Link to="/projects">Proyectos</Link>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <h4>Redes Sociales</h4>
          <div className="footer__social-container">
            <Link to="/" className="footer__social-link">
              <AiFillFacebook className="footer__social-link-icon" />
            </Link>
            <Link to="/" className="footer__social-link">
              <AiFillInstagram className="footer__social-link-icon" />
            </Link>
            <Link to="/" className="footer__social-link">
              <AiFillTwitterCircle className="footer__social-link-icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

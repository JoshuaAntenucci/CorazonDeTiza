import React from "react";
import { AiFillGitlab } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "./Navbar.scss";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <Link to="/">
            <AiFillGitlab className="navbar__brand-logo" />
          </Link>
        </div>

        <ul className="navbar__links">
          {location.pathname === "/" ? (
            <React.Fragment>
              <ScrollLink
                to="about"
                spy={true}
                smooth
                offset={10}
                duration={500}
                className="navbar__link"
              >
                Sobre Nosotros
              </ScrollLink>
              <ScrollLink
                to="prices"
                spy={true}
                smooth
                offset={10}
                duration={500}
                className="navbar__link"
              >
                Aranceles
              </ScrollLink>
              <Link
                to="/contact"
                className="navbar__link navbar__link--highlighted"
              >
                Contacto
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/" className="navbar__link navbar__link--highlighted">
                Página principal
              </Link>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

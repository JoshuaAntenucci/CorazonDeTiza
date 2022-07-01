import React from "react";

import "./AboutUs.scss";

import Title from "../Title";
import Card from "./Card";

function AboutUs() {
  return (
    <div id="about">
      <Title title={"Sobre Nosotros"} />

      <Card
        title={"¿Quienes somos?"}
        text={
          <p className="long-text">
            <i className="long-text">Corazón de Tiza</i> es una institución
            educativa de nivel inicial y primaria con más de 6 años de
            experiencia en la aplicación del{" "}
            <i className="long-text">sistema Montessori</i>.
          </p>
        }
        img={
          "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
      />
      <Card
        title={"¿Qué es el sistema Montessori?"}
        text={
          <React.Fragment>
            <p className="long-text">
              Es un sistema educativa cuyo enfoque es llegar rápidamente a la
              conexión de lo que percibe el estudiante con el conomiento
              abstracto.
            </p>
          </React.Fragment>
        }
        img={
          "https://images.unsplash.com/photo-1489702932289-406b7782113c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        }
        leftImg
      />
      <Card
        title={"Nuestra estructura"}
        text={
          <React.Fragment>
            <p className="long-text">
              Actualmente nuestro edificio se encuentra en Capilla del Monte,
              Córdoba.
              <br />
              <br />
              Por el momento contamos con:
            </p>
            <ul>
              <li className="long-text">Nivel inicial</li>
              <li className="long-text">Nivel primario completo</li>
            </ul>
          </React.Fragment>
        }
        img={
          "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        }
      />
    </div>
  );
}

export default AboutUs;

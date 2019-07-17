import React from "react";
import "./styles.scss";
import HomeButton from "../HomeButton/index";
import MirenProfile from "../../images/Miren-profile.jpg";
import skills from "../../data/skills";

const AboutMe = props => {
  const { closeNav } = props;
  return (
    <section className="AboutMe">
      <div className="AboutMe__left">
        <img
          className="AboutMe__photo"
          src={MirenProfile}
          alt="Foto de Miren"
        />
        <h1 className="AboutMe__title">¡Hola, soy Miren!</h1>
        <h2 className="AboutMe__subtitle">¿Te cuento algo sobre mí?</h2>
        <p className="AboutMe__description">
          Estudié Ingeniería Técnica en Obras Públicas y trabajé durante años en
          temas de movilidad y accesibilidad en entornos urbanos. Aunque me
          gustaba mucho el trabajo, hace unos meses sentí la necesidad de
          reinventarme y buscando enfrentarme a nuevos desafíos, decidí
          convertirme en desarrolladora front-end. Gracias a Adalab he aprendido
          a programar desde cero y he descubierto cuánto mola plantar cara a un
          reto nuevo cada vez y conseguir comérmelo con patatas.
        </p>
        <h2 className="AboutMe__subtitle">¿Algo más?</h2>
        <p className="AboutMe__description">
          Me encantan los puzzles, los juegos de mesa y las manualidades. Cuando
          tengo un rato libre me gusta crear mis propios proyectos DIY.
        </p>
        <h2 className="AboutMe__subtitle">¿Un secreto?</h2>
        <p className="AboutMe__description">
          Mi truco para relajarme es doblar calcetines{" "}
          <span role="img" aria-label="socks">
            🧦
          </span>
          , y cuanto más coloridos sean, ¡mejor!.
        </p>
      </div>
      <div className="AboutMe__right">
        <h2 className="AboutMe__skills-title">Skills</h2>
        <ul className="AboutMe__skills-list">
          {skills.map(item => {
            return (
              <li className="AboutMe__skills" key={item.id}>
                {item.name}
                <img
                  className="AboutMe__logo"
                  src={item.img}
                  alt={`Logo de ${item.name}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <HomeButton navClose={closeNav} />
    </section>
  );
};

export default AboutMe;

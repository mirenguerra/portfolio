import React from "react";
import "./styles.scss";
import HomeButton from "../HomeButton/index";
import MirenProfile from "../../images/Miren-profile.jpg";
import skills from "../../data/skills";

const AboutMe = props => {
  const { closeNav } = props;
  return (
    <div className="AboutMe">
      <img className="AboutMe__photo" src={MirenProfile} alt="Foto de Miren" />
      <h1 className="AboutMe__title">¡Hola, soy Miren!</h1>
      <p className="AboutMe__description"> Soy...</p>
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
      <HomeButton navClose={closeNav} />
    </div>
  );
};

export default AboutMe;

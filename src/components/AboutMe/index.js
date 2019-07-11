import React from "react";
import "./styles.scss";
import HomeButton from "../HomeButton/index";

const AboutMe = props => {
  const { closeNav } = props;
  return (
    <div className="AboutMe">
      <h1 className="AboutMe__title">¡Hola, soy Miren!</h1>
      <HomeButton navClose={closeNav} />
    </div>
  );
};

export default AboutMe;

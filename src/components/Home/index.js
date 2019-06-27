import React from "react";
import "./styles.scss";
import Menu from "../Menu/index";
import AboutMe from "../AboutMe/index";

function Home() {
  return (
    <div className="Home">
      <div className="Home__photo" />
      <div className="Home__text-wrapper">
        <h1 className="Home__title">Miren Guerra</h1>
        <div className="Home__bar" />
        <h2 className="Home__subtitle">Front-end developer</h2>
      </div>
      <Menu />
      <AboutMe />
    </div>
  );
}

export default Home;

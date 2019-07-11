import React from "react";
import "./styles.scss";
import Menu from "../Menu/index";

const Home = props => {
  const { isClose, handleToggleClick } = props;
  return (
    <section className="Home">
      <Menu isClose={isClose} handleToggleClick={handleToggleClick} />
      <div className="Home__photo" />
      <div className="Home__text-wrapper">
        <h1 className="Home__title">Miren Guerra</h1>
        <div className="Home__bar" />
        <h2 className="Home__subtitle">Front-end developer</h2>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="Menu">
      <Link to="/projects"> Proyectos</Link>
      <Link to="/aboutme">Sobre mí</Link>
    </div>
  );
}

export default Menu;

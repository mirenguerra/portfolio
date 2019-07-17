import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Menu = props => {
  const { isClose, handleToggleClick } = props;
  return (
    <React.Fragment>
      <button
        className={isClose ? "Menu__nav-trigger btn" : "Menu__nav-close btn"}
        title="menu"
        type="button"
        onClick={handleToggleClick}
      />
      <nav className={isClose ? "hide" : "show"}>
        <Link to="/projects" className="Menu__nav-item"> Proyectos</Link>
        <Link to="/aboutme" className="Menu__nav-item">Sobre mí</Link>
        <Link to="/contact" className="Menu__nav-item">Contacto</Link>
      </nav>
    </React.Fragment>
  );
};

export default Menu;

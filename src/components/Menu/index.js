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
      >
        
      </button>
      <div className={isClose ? "hide" : ""}>
        <nav className="Menu">
          <Link to="/projects"> Proyectos</Link>
          <Link to="/aboutme">Sobre mí</Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Menu;

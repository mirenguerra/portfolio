import React from "react";
import "./styles.scss";

const ProjectCard = props => {
  const { id, img, name, description, demo, code } = props;
  return (
    <section className="Card__wrapper" key={id}>
      <img className="Card__img" src={img} alt={name} />
      <h4 className="Card__name">{name}</h4>
      <p className="Card__description">{description}</p>
      <a
        href={demo}
        key={demo}
        className="Card__btn demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo
      </a>
      <a
        href={code}
        key={code}
        className="Card__btn code"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code
      </a>
    </section>
  );
};

export default ProjectCard;

import React from "react";
import "./styles.scss";

const ContactElement = props => {
  const { name, url, icon, id, user, type } = props;
  if (type !== "email") {
    return (
      <section className="ContactElement" key={id}>
        <a
          href={url}
          className="ContactElement__url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="ContactElement__wrapper">
            <img
              className="ContactElement__icon"
              src={icon}
              alt={`Icono de ${name}`}
            />
            <h1 className="ContactElement__name">{user}</h1>
          </div>
        </a>
      </section>
    );
  } else {
    return (
      <section className="ContactElement" key={id}>
        <a href={url} className="ContactElement__url">
          <div className="ContactElement__wrapper">
            <img
              className="ContactElement__icon"
              src={icon}
              alt={`Icono de ${name}`}
            />
            <h1 className="ContactElement__name">{user}</h1>
          </div>
        </a>
      </section>
    );
  }
};

export default ContactElement;

import React from "react";
import "./styles.scss";
import contacts from "../../data/contacts.js";
import HomeButton from "../HomeButton/index";
import ContactElement from "../ContactElement/index";

const Contact = props => {
  const { closeNav } = props;
  return (
    <section className="Contact">
      <HomeButton navClose={closeNav} />
      <div className="Contact__wrapper">
        <h1 className="Contact__title">
          ¡Visita mis redes sociales y contáctame!
        </h1>
        <ul className="Contact__list">
          {contacts.map(item => {
            return (
              <li className="Contact__element" key={item.id}>
                <ContactElement
                  name={item.name}
                  icon={item.icon}
                  url={item.url}
                  user={item.user}
                  id={item.id}
                  type={item.type}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;

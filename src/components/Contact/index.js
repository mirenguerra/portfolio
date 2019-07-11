import React from "react";
import "./styles.scss";
import contacts from "../../data/contacts.js";
import HomeButton from "../HomeButton/index";
import ContactElement from "../ContactElement/index";

function Contact() {
  return (
    <section className="Contact">
      <HomeButton />
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
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Contact;

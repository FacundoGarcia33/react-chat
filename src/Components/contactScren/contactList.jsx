import React from "react";
import { Link } from "react-router";
import "./contactScren.css";
export const ContactList = ({ contactoData }) => {
  return (
    <Link to={`/contact/${contactoData.id}/mensajes`}>
      <div className="contact-container">
        <div className="contact-data">
          <img
            src={contactoData.avatar}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            <h2 style={{ textDecoration: "none" }}>{contactoData.nombre}</h2>
            <p>{contactoData.conecion}</p>
          </div>
        </div>
        <p className="total-cuantiti-messages">
          {contactoData.messages.length}
        </p>
      </div>
    </Link>
  );
};

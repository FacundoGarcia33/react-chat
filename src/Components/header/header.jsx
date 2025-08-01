import React from "react";
import "./header.css";

export const Header = ({ contacto }) => {
  return (
    <div className="header-flex">
      <div className="header-container">
        <div className="img-container">
          <img src={contacto.avatar} alt="" />
        </div>
        <h2>{contacto.nombre}</h2>
        <div className="header-icos">
          <i className="bi bi-three-dots-vertical"></i>
          <i class="bi bi-telephone-outbound"></i>
        </div>
      </div>
    </div>
  );
};

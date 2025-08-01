import React from "react";
import { Link } from "react-router";
import "./Aside.css";
export const Aside = ({ onSelect }) => {
  return (
    <div className="aside">
      <i className="bi bi-three-dots" onClick={() => onSelect("estados")}></i>
      <Link to="/" onClick={() => onSelect("chats")}>
        <i className="bi bi-chat-dots"></i>
      </Link>
      <Link to="/llamadas">
        <i
          className="bi bi-telephone-outbound"
          onClick={() => onSelect("contactos")}
        ></i>
      </Link>
    </div>
  );
};

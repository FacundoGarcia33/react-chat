import React from "react";
import "./Messages.css";
export const Menssage = ({ emisor, hora, texto, id, BorrarMensajePorId }) => {
  return (
    <div className="message-container">
      <p>{emisor}</p>
      <p className="Hora">{hora}</p>
      <p>{texto}</p>
    </div>
  );
};

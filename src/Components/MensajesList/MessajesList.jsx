import React from "react";
import { Menssage } from "./Messages";
export const MensajesList = ({ messages, BorrarMensajePorId }) => {
  const messagesList = messages.map((mj) => {
    return (
      <div key={mj.id} className="message">
        <Menssage emisor={mj.emisor} hora={mj.hora} texto={mj.texto} />
      </div>
    );
  });
  return <div>{messagesList}</div>;
};

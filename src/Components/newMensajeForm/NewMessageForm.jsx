import React from "react";
import "./NewMensaje.css";
export const NewMensaje = ({ nuevoMensaje }) => {
  const handleSubmitSendMessageForm = (event) => {
    event.preventDefault();
    let new_message_text = event.target.message.value;
    nuevoMensaje(new_message_text);

    event.target.message.value = "";
  };
  return (
    <form onSubmit={handleSubmitSendMessageForm}>
      <label htmlFor="message">Escribe un mensaje...</label>
      <input
        type="text"
        placeholder="Escribir mensaje"
        id="message"
        name="message"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

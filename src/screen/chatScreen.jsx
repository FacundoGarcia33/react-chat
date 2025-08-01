// chatScreen.jsx
import React, { useState, useEffect } from "react";
import { MensajesList } from "../Components/MensajesList/MessajesList";
import { NewMensaje } from "../Components/newMensajeForm/NewMessageForm";
import "./chatScreen.css";
import { useParams } from "react-router";
import { getContactById } from "../servis/ContactServis.js";
import { Header } from "../Components/header/header.jsx";

export const ChatScreen = () => {
  const { contactId } = useParams();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const elemtContacto = getContactById(Number(contactId));
    if (elemtContacto && elemtContacto.messages) {
      setMessages(elemtContacto.messages);
    } else {
      setMessages([]);
    }
  }, [contactId]);
  const BorrarMensajePorId = (id) => {
    const new_mensaje = messages.filter((message) => message.id !== id);
    setMessages(new_mensaje);
  };
  const addNewMessage = (newmensaje) => {
    const fecha = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newMensaje = {
      emisor: "YO",
      hora: fecha,
      id: messages.length + 1,
      texto: newmensaje,
      status: "visto",
    };
    setMessages((prevMessages) => [...prevMessages, newMensaje]);
  };
  const eliminarTodo = () => {
    setMessages([]);
  };

  return (
    <div className="ChatSreen-container">
      <Header contacto={getContactById(Number(contactId))} />
      <MensajesList
        messages={messages}
        BorrarMensajePorId={BorrarMensajePorId}
      />
      {messages.length > 0 && (
        <i
          className="bi bi-trash deletestyle"
          onClick={() => {
            BorrarMensajePorId(messages[0].id);
          }}
        >
          Eliminar primer mensaje
        </i>
      )}
      {messages.length > 0 ? (
        <button className="buttonTotal" onClick={eliminarTodo}>
          Eliminar todo
        </button>
      ) : null}
      <NewMensaje nuevoMensaje={addNewMessage} />
    </div>
  );
};

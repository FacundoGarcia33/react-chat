import React from "react";
import { ContactList } from "./contactList";

export const ContactItem = ({ contactos }) => {
  return (
    <div>
      {contactos.map((contacto) => (
        <ContactList key={contacto.id} contactoData={contacto} />
      ))}
    </div>
  );
};

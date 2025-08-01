import React, { useState } from "react";
import { ContactItem } from "./contactItem";
import { getContactById, getContactList } from "../../servis/ContactServis";
export const ContactScreen = () => {
  const [contactos, setContactos] = useState(getContactList());
  return (
    <div>
      <ContactItem contactos={contactos} />
    </div>
  );
};

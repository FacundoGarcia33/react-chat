import React from "react";
import { ChatScreen } from "./screen/chatScreen";
import { Route, Routes } from "react-router";
import { ContactScreen } from "./Components/contactScren/contactScren";
import { Aside } from "./Components/aside/Aside";
import { Llamadas } from "./Components/llamdas/llamadas";
function App() {
  return (
    <div className="container">
      <Aside />
      <div style={{ marginLeft: "2px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<ContactScreen />} />
          <Route path="/contact/:contactId/mensajes" element={<ChatScreen />} />
          <Route path="/" element={<Aside />} />
          <Route path="/llamadas" element={<Llamadas />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

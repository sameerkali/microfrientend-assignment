import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ChatApp from "./ChatApp.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChatApp />
  </StrictMode>
);

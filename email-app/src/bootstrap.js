import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import EmailApp from "./EmailApp.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <EmailApp />
  </StrictMode>
);

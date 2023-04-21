import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./router/App";

const rootRef = document.querySelector("#root");
const root = createRoot(rootRef);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ListaTareasApp } from "./components/tareas/ListaTareasApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListaTareasApp />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ListaTareasApp } from "./components/tareas/ListaTareasApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <ListaTareasApp />
    </ChakraProvider>
  </StrictMode>
);

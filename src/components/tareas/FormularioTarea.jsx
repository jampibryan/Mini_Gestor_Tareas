import React, { useState, useEffect } from "react";

// Importamos componentes de Chakra
import { Input, Button, HStack } from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";

// Componente reutilizable para agregar o editar tareas
export const FormularioTarea = ({
  modo, // "agregar" o "editar"
  valorInicial, // nombre inicial si se va a editar
  onAgregar, // función para agregar tarea
  onActualizar, // función para actualizar tarea
}) => {
  const [texto, setTexto] = useState(valorInicial || "");

  // Si cambia el valor inicial (por ejemplo, al seleccionar otra tarea), se actualiza el input
  useEffect(() => {
    setTexto(valorInicial || "");
  }, [valorInicial]);

  // Manejar el envío del formulario
  const manejarEnvio = () => {
    const nombre = texto.trim();
    if (!nombre) return; // Evitar tareas vacías

    if (modo === "agregar") {
      onAgregar(nombre);
    } else {
      onActualizar(nombre);
    }

    setTexto(""); // Limpiar input después
  };

  return (
    <HStack mt={"8"}>
      {/* Campo de entrada para nueva tarea o edición */}
      <Input
        placeholder="Nueva tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      {/* Botón para enviar */}
      <Button
        onClick={manejarEnvio}
        colorScheme={modo === "agregar" ? "teal" : "blue"}
        isDisabled={texto.trim() === ""}
        leftIcon={modo === "agregar" ? <AddIcon /> : <EditIcon />}
      >
        {modo === "agregar" ? "Agregar" : "Actualizar"}
      </Button>
    </HStack>
  );
};

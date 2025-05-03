import React, { useState, useEffect } from "react";

// Componente reutilizable para agregar o editar tareas
export const FormularioTarea = ({
  modo,
  valorInicial = "",
  onAgregar,
  onActualizar,
}) => {
  const [texto, setTexto] = useState(valorInicial);

  // Si cambia la tarea a editar, actualizamos el input
  useEffect(() => {
    setTexto(valorInicial);
  }, [valorInicial]);

  // Manejar botón "Agregar" o "Actualizar"
  const manejarEnvio = () => {
    if (texto.trim()) {
      if (modo === "agregar") {
        onAgregar(texto.trim());
      } else {
        onActualizar(texto.trim());
      }
      setTexto("");
    }
  };

  return (
    <div>
      <input
        placeholder="Nueva tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={manejarEnvio} disabled={texto.trim() === ""}>
        {modo === "agregar" ? "Agregar" : "Actualizar"}
      </button>
    </div>
  );
};

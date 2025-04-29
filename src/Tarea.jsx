import React from "react";

export const Tarea = ({ nombre, completado, onEliminar, onCompletado }) => {
  return (
    <li>
      <button onClick={onEliminar}>Eliminar</button>
      <span onClick={onCompletado} style={{ cursor: "pointer" }}>
        {nombre}
      </span>
      {completado ? "✔" : "❌"}
    </li>
  );
};

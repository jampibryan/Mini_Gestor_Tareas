import React from "react";

export const Tarea = ({ nombre, completado, onEliminar }) => {
  return (
    <li>
      <button onClick={onEliminar}>Eliminar</button>
      {nombre} {completado ? "✔" : "❌"}
    </li>
  );
};

import React from "react";

export const Tarea = ({ nombre, completado }) => {
  return (
    <li>
      {nombre} {completado ? "✔" : "❌"}
    </li>
  );
};

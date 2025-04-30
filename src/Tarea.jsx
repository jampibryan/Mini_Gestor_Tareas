import React from "react";
export const Tarea = ({
  nombre,
  completado,
  onCompletado,
  seleccionado,
  onSeleccionar,
}) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={seleccionado}
          onChange={onSeleccionar}
        />
        <span onClick={onCompletado} style={{ cursor: "pointer" }}>
          {nombre}
        </span>
        {completado ? "✔" : "❌"}
      </li>
    </>
  );
};

import React from "react";

// Componente para renderizar una tarea individual
export const Tarea = ({
  nombre,
  completado,
  seleccionado,
  onCompletado,
  onSeleccionar,
  onEditar, // 👈 Nueva prop
}) => {
  return (
    <li>
      <input type="checkbox" checked={seleccionado} onChange={onSeleccionar} />
      <span
        onClick={onCompletado}
        style={{
          cursor: "pointer",
          textDecoration: completado ? "line-through" : "none",
        }}
      >
        {nombre}
      </span>
      {completado ? " ✔" : " ❌"}
      <button onClick={onEditar}>Editar</button> {/* 👈 Botón para editar */}
    </li>
  );
};

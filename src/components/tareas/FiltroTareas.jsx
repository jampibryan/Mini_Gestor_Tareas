// Componente para seleccionar el filtro de visualización de tareas

import React from "react";

export const FiltroTareas = ({ filtro, setFiltro }) => {
  return (
    <div>
      <label>Filtrar: </label>
      <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>
    </div>
  );
};

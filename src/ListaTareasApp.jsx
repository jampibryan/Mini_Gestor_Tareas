import React, { useState } from "react";
import { Tarea } from "./Tarea.jsx";

const listadoTareasInicial = [
  { nombre: "Aprender JSX", completado: true },
  { nombre: "Entender props y eventos", completado: true },
  { nombre: "Practicar useState", completado: false },
  { nombre: "Aplicar condicionales y ternarios", completado: false },
  { nombre: "Renderizar listas con map()", completado: false },
  { nombre: "Agregar estilos dinámicos", completado: false },
  { nombre: "Separar componentes", completado: false },
];

export const ListaTareasApp = () => {
  const addTask = () => {
    if (nuevaTarea.trim() === "") return;

    setlistadoTareas([
      ...listadoTareas,
      { nombre: nuevaTarea, completado: false },
    ]);
    setNuevaTarea("");
  };

  const [listadoTareas, setlistadoTareas] = useState(listadoTareasInicial);
  const [nuevaTarea, setNuevaTarea] = useState("");

  return (
    <>
      <h1>Listado de las tareas</h1>

      <ol>
        {listadoTareas.map((item) => (
          <Tarea
            key={item.nombre}
            nombre={item.nombre}
            completado={item.completado}
          ></Tarea>
        ))}
      </ol>

      <input
        placeholder="Escribe una nueva tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      ></input>
      <button onClick={addTask} disabled={nuevaTarea.trim() === ""}>
        Agregar
      </button>
    </>
  );
};

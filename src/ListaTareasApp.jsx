import React, { useState } from "react";
import { Tarea } from "./Tarea.jsx";

const listadoTareasInicial = [
  { id: 1, nombre: "Aprender JSX", completado: true },
  { id: 2, nombre: "Entender props y eventos", completado: true },
  { id: 3, nombre: "Practicar useState", completado: false },
  { id: 4, nombre: "Aplicar condicionales y ternarios", completado: false },
  { id: 5, nombre: "Renderizar listas con map()", completado: false },
  { id: 6, nombre: "Agregar estilos dinámicos", completado: false },
  { id: 7, nombre: "Separar componentes", completado: false },
];

export const ListaTareasApp = () => {
  const [listadoTareas, setlistadoTareas] = useState(listadoTareasInicial);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [seleccionadas, setSeleccionadas] = useState([]);

  // Agregar nuevas tareas
  const addTask = () => {
    if (nuevaTarea.trim() === "") return;
    const newId =
      listadoTareas.length > 0
        ? listadoTareas[listadoTareas.length - 1].id + 1
        : 1; // Obtener el último id y sumarle 1

    setlistadoTareas([
      ...listadoTareas,
      { id: newId, nombre: nuevaTarea, completado: false },
    ]);
    setNuevaTarea("");
  };

  const listas = listadoTareas.map((item) => item.id);
  console.log(listas);

  // Marcar o desmarcar tarea como completada
  const cambiarEstadoCompletado = (id) => {
    const listaTareasActualizada = listadoTareas.map((item) =>
      item.id === id ? { ...item, completado: !item.completado } : item
    );
    setlistadoTareas(listaTareasActualizada);
  };

  // Marcar o desmarcar una tarea seleccionada
  const toggleSeleccion = (id) => {
    if (seleccionadas.includes(id)) {
      // Si ya está seleccionada, lo deseleccionamos
      setSeleccionadas(seleccionadas.filter((itemId) => itemId !== id));
    } else {
      // Si no, lo seleccionamos
      setSeleccionadas([...seleccionadas, id]);
    }
  };

  // Eliminar todas las tareas seleccionadas
  const eliminarSeleccionadas = () => {
    setlistadoTareas(
      listadoTareas.filter((item) => !seleccionadas.includes(item.id))
    );
    setSeleccionadas([]); // Limpiar la lista de seleccionadas
  };

  return (
    <>
      <h1>Listado de las tareas</h1>

      <ol>
        {listadoTareas.map((item) => (
          <Tarea
            key={item.id}
            nombre={item.nombre}
            completado={item.completado}
            onCompletado={() => cambiarEstadoCompletado(item.id)}
            seleccionado={seleccionadas.includes(item.id)}
            onSeleccionar={() => toggleSeleccion(item.id)}
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

      <button
        disabled={seleccionadas.length == 0}
        onClick={eliminarSeleccionadas}
      >
        Eliminar
      </button>
    </>
  );
};

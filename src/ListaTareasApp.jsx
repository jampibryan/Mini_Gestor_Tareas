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
  const [listadoTareas, setListadoTareas] = useState(listadoTareasInicial);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [seleccionadas, setSeleccionadas] = useState([]);

  const [filtroActual, setFiltroActual] = useState("todas");

  // Agregar nuevas tareas
  const addTask = () => {
    if (nuevaTarea.trim() === "") return;
    const newId =
      listadoTareas.length > 0
        ? listadoTareas[listadoTareas.length - 1].id + 1
        : 1; // Obtener el último id y sumarle 1

    setListadoTareas([
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
    setListadoTareas(listaTareasActualizada);
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

  // Marcar o desmarcar todas las tareas
  const seleccionarTodo = () => {
    if (
      seleccionadas.length >= 0 &&
      seleccionadas.length < listadoTareas.length
    ) {
      // Si hay almenos una tarea seleccionada, seleccionamos todas
      setSeleccionadas(tareasFiltradas.map((item) => item.id));
    } else {
      // Si no, deseleccionamos todas
      setSeleccionadas([]);
    }
  };

  // Eliminar todas las tareas seleccionadas
  const eliminarSeleccionadas = () => {
    setListadoTareas(
      listadoTareas.filter((item) => !seleccionadas.includes(item.id))
    );
    setSeleccionadas([]); // Limpiar la lista de seleccionadas
  };

  // Contar tareas completadas
  const tareasCompletadas = listadoTareas.filter(
    (item) => item.completado
  ).length;

  // Filtrar tareas según el filtro seleccionado
  const tareasFiltradas = listadoTareas.filter((item) => {
    if (filtroActual == "todas") return true; // Todas las tareas
    if (filtroActual == "completadas") return item.completado; // Todas las tareas
    if (filtroActual == "pendientes") return !item.completado; // Todas las tareas
  });

  console.log(filtroActual);

  return (
    <>
      <h1>Listado de las tareas</h1>
      <h2>
        Tareas completadas: {tareasCompletadas} / {listadoTareas.length}
      </h2>

      <div>
        <label htmlFor="filtro">Filtrar tareas: </label>
        <select
          id="filtro"
          value={filtroActual}
          onChange={(e) => setFiltroActual(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="pendientes">Pendientes</option>
        </select>
      </div>

      {listadoTareas.length === 0 && <p>No hay tareas registradas</p>}

      {listadoTareas.length !== 0 && (
        <button onClick={seleccionarTodo}>Seleccionar todo</button>
      )}

      <ol>
        {tareasFiltradas.map((item) => (
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

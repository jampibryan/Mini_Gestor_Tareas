import React, { useState } from "react";
import { Tarea } from "./Tarea";
import { FormularioTarea } from "./FormularioTarea";
import { FiltroTareas } from "./FiltroTareas";

const tareasIniciales = [
  { id: 1, nombre: "Aprender JSX", completado: true },
  { id: 2, nombre: "Entender props y eventos", completado: true },
  { id: 3, nombre: "Practicar useState", completado: false },
  { id: 4, nombre: "Aplicar condicionales y ternarios", completado: false },
  { id: 5, nombre: "Renderizar listas con map()", completado: false },
  { id: 6, nombre: "Agregar estilos dinámicos", completado: false },
  { id: 7, nombre: "Separar componentes", completado: false },
];

export const ListaTareasApp = () => {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState("todas");
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [tareaEditando, setTareaEditando] = useState(null); // 👈 Para editar tarea

  // Filtrar tareas según opción seleccionada
  const tareasFiltradas = tareas.filter((t) =>
    filtro === "completadas"
      ? t.completado
      : filtro === "pendientes"
      ? !t.completado
      : true
  );

  // Agregar nueva tarea
  const agregarTarea = (nombre) => {
    const nueva = {
      id: tareas.length + 1,
      nombre,
      completado: false,
    };
    setTareas([...tareas, nueva]);
  };

  // Actualizar una tarea existente
  const actualizarTarea = (id, nuevoNombre) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, nombre: nuevoNombre } : t))
    );
    setTareaEditando(null); // Limpiar el modo edición
  };

  // Cambiar estado de completado
  const cambiarCompletado = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, completado: !t.completado } : t))
    );
  };

  // Seleccionar/deseleccionar tarea
  const toggleSeleccion = (id) => {
    setSeleccionadas((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Eliminar tareas seleccionadas
  const eliminarSeleccionadas = () => {
    setTareas(tareas.filter((t) => !seleccionadas.includes(t.id)));
    setSeleccionadas([]);
  };

  // Seleccionar o deseleccionar todas
  const seleccionarTodo = () => {
    if (seleccionadas.length < tareasFiltradas.length) {
      setSeleccionadas(tareasFiltradas.map((t) => t.id));
    } else {
      setSeleccionadas([]);
    }
  };

  // Activar modo edición
  const editarTarea = (tarea) => {
    setTareaEditando(tarea);
  };

  const completadas = tareas.filter((t) => t.completado).length;

  return (
    <>
      <h1>Gestor de Tareas</h1>

      <h2>
        Tareas completadas: {completadas} / {tareas.length}
      </h2>

      <FiltroTareas filtro={filtro} setFiltro={setFiltro} />

      {tareas.length > 0 && (
        <button onClick={seleccionarTodo}>Seleccionar todo</button>
      )}

      <ol>
        {tareasFiltradas.map((t) => (
          <Tarea
            key={t.id}
            nombre={t.nombre}
            completado={t.completado}
            seleccionado={seleccionadas.includes(t.id)}
            onCompletado={() => cambiarCompletado(t.id)}
            onSeleccionar={() => toggleSeleccion(t.id)}
            onEditar={() => editarTarea(t)} // 👈 Nueva función de editar
          />
        ))}
      </ol>

      {/* Formulario para agregar o editar tareas */}
      <FormularioTarea
        modo={tareaEditando ? "editar" : "agregar"}
        valorInicial={tareaEditando?.nombre || ""}
        onAgregar={agregarTarea}
        onActualizar={(nuevoNombre) =>
          actualizarTarea(tareaEditando.id, nuevoNombre)
        }
      />

      <button
        onClick={eliminarSeleccionadas}
        disabled={seleccionadas.length === 0}
      >
        Eliminar seleccionadas
      </button>
    </>
  );
};

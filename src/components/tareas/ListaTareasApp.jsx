// Importamos React y hooks necesarios
import React, { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

// Importamos componentes Chakra
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  StackDivider,
  Container,
} from "@chakra-ui/react";

// Importamos los componentes reutilizables
import { Tarea } from "./Tarea";
import { FormularioTarea } from "./FormularioTarea";
import { FiltroTareas } from "./FiltroTareas";

// Lista inicial de tareas
const tareasIniciales = [
  { id: 1, nombre: "Crear proyecto con Vite y React", completado: true },
  {
    id: 2,
    nombre: "Entender la sintaxis de JSX y cómo se renderiza",
    completado: true,
  },
  { id: 3, nombre: "Crear un componente funcional básico", completado: true },
  {
    id: 4,
    nombre: "Usar props para pasar datos a componentes",
    completado: true,
  },
  { id: 5, nombre: "Controlar estado con useState", completado: false },
  { id: 6, nombre: "Manejar eventos (onClick, onChange)", completado: false },
  { id: 7, nombre: "Mostrar una lista con .map() en React", completado: false },
];

// Componente principal
export const ListaTareasApp = () => {
  // Estados
  const [tareas, setTareas] = useState(tareasIniciales); // lista de tareas
  const [filtro, setFiltro] = useState("todas"); // filtro actual
  const [seleccionadas, setSeleccionadas] = useState([]); // ids de tareas seleccionadas
  const [tareaEditando, setTareaEditando] = useState(null); // tarea que se está editando

  // Filtrar tareas según el filtro seleccionado
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

  // Actualizar el nombre de una tarea
  const actualizarTarea = (id, nuevoNombre) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, nombre: nuevoNombre } : t))
    );
    setTareaEditando(null); // salir del modo edición
  };

  // Cambiar el estado de completado de una tarea
  const cambiarCompletado = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, completado: !t.completado } : t))
    );
  };

  // Seleccionar o deseleccionar una tarea
  const toggleSeleccion = (id) => {
    setSeleccionadas((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Eliminar todas las tareas seleccionadas
  const eliminarSeleccionadas = () => {
    // Verificar si la tarea en edición está siendo eliminada
    if (tareaEditando && seleccionadas.includes(tareaEditando.id)) {
      setTareaEditando(null); // Restablecer el modo edición
    }

    // Filtrar las tareas que no están seleccionadas
    setTareas(tareas.filter((t) => !seleccionadas.includes(t.id)));

    // Limpiar las tareas seleccionadas
    setSeleccionadas([]);
  };

  // Seleccionar o deseleccionar todas las tareas visibles
  const seleccionarTodo = () => {
    if (seleccionadas.length < tareasFiltradas.length) {
      setSeleccionadas(tareasFiltradas.map((t) => t.id));
    } else {
      setSeleccionadas([]);
    }
  };

  // Activar modo edición para una tarea
  const editarTarea = (tarea) => {
    setTareaEditando(tarea);
  };

  // Contador de tareas completadas
  const completadas = tareas.filter((t) => t.completado).length;

  return (
    <Container maxW="container.md" py={6}>
      {/* Título y contador */}
      <Heading as="h1" size="xl" mb={2} textAlign="center">
        Gestor de Tareas
      </Heading>

      <Text fontSize="xl" mb={4} textAlign="center">
        {tareas.length === 0
          ? "No hay tareas"
          : `Tareas completadas: ${completadas} / ${tareas.length}`}
      </Text>

      {/* Componente para elegir el filtro */}
      <FiltroTareas filtro={filtro} setFiltro={setFiltro} />

      {/* Botón para seleccionar todas */}
      {tareas.length > 0 && (
        <Box
          mt={"6"}
          display={{ base: "flex", md: "block" }}
          justifyContent="center"
        >
          <Button colorScheme="teal" size="sm" onClick={seleccionarTodo}>
            Seleccionar todo
          </Button>
        </Box>
      )}

      {/* Lista de tareas */}
      <VStack
        spacing={3}
        mt={6}
        divider={<StackDivider borderColor="gray.200" />}
        align="stretch"
      >
        {tareasFiltradas.map((t) => (
          <Tarea
            key={t.id}
            nombre={t.nombre}
            completado={t.completado}
            seleccionado={seleccionadas.includes(t.id)}
            onCompletado={() => cambiarCompletado(t.id)}
            onSeleccionar={() => toggleSeleccion(t.id)}
            onEditar={() => editarTarea(t)}
          />
        ))}
      </VStack>

      {/* Formulario para agregar o editar tarea */}
      <FormularioTarea
        modo={tareaEditando ? "editar" : "agregar"}
        valorInicial={tareaEditando?.nombre || ""} // Usamos en cadenamiento opcion (?.) para evitar errores si no hay tarea editando
        onAgregar={agregarTarea}
        onActualizar={(nuevoNombre) =>
          actualizarTarea(tareaEditando.id, nuevoNombre)
        }
      />

      {/* Botón para eliminar tareas seleccionadas */}
      <Button
        onClick={eliminarSeleccionadas}
        mt={4}
        colorScheme="red"
        size="sm"
        isDisabled={seleccionadas.length === 0}
        leftIcon={<DeleteIcon />}
      >
        Eliminar
      </Button>
    </Container>
  );
};

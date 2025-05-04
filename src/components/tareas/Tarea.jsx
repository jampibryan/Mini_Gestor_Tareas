// Importamos React
import React from "react";

// Importamos componentes Chakra
import { Box, HStack, Checkbox, Text, Button } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

// Componente para renderizar una tarea individual
export const Tarea = ({
  nombre, // Nombre de la tarea
  completado, // Estado: true si está completada, false si está pendiente
  seleccionado, // true si la tarea está seleccionada para eliminación múltiple
  onCompletado, // Función para cambiar el estado completado
  onSeleccionar, // Función para seleccionar/deseleccionar tarea
  onEditar, // Función para activar modo edición
}) => {
  return (
    <Box
      bg="gray.100" // 🟦 Fondo claro
      borderRadius="md" // 🟢 Bordes redondeados
      px={4}
      py={3}
      boxShadow="sm" // ✨ Sombra sutil
      position="relative"
      _hover={{
        "&::after": { width: "100%" },
        bg: "gray.200", // 🟩 Cambio de fondo al pasar el mouse
      }}
      _after={{
        content: '""',
        position: "absolute",
        bottom: "0",
        left: "0",
        height: "2px",
        width: "0",
        backgroundColor: "teal.400",
        transition: "width 0.3s ease",
        zIndex: 0,
      }}
    >
      <HStack spacing={4} align="center">
        <Checkbox
          isChecked={seleccionado}
          onChange={onSeleccionar}
          borderColor="gray.500"
          _checked={{ bg: "teal.400", borderColor: "teal.400" }}
          _hover={{ borderColor: "gray.700" }}
        />
        <Text
          onClick={onCompletado}
          cursor="pointer"
          flex="1"
          whiteSpace="normal" // 🟢 permite saltos de línea
          wordBreak="break-word" // 🟢 rompe palabras largas
          overflowWrap="break-word"
        >
          {nombre}
        </Text>
        {completado ? (
          <CheckIcon color="green.400" ml={2} />
        ) : (
          <CloseIcon color="red.400" ml={2} />
        )}
        <Button onClick={onEditar} size="sm" colorScheme="blue">
          Editar
        </Button>
      </HStack>
    </Box>
  );
};

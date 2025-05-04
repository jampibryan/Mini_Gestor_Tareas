import { Box, FormControl, HStack, FormLabel, Select } from "@chakra-ui/react";

export const FiltroTareas = ({ filtro, setFiltro }) => {
  return (
    <Box mt={4}>
      <FormControl maxW="300px" mx="auto">
        <HStack spacing={3}>
          <FormLabel mb="0" whiteSpace="nowrap">
            Filtrar:
          </FormLabel>
          <Select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            size="sm"
            bg="white"
          >
            <option value="todas">Todas</option>
            <option value="completadas">Completadas</option>
            <option value="pendientes">Pendientes</option>
          </Select>
        </HStack>
      </FormControl>
    </Box>
  );
};

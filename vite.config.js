import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/Mini_Gestor_Tareas/', // 👈 Esta línea es clave
  plugins: [react()],
})

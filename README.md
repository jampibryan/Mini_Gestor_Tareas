# Mini Gestor de Tareas en React

Aplicación web para gestionar tareas, con funciones para agregar, editar, eliminar, completar y filtrar tareas en una lista interactiva.

## 🎯 Objetivo

Desarrollar una interfaz funcional y dinámica que permita al usuario gestionar sus tareas de forma simple, clara y eficiente.

## 🛠️ ¿Qué puedes hacer con esta aplicación?

- 👀 Ver una lista con tareas ya cargadas al iniciar.
- ✍️ Escribir una nueva tarea y agregarla con un botón.
- 🛠️ Editar una tarea existente si te equivocaste o quieres cambiar algo.
- 🗑️ Eliminar una o varias tareas seleccionándolas fácilmente.
- ✅ Marcar una tarea como completada con un solo clic.
- ❌ Volverla a marcar como pendiente si cambiaste de opinión.
- 📭 Ver un mensaje si no tienes tareas por ahora.
- 📊 Consultar cuántas tareas tienes y cuántas ya completaste.
- 📌 Marcar o desmarcar todas las tareas a la vez con un botón.
- 🔍 Filtrar tus tareas para ver:
  - Todas
  - Solo las completadas
  - Solo las pendientes
- 🎨 Diseñar la interfaz completa y responsiva de la aplicación para que sea más visual y agradable para el usuario.

## 🧩 Próximas mejoras

- 💾 Guardar automáticamente las tareas en tu navegador, incluso si cierras la pestaña.
- 🔄 Cargar tus tareas guardadas cuando vuelvas a abrir la app.
- ⚠️ Mostrar un mensaje de confirmación antes de eliminar tareas por accidente.

## 🧩 Tecnologías usadas

- React
- Vite (herramienta de desarrollo)
- JavaScript (ES6+)
- Chakra UI (librería de componentes)

## 📂 Estructura de archivos

- `ListaTareasApp.jsx` → Componente principal que gestiona toda la lógica de tareas.
- `Tarea.jsx` → Componente para mostrar cada tarea individualmente.
- `FormularioTarea.jsx` → Formulario reutilizable para agregar y editar tareas.
- `FiltroTareas.jsx` → Componente para filtrar tareas por completadas, pendientes o todas.
- `App.jsx` → Carga el componente principal en pantalla.
- `main.jsx` → Punto de entrada de la aplicación.

## 📦 Instalación y dependencias

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

```bash
git clone https://github.com/jampibryan/Mini_Gestor_Tareas
```

2. Entra a la carpeta del proyecto:

```bash
cd Mini_Gestor_Tareas
```

3. Instala todas las dependencias necesarias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

> Esto instalará todas las librerías definidas en el `package.json`, incluyendo React, Vite y Chakra UI, y levantará la aplicación en tu navegador.

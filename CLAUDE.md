# Contexto del Proyecto

## Cómo ayudar a Diego
1. **Preguntas técnicas**: Explicar conceptos mientras construimos
2. **Documentación**: Al final de cada sesión, generar un resumen en formato Notion (markdown) con:
   - Qué se hizo
   - Conceptos aprendidos
   - Código importante
   - Próximos pasos

## Descripción
Lista de tareas con React + Supabase. Proyecto de aprendizaje.

## Stack
- React 19 con Vite
- Supabase (autenticación con Magic Link)
- React Router DOM v6

## Estructura
```
mi-lista-tareas/
├── src/
│   ├── main.jsx          # Punto de entrada, configura BrowserRouter
│   ├── App.jsx           # Rutas principales
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx     # Login con Magic Link
│   │   └── NotFound.jsx  # Página 404
│   └── supabase/
│       └── client.jsx    # Cliente de Supabase
```

## Notas importantes
- El proyecto está en `mi-lista-tareas/` (NO en la carpeta raíz)
- Instalar dependencias siempre dentro de `mi-lista-tareas/`

## Progreso
- [x] Setup inicial con Vite
- [x] Configuración de Supabase
- [x] Login con Magic Link
- [x] React Router configurado
- [ ] (próximos pasos...)

import { useTasks } from "../context/TaskContext";
import { useEffect } from "react";
import TaskCard from "./taskCard";

function Tasklist({ done = false }) {
  const { tasks, getTasks, loading } = useTasks();

  useEffect(() => {
    getTasks(done);
  }, [done]);

  // ===== ESTADO: CARGANDO =====
  if (loading) {
    return (
      // text-center: centra el contenido
      // py-5: padding en Y (arriba y abajo) de 3rem
      <div className="text-center py-5">
        {/* spinner-border: animación de carga circular de Bootstrap */}
        {/* text-primary: color azul primario */}
        <div className="spinner-border text-primary" role="status">
          {/* visually-hidden: oculta visualmente pero accesible para lectores de pantalla */}
          <span className="visually-hidden">Cargando...</span>
        </div>
        {/* mt-2: margin-top de 0.5rem */}
        {/* text-muted: color gris apagado */}
        <p className="mt-2 text-muted">Cargando tareas...</p>
      </div>
    );
  }

  // ===== ESTADO: SIN TAREAS =====
  if (tasks.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="text-muted">
          {/* SVG: icono de checkbox vacío */}
          {/* mb-3: margin-bottom de 1rem */}
          {/* opacity-50: 50% de opacidad */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="mb-3 opacity-50" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
          </svg>
          {/* mb-0: margin-bottom 0 */}
          <p className="mb-0">{done ? "No hay tareas completadas" : "No hay tareas pendientes"}</p>
          <small>{done ? "" : "¡Agrega una nueva tarea arriba!"}</small>
        </div>
      </div>
    );
  }

  // ===== ESTADO: CON TAREAS =====
  return (
    // d-flex: display flex
    // flex-column: dirección de columna (vertical)
    // gap-2: espacio de 0.5rem entre cada elemento hijo
    <div className="d-flex flex-column gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Tasklist;

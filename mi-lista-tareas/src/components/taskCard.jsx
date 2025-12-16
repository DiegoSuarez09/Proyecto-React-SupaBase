import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleDone = () => {
    updateTask(task.id, { done: !task.done });
  };

  return (
    // card: contenedor con bordes redondeados de Bootstrap
    // border-0: sin bordes
    // shadow-sm: sombra pequeña
    // bg-light: fondo gris claro (solo si está completada)
    <div className={`card border-0 shadow-sm ${task.done ? "bg-light" : ""}`}>

      {/* card-body: padding interno del card */}
      {/* d-flex: display flex */}
      {/* align-items-center: centra verticalmente */}
      {/* justify-content-between: espacio entre elementos (checkbox a la izquierda, botón a la derecha) */}
      {/* py-3: padding en Y de 1rem */}
      <div className="card-body d-flex align-items-center justify-content-between py-3">

        {/* Contenedor izquierdo: checkbox + nombre de tarea */}
        {/* gap-3: espacio de 1rem entre elementos */}
        <div className="d-flex align-items-center gap-3">

          {/* Botón circular que actúa como checkbox */}
          {/* btn-sm: botón pequeño */}
          {/* rounded-circle: hace el botón completamente redondo */}
          {/* btn-success: verde si está completado */}
          {/* btn-outline-secondary: gris con borde si está pendiente */}
          <button
            className={`btn btn-sm rounded-circle ${task.done ? "btn-success" : "btn-outline-secondary"}`}
            onClick={handleToggleDone}
            style={{ width: "32px", height: "32px" }}
            title={task.done ? "Marcar como pendiente" : "Marcar como completada"}
          >
            {/* SVG: icono de check (solo se muestra si está completada) */}
            {task.done && (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            )}
          </button>

          {/* Nombre de la tarea */}
          {/* text-decoration-line-through: texto tachado (si está completada) */}
          {/* text-muted: color gris (si está completada) */}
          {/* fw-medium: font-weight medio (si está pendiente) */}
          <span className={task.done ? "text-decoration-line-through text-muted" : "fw-medium"}>
            {task.Name}
          </span>
        </div>

        {/* Botón de eliminar (lado derecho) */}
        {/* btn-outline-danger: botón rojo con borde */}
        {/* btn-sm: botón pequeño */}
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleDelete}
          title="Eliminar tarea"
        >
          {/* SVG: icono de basurero */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

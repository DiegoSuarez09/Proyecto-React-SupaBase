import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { createTask, adding } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación: no enviar si el input está vacío
    if (!taskName.trim()) return;
    createTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* input-group: agrupa input y botón en una sola línea */}
      {/* El input y el botón se unen visualmente */}
      <div className="input-group">
        {/* form-control: estilo para inputs de Bootstrap */}
        {/* form-control-lg: input más grande (más alto) */}
        <input
          type="text"
          className="form-control form-control-lg"
          name="TaskName"
          placeholder="¿Qué necesitas hacer?"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />
        {/* btn: estilo base de botón */}
        {/* btn-primary: botón azul primario */}
        {/* px-4: padding en X (izquierda y derecha) de 1.5rem */}
        <button
          className="btn btn-primary px-4"
          type="submit"
          disabled={adding || !taskName.trim()}
        >
          {adding ? (
            <>
              {/* spinner-border: animación de carga circular */}
              {/* spinner-border-sm: tamaño pequeño del spinner */}
              {/* me-2: margin-end (derecha) de 0.5rem */}
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Agregando...
            </>
          ) : (
            "Agregar"
          )}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;

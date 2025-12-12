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
    <div>
      <h1>{task.Name}</h1>
      <p>{JSON.stringify(task.done)}</p>
      <button onClick={() => handleDelete()}>Borrar</button>
      <button onClick={() => handleToggleDone()}>Completada</button>
    </div>
  );
}

export default TaskCard;

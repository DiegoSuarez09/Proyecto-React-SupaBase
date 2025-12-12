import { useTasks } from "../context/TaskContext";
import { useEffect } from "react";
import TaskCard from "./taskCard";
function Tasklist() {
  const { tasks, getTasks, loading } = useTasks();
  useEffect(() => {
    getTasks();
  }, []);

  function renderTasks() {
    if (loading) {
      return <p> Loading...</p>;
    } else if (tasks.length === 0) {
      return <p> Sin tareas</p>;
    } else {
      return (
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      );
    }
  }
  return <div>{renderTasks()}</div>;
}

export default Tasklist;

import { useTasks } from "../context/TaskContext";
import { useEffect } from "react";
function Tasklist() {
  const { tasks, getTasks } = useTasks();
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.Name}</h1>
          <p>{JSON.stringify(task.done)}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasklist;

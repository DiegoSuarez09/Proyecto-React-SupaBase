import { useState } from "react";
import { supabase } from "../supabase/client";
function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const result = await supabase.from("Tasks").insert({
        Name: taskName,
        userid: user.id,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
      
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="TaskName"
          placeholder="Write a task name"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default TaskForm;

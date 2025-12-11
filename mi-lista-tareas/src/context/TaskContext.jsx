/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used withina taskcontext");
  return context;
};
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async (done = false) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
    const { error, data } = await supabase
      .from("Tasks")
      .select()
      .eq("done", done)
      .eq("userid", user.id);
    
    if (error) throw error;
    setTasks(data);
  };
  return (
    <TaskContext.Provider value={{ tasks, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

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
  const [adding, setadding] = useState(false);

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

  const createTask = async (taskName) => {
    setadding(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { error, data } = await supabase
        .from("Tasks")
        .insert({
          Name: taskName,
          userid: user.id,
        })
        .select();
      if (error) throw error;
      setTasks([...tasks, ...data]);
    } catch (error) {
      console.error(error);
    } finally {
      setadding(false);
    }
  };
  return (
    <TaskContext.Provider value={{ tasks, getTasks, createTask, adding }}>
      {children}
    </TaskContext.Provider>
  );
};

import { supabase } from "../supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import Tasklist from "../components/TaskList";

function Home() {
  const [showTaskDone, setShowTaskDone] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
      }
    };
    checkUser();
  }, [navigate]);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
      <TaskForm />
      <header>
        <span>Tareas Pendientes</span>
        <button onClick={() => setShowTaskDone(!showTaskDone)}>
          Mostrar las Tareas Echas
        </button>
      </header>
      <Tasklist done={showTaskDone} />
    </div>
  );
}

export default Home;

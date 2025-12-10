import { supabase } from "../supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
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
      <TaskForm/>
    </div>
  );
}

export default Home;

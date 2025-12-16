import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route, useNavigate } from "react-router-dom";
import { supabase } from "./supabase/client";
import { useEffect } from "react";
import { TaskContextProvider } from "./context/TaskContext";
import Navbar from "./components/navbar";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        navigate("/login");
      }
      // Solo redirige cuando el usuario hace login desde el Magic Link
      if (event === "SIGNED_IN" && window.location.pathname === "/login") {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
    </div>
  );
}

export default App;

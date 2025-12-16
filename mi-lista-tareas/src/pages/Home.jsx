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
    // bg-light: fondo gris claro
    // min-vh-100: altura mínima 100% del viewport (pantalla completa)
    <div className="bg-light min-vh-100">

      {/* container: centra el contenido y limita el ancho máximo */}
      {/* py-5: padding en Y (arriba y abajo) de 3rem */}
      <div className="container py-5">

        {/* row: fila del sistema de grillas de Bootstrap */}
        {/* justify-content-center: centra las columnas horizontalmente */}
        <div className="row justify-content-center">

          {/* col-lg-8: columna que ocupa 8/12 del ancho en pantallas grandes */}
          <div className="col-lg-8">

            {/* ===== HEADER ===== */}
            {/* text-center: centra el texto */}
            {/* mb-4: margin-bottom de 1.5rem */}
            <div className="text-center mb-4">
              {/* display-5: tamaño de título grande (más pequeño que display-4) */}
              {/* fw-bold: font-weight bold (negrita) */}
              {/* text-primary: color azul primario de Bootstrap */}
              <h1 className="display-5 fw-bold text-primary">Mis Tareas</h1>
              {/* text-muted: color gris apagado */}
              <p className="text-muted">Organiza tu día de manera eficiente</p>
            </div>

            {/* ===== CARD DEL FORMULARIO ===== */}
            {/* card: contenedor con bordes redondeados */}
            {/* shadow-sm: sombra pequeña */}
            {/* border-0: sin bordes */}
            {/* mb-4: margin-bottom de 1.5rem */}
            <div className="card shadow-sm border-0 mb-4">
              {/* card-body: padding interno del card */}
              {/* p-4: padding de 1.5rem en todos los lados */}
              <div className="card-body p-4">
                {/* card-title: estilo para título dentro de card */}
                {/* mb-3: margin-bottom de 1rem */}
                <h5 className="card-title mb-3">Nueva Tarea</h5>
                <TaskForm />
              </div>
            </div>

            {/* ===== CARD DE LA LISTA DE TAREAS ===== */}
            <div className="card shadow-sm border-0">
              {/* card-header: cabecera del card */}
              {/* bg-white: fondo blanco */}
              {/* border-0: sin borde inferior */}
              {/* py-3: padding en Y de 1rem */}
              <div className="card-header bg-white border-0 py-3">
                {/* d-flex: display flex */}
                {/* justify-content-between: espacio entre elementos */}
                {/* align-items-center: centra verticalmente */}
                <div className="d-flex justify-content-between align-items-center">
                  {/* mb-0: margin-bottom 0 (quita el margin default del h5) */}
                  <h5 className="mb-0">
                    {showTaskDone ? "Tareas Completadas" : "Tareas Pendientes"}
                  </h5>
                  {/* btn-sm: botón pequeño */}
                  {/* btn-outline-secondary: botón gris con borde */}
                  {/* btn-outline-success: botón verde con borde */}
                  <button
                    className={`btn btn-sm ${showTaskDone ? "btn-outline-secondary" : "btn-outline-success"}`}
                    onClick={() => setShowTaskDone(!showTaskDone)}
                  >
                    {showTaskDone ? "Ver Pendientes" : "Ver Completadas"}
                  </button>
                </div>
              </div>
              <div className="card-body p-4">
                <Tasklist done={showTaskDone} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

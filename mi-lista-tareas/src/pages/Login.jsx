import { useState } from "react";
import { supabase } from "../supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Estado para mostrar spinner mientras carga
  const [message, setMessage] = useState(""); // Estado para mostrar mensajes al usuario

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      setMessage("¡Revisa tu correo! Te enviamos un enlace mágico.");
    } catch (error) {
      setMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    // min-vh-100: altura mínima 100% del viewport
    // d-flex: display flex
    // align-items-center: centra verticalmente
    // justify-content-center: centra horizontalmente
    // bg-light: fondo gris claro
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">

      {/* card: contenedor con bordes redondeados y sombra */}
      {/* shadow-lg: sombra grande */}
      {/* border-0: sin bordes */}
      <div className="card shadow-lg border-0" style={{ maxWidth: "400px", width: "100%" }}>

        {/* card-body: padding interno del card */}
        {/* p-5: padding de 3rem (48px) en todos los lados */}
        <div className="card-body p-5">

          {/* text-center: centra el texto */}
          {/* mb-4: margin-bottom de 1.5rem */}
          <div className="text-center mb-4">
            {/* fw-bold: font-weight bold */}
            {/* text-primary: color azul primario de Bootstrap */}
            <h2 className="fw-bold text-primary">Bienvenido</h2>
            {/* text-muted: color gris apagado */}
            <p className="text-muted">Ingresa tu correo para continuar</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* mb-3: margin-bottom de 1rem */}
            <div className="mb-3">
              {/* form-label: estilo para labels de formulario */}
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              {/* form-control: estilo para inputs */}
              {/* form-control-lg: input más grande */}
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                placeholder="tu@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* btn: estilo base de botón */}
            {/* btn-primary: botón azul primario */}
            {/* btn-lg: botón grande */}
            {/* w-100: width 100% */}
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  {/* spinner-border: animación de carga circular */}
                  {/* spinner-border-sm: tamaño pequeño del spinner */}
                  {/* me-2: margin-end (derecha) de 0.5rem */}
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Enviando...
                </>
              ) : (
                "Enviar Magic Link"
              )}
            </button>
          </form>

          {/* Muestra mensaje de éxito o error */}
          {message && (
            // alert: estilo de alerta de Bootstrap
            // alert-danger: alerta roja para errores
            // alert-success: alerta verde para éxito
            // mt-3: margin-top de 1rem
            <div className={`alert ${message.includes("Error") ? "alert-danger" : "alert-success"} mt-3`} role="alert">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

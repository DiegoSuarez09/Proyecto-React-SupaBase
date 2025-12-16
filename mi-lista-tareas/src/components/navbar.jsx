import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";

function Navbar() {
  return (
    // navbar: componente de navegación de Bootstrap
    // navbar-expand-lg: el menú se expande en pantallas grandes (lg = large)
    // navbar-dark: texto claro para fondos oscuros
    // bg-primary: fondo azul primario de Bootstrap
    // shadow-sm: sombra pequeña debajo del navbar
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">

      {/* container: centra el contenido y limita el ancho máximo */}
      <div className="container">

        {/* navbar-brand: estilo para el logo/nombre de la marca */}
        {/* fw-bold: font-weight bold (negrita) */}
        <Link className="navbar-brand fw-bold" to="/">
          {/* bi bi-check2-square: icono de Bootstrap Icons (necesita la librería) */}
          {/* me-2: margin-end (derecha) de 0.5rem */}
          <i className="bi bi-check2-square me-2"></i>
          Task Manager
        </Link>

        {/* navbar-toggler: botón hamburguesa para móviles */}
        {/* data-bs-toggle: activa el colapso (necesita JS de Bootstrap) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* navbar-toggler-icon: icono de las 3 líneas horizontales */}
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* collapse navbar-collapse: contenido que se colapsa en móviles */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* navbar-nav: contenedor de items de navegación */}
          {/* ms-auto: margin-start auto (empuja los items a la derecha) */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* btn: estilo base de botón */}
              {/* btn-outline-light: botón con borde claro, fondo transparente */}
              {/* btn-sm: botón pequeño */}
              <button
                className="btn btn-outline-light btn-sm"
                onClick={async () => await supabase.auth.signOut()}
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

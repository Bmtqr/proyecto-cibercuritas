import "../css/navbar.css";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <section className="section-navbar">
      <header className="hero-header">
        <nav className="navbar">
          <NavLink to="/" className="logo">
            <h3 className="logo-texto">Cibercuritas</h3>
          </NavLink>

          {/* Checkbox para el menú responsive */}
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />

          {/* Icono hamburguesa */}
          <label htmlFor="nav-toggle" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>

          {/* Menú principal */}
          <ul className="menu">
            <li className="menu-item">
              <NavLink to="/" className="nav-link">Inicio</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
            </li>
            <li className="menu-item has-submenu">
              <a className="nav-link">Servicios</a>
              <ul className="submenu">
                <li><NavLink to="/phishing" className="nav-link">Capacitación</NavLink></li>
                <li><NavLink to="/hacking" className="nav-link">Hacking</NavLink></li>
              </ul>
            </li>
            <li className="menu-item">
              <NavLink to="/cotizacion" className="nav-link">Contacto</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/login" className="nav-link">
                <i className="fa-solid fa-user"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
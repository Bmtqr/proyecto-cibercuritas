import "../css/navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function Navbar() {
  const location = useLocation();
  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    if (navToggle) navToggle.checked = false;
  }, [location]);

  useEffect(() => {
  const handleClickOutside = (e) => {
    const navToggle = document.getElementById("nav-toggle");
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    if (
      navToggle?.checked &&
      !menu?.contains(e.target) &&
      !hamburger?.contains(e.target)
    ) {
      navToggle.checked = false;
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [location]);
  
  return (
    <section className="section-navbar">
      <header className="hero-header">
        <nav className="navbar">
          <NavLink to="/home" className="logo">
            <h3 className="logo-texto">Cibercuritas</h3>
          </NavLink>

          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <ul className="menu">
            <li className="menu-item">
              <NavLink to="/" className="nav-link" onClick={() => document.getElementById("nav-toggle").checked = false}>Inicio</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/nosotros" className="nav-link" onClick={() => document.getElementById("nav-toggle").checked = false}>Nosotros</NavLink>
            </li>
            <li className="menu-item has-submenu">
              <a className="nav-link">Servicios</a>
              <ul className="submenu">
                <li><NavLink to="/phishing" className="nav-link" onClick={() => document.getElementById("nav-toggle").checked = false}>Capacitación</NavLink></li>
                <li><NavLink to="/hacking" className="nav-link" onClick={() => document.getElementById("nav-toggle").checked = false}>Hacking</NavLink></li>
              </ul>
            </li>
            <li className="menu-item">
              <NavLink to="/cotizacion" className="nav-link" onClick={() => document.getElementById("nav-toggle").checked = false}>Contacto</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/login" className="nav-link" onClick={() => document.getElementById("nav-toggle").checked = false}>
                <i className="fa-solid fa-user"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
import "../css/navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      setIsLoggedIn(true);
      setUserEmail(user || "");
    } else {
      setIsLoggedIn(false);
      setUserEmail("");
    }
  }, [location]); // se actualiza al cambiar de ruta

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Sesión cerrada.");
    setIsLoggedIn(false);
    navigate("/login");
  };
  
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
            {/* 👇 Si NO está logueado, mostrar ícono de usuario */}
            {!isLoggedIn && (
              <li className="menu-item">
                <NavLink to="/login" className="nav-link">
                  <i className="fa-solid fa-user"></i>
                </NavLink>
              </li>
            )}

            {/* 👇 Si está logueado, mostrar correo + botón de logout */}
            {isLoggedIn && (
              <>
                <li className="menu-item">
                  <span className="nav-link user-info">
                    <i className="fa-solid fa-user-check"></i> {userEmail}
                  </span>
                </li>
                <li className="menu-item">
                  <button className="nav-link logout-btn" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </section>
  );
}
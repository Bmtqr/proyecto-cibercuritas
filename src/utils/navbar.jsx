import "../css/navbar.css";

export default function Navbar() {
  return (
    <section className="section-navbar">
      <header className="hero-header">
        <nav className="navbar">
          <a className="logo">
            <h3 className="logo-texto">Cibercuritas</h3>
          </a>

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
              <a href="/" className="nav-link">Inicio</a>
            </li>
            <li className="menu-item">
              <a href="/nosotros" className="nav-link">Nosotros</a>
            </li>
            <li className="menu-item has-submenu">
              <a href="#" className="nav-link">Servicios</a>
              <ul className="submenu">
                <li><a href="/phishing" className="nav-link">Capacitación</a></li>
                <li><a href="/hacking" className="nav-link">Hacking Ético</a></li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="/contacto" className="nav-link">Contacto</a>
            </li>
            <li className="menu-item">
              <a href="/login" className="nav-link">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
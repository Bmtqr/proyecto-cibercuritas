import { useState } from "react";
import {
  validarDV,
  formatearRut,
  rutBloqueado,
  validarEmail,
  validarTelefono,
} from "../utils/validacion.jsx";
import "../css/cotizacion.css";
import Footer from "../utils/footer.jsx";
import Navbar from "../utils/navbar.jsx";
import { useEffect } from "react";

export default function Cotizacion() {
  useEffect(() => {
      document.title = "Cibercuritas - Contacto";
    }, []);
  const [formData, setFormData] = useState({
    area: "",
    nombre: "",
    apellido: "",
    email: "",
    rut: "",
    cargo: "",
    empresa: "",
    telefono: "",
    region: "",
    comentarios: "",
  });

  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState("");

  // --- Manejadores de cambio ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    let nuevoValor = value;

    if (name === "rut") nuevoValor = formatearRut(value.replace(/[^0-9.\-kK]/g, ""));
    if (name === "telefono") nuevoValor = value.replace(/[^0-9]/g, "");

    setFormData({ ...formData, [name]: nuevoValor });
  };

  // --- Envío del formulario ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};


    if (!validarEmail(formData.email)) nuevosErrores.email = "Correo inválido";
    if (!validarTelefono(formData.telefono)) nuevosErrores.telefono = "Debe tener 9 números";
    if (!validarDV(formData.rut)) nuevosErrores.rut = "RUT inválido";
    else if (rutBloqueado(formData.rut)) nuevosErrores.rut = "RUT no permitido";

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;


    setMensajeExito("Formulario enviado con éxito");
    setTimeout(() => setMensajeExito(""), 4000);
    setFormData({
      area: "",
      nombre: "",
      apellido: "",
      email: "",
      rut: "",
      cargo: "",
      empresa: "",
      telefono: "",
      region: "",
      comentarios: "",
    });
  };

  return (
    <>
    <Navbar />
      <section className="titulo-cot">
        <h2>Formulario de Cotización</h2>
        <p className="kicker">Completa tus datos y te contactamos</p>
      </section>

      <section className="contacto-section">
        <form id="contacto-formulario" onSubmit={handleSubmit}>
          <label htmlFor="area">Área de servicios a cotizar*</label>
          <select
            name="area"
            className="area"
            required
            value={formData.area}
            onChange={handleChange}
          >
            <option value="" disabled>Selecciona</option>
            <option value="conec">Conectividad</option>
            <option value="ciber">Hacking Ético</option>
            <option value="phishing">Phishing</option>
            <option value="soluc">Soluciones TI</option>
            <option value="cloud">Cloud</option>
          </select>

          <label htmlFor="nombre">Nombre*</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

          <label htmlFor="apellido">Apellido*</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />

           {/* RUT */}
          <label htmlFor="rut">RUT*</label>
          <div className="input-wrapper">
            <input
              type="text"
              name="rut"
              className={errores.rut ? "input-error" : ""}
              value={formData.rut}
              onChange={handleChange}
              placeholder="11.111.111-1"
              maxLength="12"
              required
            />
            {errores.rut && <small className="error-msg active">{errores.rut}</small>}
          </div>

          {/* EMAIL */}
          <label htmlFor="email">Correo Electrónico*</label>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              className={errores.email ? "input-error" : ""}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errores.email && <small className="error-msg active">{errores.email}</small>}
          </div>

          <label htmlFor="cargo">Cargo*</label>
          <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} required />

          <label htmlFor="empresa">Empresa*</label>
          <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} required />

          {/* TELÉFONO */}
          <label htmlFor="telefono">Teléfono*</label>
          <div className="input-wrapper">
            <input
              type="tel"
              name="telefono"
              className={errores.telefono ? "input-error" : ""}
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ej: 912345678"
              maxLength="9"
              required
            />
            {errores.telefono && <small className="error-msg active">{errores.telefono}</small>}
          </div>

          <label htmlFor="region">Región de Chile*</label>
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona</option>
            <option>Arica y Parinacota</option>
            <option>Tarapacá</option>
            <option>Antofagasta</option>
            <option>Atacama</option>
            <option>Coquimbo</option>
            <option>Valparaíso</option>
            <option>Metropolitana</option>
            <option>O'Higgins</option>
            <option>Maule</option>
            <option>Ñuble</option>
            <option>Bío Bío</option>
            <option>La Araucanía</option>
            <option>Los Ríos</option>
            <option>Los Lagos</option>
            <option>Aysén</option>
            <option>Magallanes</option>
          </select>

          <label htmlFor="comentarios">Comentarios</label>
          <textarea
            name="comentarios"
            className="area-comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            rows="4"
          />

          <button type="submit" className="btn-enviar">Enviar</button>
          {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}
        </form>
      </section>
    <Footer />
    </>
  );
}
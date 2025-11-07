import { useState } from "react";
import { validarCorreo } from "../utils/cifrado.jsx";
import { apiFetch } from "../utils/api";
import {
  validarDV,
  formatearRut,
  rutBloqueado,
  validarTelefono,
} from "../utils/validacion.jsx";
import "../css/cotizacion.css";
import Footer from "../utils/footer.jsx";
import Navbar from "../utils/navbar.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cotizacion() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Debes iniciar sesión para acceder al formulario.");
      navigate("/login");
    }
  }, [navigate]);

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
    monto: "",
    comentarios: "",
  });

  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState("");
  const [precioTotal, setPrecioTotal] = useState(0);

  const preciosServicios = {
    conectividad: 1000000,
    ciber: 2500000,
    phishing: 700000,
    soluTI: 1500000,
    cloud: 2000000,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let nuevoValor = value;

    if (["nombre", "apellido", "empresa", "cargo"].includes(name)) {
    nuevoValor = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ""); 
  }

    if (name === "rut") nuevoValor = formatearRut(value.replace(/[^0-9.\-kK]/g, ""));
    if (name === "telefono") {
      let digits = value.replace(/[^0-9]/g, "");

      if (!digits.startsWith("9")) {
        digits = "9" + digits.replace(/^9+/, "");
      }

      digits = digits.slice(0, 9);
      nuevoValor = digits;
    }

    if (name === "monto") {
    let soloNumeros = value.replace(/\D/g, "");

    if (soloNumeros.length > 7) {
        soloNumeros = soloNumeros.slice(0, 7);
      }

    let numero = parseInt(soloNumeros || "0", 10);
    if (numero > 5000000) numero = 5000000;

    const formateado = new Intl.NumberFormat("es-CL").format(numero);
    nuevoValor = formateado;
  }

    if (name === "area") {
      setPrecioTotal(preciosServicios[value] || 0);
    }

    setFormData({ ...formData, [name]: nuevoValor });
  };

  // --- Envío del formulario ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    //const montoLimpio = formData.monto.replace(/\./g, ""); //En caso de necesitar realizar un calculo con el monto usar esto
    const nuevosErrores = {};
    const montoLimpio = formData.monto.replace(/\./g, "");
    const montoIngresado = parseInt(montoLimpio, 10);
    const precioServicio = preciosServicios[formData.area] || 0;

    if (!formData.area) nuevosErrores.area = "Este campo es obligatorio";
    if (!formData.nombre) nuevosErrores.nombre = "Este campo es obligatorio";
    if (!formData.apellido) nuevosErrores.apellido = "Este campo es obligatorio";
    if (!formData.email) nuevosErrores.email = "Este campo es obligatorio";
    if (!formData.rut) nuevosErrores.rut = "Este campo es obligatorio";
    if (!formData.cargo) nuevosErrores.cargo = "Este campo es obligatorio";
    if (!formData.empresa) nuevosErrores.empresa = "Este campo es obligatorio";
    if (!formData.telefono) nuevosErrores.telefono = "Este campo es obligatorio";
    if (!formData.region) nuevosErrores.region = "Este campo es obligatorio";

    if (!validarCorreo(formData.email)) nuevosErrores.email = "Correo inválido";
    if (!validarTelefono(formData.telefono)) nuevosErrores.telefono = "Debe tener 9 números";
    if (!validarDV(formData.rut)) nuevosErrores.rut = "RUT inválido";
    else if (rutBloqueado(formData.rut)) nuevosErrores.rut = "RUT no permitido";


    if (precioServicio > 0) {
      const minimo = precioServicio - 100000;
      const maximo = precioServicio + 100000;

    if (montoIngresado < minimo || montoIngresado > maximo) {
      nuevosErrores.monto = `Error.`;
    }
}

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;


   // === Envio al backend con security ese ===
    const payload = {
      area: formData.area,
      name: formData.nombre,
      lastname: formData.apellido,
      rut: formData.rut,
      mail: formData.email,
      company: formData.empresa,
      charge: formData.cargo,
      phone: formData.telefono,
      region: formData.region,
      total: montoIngresado,
      comment: formData.comentarios,
    };

    try {
      const data = await apiFetch("http://localhost:18080/api/form", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      console.log("Envío exitoso:", data);
      setMensajeExito("Formulario enviado con éxito ✅");

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
        monto: "",
        comentarios: "",
      });
      setPrecioTotal(0);
      setTimeout(() => setMensajeExito(""), 4000);
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error al enviar la cotización. Intenta nuevamente.");
    }
  };

  return (
    <>
    <Navbar />
      <section className="titulo-cot">
        <h2>Formulario de Cotización</h2>
        <section className="barra-dec"></section>
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
            <option value="conectividad">Conectividad - 1.000.000 CLP</option>
            <option value="ciber">Hacking Ético - 2.500.000 CLP</option>
            <option value="phishing">Phishing - 700.000 CLP</option>
            <option value="soluTI">Soluciones TI - 1.500.000 CLP</option>
            <option value="cloud">Cloud - 2.000.000 CLP</option>
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
              placeholder="XX.XXX.XXX-X"
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
              onFocus={() => {
                if (formData.telefono === "") setFormData({ ...formData, telefono: "9" });
              }
            }
              placeholder="Ej: 9XXXXXXXX"
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

          {/* MONTO */}
            <label htmlFor="monto">Monto*</label>
            <input id="monto" type="text" name="monto" value={formData.monto} onChange={handleChange} placeholder="Ej: XXX.XXX" inputMode="numeric" required 
            className={errores.monto ? "input-error-m error-inside-m" : ""} />


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

         <section className="precio-total">
        <h3>Estimacion inicial (Referencial): </h3>
        <p className="monto-total">
          {precioTotal > 0
            ? `${precioTotal.toLocaleString("es-CL")} CLP`
            : "Selecciona un servicio para ver el total"}
        </p>
        <small className="small-cot">*Monto estimado según tipo de servicio seleccionado.</small>
      </section>
      </section>
    <Footer />
    </>
  );
}
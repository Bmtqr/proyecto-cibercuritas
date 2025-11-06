import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cibercuritas - Registro";
  }, []);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
  });

  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let nuevoValor = value;

    if (["nombre", "apellido"].includes(name)) {
      nuevoValor = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    }

    if (name === "telefono") {
      let digits = value.replace(/[^0-9]/g, "");
      if (!digits.startsWith("9")) digits = "9" + digits.replace(/^9+/, "");
      digits = digits.slice(0, 9);
      nuevoValor = digits;
    }

    setFormData({ ...formData, [name]: nuevoValor });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (!formData.nombre) nuevosErrores.nombre = "Campo obligatorio";

    if (!formData.apellido) nuevosErrores.apellido = "Campo obligatorio";

    if (!formData.email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/))
      nuevosErrores.email = "Correo inválido";

    if (formData.telefono.length !== 9)
      nuevosErrores.telefono = "Debe tener 9 dígitos";

    if (formData.password.length < 12)
      nuevosErrores.password = "Mínimo 12 caracteres";

    if (formData.password !== formData.confirmPassword)
      nuevosErrores.confirmPassword = "Las contraseñas no coinciden";

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    // 🟢 JSON que espera tu backend
    const payload = {
      firstname: formData.nombre,
      lastname: formData.apellido,
      username: formData.email, // aquí username = email
      password: formData.password,
      phone: formData.telefono,
    };

    try {
      const response = await fetch("http://127.0.0.1:18080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      // Si el backend devuelve el token
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Token guardado:", data.token);
      }

      setMensajeExito("Registro exitoso. Revisa tu correo o inicia sesión.");
      setTimeout(() => {
        setMensajeExito("");
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("No se pudo completar el registro. Intenta nuevamente.");
    }
  };

  return (
    <main className="main-register">
      <div className="cuadro-register">
        <div className="cuadro-body-register">
          <h2>
            Crear Cuenta<span className="title-underline-register"></span>
          </h2>

          <form onSubmit={handleSubmit} className="register-grid">
            {/* Nombre */}
            <div className="field-register">
              <label htmlFor="nombre">NOMBRE</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              {errores.nombre && <small>{errores.nombre}</small>}
            </div>

            {/* Apellido */}
            <div className="field-register">
              <label htmlFor="apellido">APELLIDO</label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
              {errores.apellido && <small>{errores.apellido}</small>}
            </div>

            {/* Correo */}
            <div className="field-register">
              <label htmlFor="email">CORREO ELECTRÓNICO</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errores.email && <small>{errores.email}</small>}
            </div>

            {/* Teléfono */}
            <div className="field-register">
              <label htmlFor="telefono">TELÉFONO</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="9XXXXXXXX"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
              {errores.telefono && <small>{errores.telefono}</small>}
            </div>

            {/* Contraseña */}
            <div className="field-register contraseña-register">
              <label htmlFor="password">CONTRASEÑA</label>
              <input
                id="password-register"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-contraseña-register"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`fa-solid ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } icon-ojo`}
                ></i>
              </button>
              {errores.password && <small>{errores.password}</small>}
            </div>

            {/* Confirmar contraseña */}
            <div className="field-register contraseña-register">
              <label htmlFor="confirmPassword">CONFIRMAR CONTRASEÑA</label>
              <input
                id="confirmPassword-register"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-contraseña-register"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                <i
                  className={`fa-solid ${
                    showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                  } icon-ojo`}
                ></i>
              </button>
              {errores.confirmPassword && (
                <small>{errores.confirmPassword}</small>
              )}
            </div>

            {/* Botones */}
            <div className="actions-register">
              <button type="submit" className="boton-register boton-login-register">
                Registrarse
              </button>
              <button
                type="button"
                className="boton-register boton-crear-register"
                onClick={() => navigate("/login")}
              >
                Ya tengo cuenta
              </button>
            </div>

            {mensajeExito && <p className="mensaje-exito-register">{mensajeExito}</p>}
          </form>
        </div>
        <section className="copy-register">
          <p>Copyright © 2025 Cibercuritas, Inc. Todos los derechos reservados.</p>
        </section>
      </div>
    </main>
  );
}

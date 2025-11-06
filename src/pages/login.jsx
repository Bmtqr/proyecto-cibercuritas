import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import { validarCorreo, cifrarPassword } from "../utils/cifrado.jsx";
import { BiMessage } from "react-icons/bi";
import { Alert } from "react-bootstrap";


export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
      document.title = "Cibercuritas - Login";
    }, []);

  const uadmin= {
  email: "admin@cibercuritas.cl",
  password: "1234567890987"
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);  //ver - ocultar

  function validarFormulario(e) {
    e.preventDefault();

    if (!validarCorreo(email)) {
      alert("Ingresa un correo válido, por favor");
      return;
    }

    //const hashedPass = cifrarPassword(password);
    //console.log("Hash generado:", hashedPass);

    //alert(`Correo: ${email}\nHash: ${hashedPass}`);


    if (email === uadmin.email && password === uadmin.password) {
      alert("Acceso concedido. Bienvenido a Cibercuritas.");
      navigate('/admin');
      return;
    } 

    //if (email.length >= 1 && password.length >= 8) {
      //alert("Bienvenido usuario.");
      //navigate("/");
      //return;
    //}
     
    
    alert("Credenciales incorrectas. Reintente.");
  
  }



  return (
    <main className="main-login">
    <div className="wrap">
      <div className="cuadro">
        <div className="cuadro-body">
          <h2>
            Inicio de Sesión<span className="title-underline-register"></span>
          </h2>

          <form onSubmit={validarFormulario}>
            <div className="field">
              <label htmlFor="email">CORREO</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="clave">CONTRASEÑA</label>
              <div className="contraseña">
                <input
                  id="clave"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="12"
                />
                <button
                  type="button"
                  className="toggle-contraseña"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} icon-ojo`}></i>
                </button>
              </div>
            </div>

            <div className="links">
              <a>¿Olvidaste tu correo?</a>
              <a>¿Olvidaste tu contraseña?</a>
            </div>

            <div className="actions">
              <button type="submit" className="boton boton-login">
                Acceder
              </button>
              <button type="button" className="boton boton-crear" onClick={() => navigate("/register")}>
              Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
          <section className="copy">
      <p>Copyright © 2025 Cibercuritas, Inc. Todos los derechos reservados.</p>
    </section>
    </div>

    </main>
  );
}
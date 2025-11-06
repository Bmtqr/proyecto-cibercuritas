import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/app.css'
import Navbar from "./utils/navbar.jsx";
import Home from "./pages/home.jsx";
import Nosotros from "./pages/nosotros.jsx";
import Hacking from "./pages/hacking.jsx";
import Phishing from "./pages/phishing.jsx";
import Cotizacion from "./pages/cotizacion.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx"
import Admin from "./pages/admin.jsx"



function App() {
  return (
    <>
      <Navbar />
      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/hacking" element={<Hacking />} />
          <Route path="/phishing" element={<Phishing />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
    </>
  )
}

export default App

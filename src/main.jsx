import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './css/index.css'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Nosotros from './pages/nosotros.jsx'
import Hacking from './pages/hacking.jsx';
import Phishing from './pages/phishing.jsx';
import Cotizacion from './pages/cotizacion.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cotizacion />
  </StrictMode>,
)

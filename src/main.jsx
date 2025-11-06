import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './css/index.css'
import App from './App.jsx'
import Scroll from './utils/scroll.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Scroll />
    <App />
  </BrowserRouter>
  </StrictMode>,
)
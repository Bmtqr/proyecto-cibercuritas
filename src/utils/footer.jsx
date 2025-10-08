import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../css/footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <h5 className="footer-title">Nuestras Redes</h5>

      <div className="footer-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="facebook" size={28} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaXTwitter className="x" size={28} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="instagram" size={28} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin className="linkedin" size={28} />
        </a>
      </div>

      <p className="footer-copy">
        Copyright © 2025 Cibercuritas, Inc. Todos los derechos reservados.
      </p>
    </footer>
  );
}
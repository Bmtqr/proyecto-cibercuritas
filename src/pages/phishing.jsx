import "aos/dist/aos.css";
import { useEffect } from 'react';
import AOS from 'aos';
import "../css/phishing.css";
import Footer from '../utils/footer.jsx';

export default function Phishing() {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      {/* HERO SECTION */}
      <section className="section-ph hero-phishing">
        <div className="hero-title">
          <h1>CAPACITACIONES PROFESIONALES</h1>
          <p>
            Ofrecemos programas de formación diseñados para fortalecer la cultura
            de seguridad digital en tu organización. Nuestras capacitaciones
            abordan temas como phishing, ingeniería social y buenas prácticas
            corporativas para proteger la información.
          </p>
          <a href="#" className="btn">
            CONSULTA POR NUESTROS SERVICIOS
          </a>
        </div>
        <section className="desliza">
          <h5>Desliza</h5>
          <i className="fas fa-chevron-down"></i>
        </section>
      </section>


      <section className="stats-ph">
        <div className="stat-ph" data-aos="fade-up" data-aos-delay="100">
          <h2>+150</h2>
          <p>
            IMPLEMENTACIONES
            <br />
            ANUALES
          </p>
        </div>

        <div className="stat-ph" data-aos="fade-up" data-aos-delay="100">
          <h2>+60</h2>
          <p>
            ESPECIALIZACIÓN EN
            <br />
            TECNOLOGÍAS
          </p>
        </div>

        <div className="stat-ph" data-aos="fade-up" data-aos-delay="100">
          <h2>+45</h2>
          <p>
            USUARIOS CERTIFICADOS
            <br />
            ANUALMENTE
          </p>
        </div>
      </section>
    <Footer />
    </>
  );
}
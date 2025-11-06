import "aos/dist/aos.css";
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import "../css/phishing.css";
import Footer from '../utils/footer.jsx';
import CountUp from 'react-countup';

export default function Phishing() {
    useEffect(() => {
    document.title = "Cibercuritas - Phishing";
  }, []);

  useEffect(() => {
    const handleDeslizaClick = () => {
    const nextSection = document.querySelector(".stats-ph");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const deslizas = document.querySelectorAll(".desliza");
  deslizas.forEach((el) => el.addEventListener("click", handleDeslizaClick));

  return () => {
    deslizas.forEach((el) => el.removeEventListener("click", handleDeslizaClick));
    };
  }, []);

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
          <NavLink to="/cotizacion" className="btn">
            CONSULTA POR NUESTROS SERVICIOS
          </NavLink>
        </div>
        <section className="desliza">
          <h5>Desliza</h5>
          <i className="fas fa-chevron-down"></i>
        </section>
      </section>


      <section className="stats-ph">
        <div className="stat-ph" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-in-out">
          <h2>+150</h2>
          <p>
            IMPLEMENTACIONES
            <br />
            ANUALES
          </p>
        </div>

        <div className="stat-ph" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-in-out">
          <h2>+60</h2>
          <p>
            ESPECIALIZACIÓN EN
            <br />
            TECNOLOGÍAS
          </p>
        </div>

        <div className="stat-ph" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" data-aos-easing="ease-in-out">
          <h2>+45</h2>
          <p>
            USUARIOS CERTIFICADOS
            <br />
            ANUALMENTE
          </p>
        </div>
      </section>
      <section className="separador-ph" data-aos="fade-up" data-aos-delay="100"></section>
      <section className="titulo-phishing" data-aos="fade-up" data-aos-delay="100">
            <h6 className="titulo1-phishing">
              EL ACOMPAÑAMIENTO QUE TU EMPRESA NECESITA
            </h6>
        </section>
        <section className="titulo-h4-phishing" data-aos="fade-up" data-aos-delay="100">
            <h4>
              <strong>Fortalece su red a través de la convergencia de redes y seguridad</strong>
              </h4>
            <p>
              A través de un modelo de servicio respaldado por las mejores prácticas del sector,
              acompañamos a las organizaciones en sus procesos de transformación digital,
              fortaleciendo su infraestructura de seguridad y optimizando la implementación
              de estrategias de ciberdefensa más ágiles, seguras y rentables.
            </p>
        </section>

        <section className="img-texto1-ph" data-aos="fade-up" data-aos-delay="100">
        <img
          src={`${import.meta.env.BASE_URL}img/phishing-texto1.webp`}
          className="itexto1-ph"
          alt="Imagen texto 1"
          data-aos="fade-up" data-aos-delay="100"
        />
        <div className="texto-contenido-ph">
          <h5 data-aos="fade-up" data-aos-delay="100">Haz realidad tus proyectos de ciberseguridad</h5>
          <h4 className="texto2" data-aos="fade-up" data-aos-delay="100">
            <strong>Implementación</strong>
          </h4>

          <p data-aos="fade-up" data-aos-delay="100">
            Porque entendemos que la seguridad no puede esperar,
            en Cibercuritas asumimos la implementación completa de soluciones de ciberseguridad,
            asegurando que cada sistema funcione de forma óptima y esté preparado para proteger
            tu infraestructura desde el primer día.
            Nuestro equipo especializado garantiza una integración fluida y segura, 
            reduciendo vulnerabilidades y maximizando el rendimiento de tus inversiones tecnológicas.
            <br />
            <br />
            <ul class="puntos-ph">
              <li><strong>Inicio inmediato y confiable:</strong> soluciones operativas desde el primer momento.</li>
              <li><strong>Ajuste a medida:</strong> configuraciones adaptadas a las necesidades y tamaño de tu organización.</li>
              <li><strong>Eficiencia garantizada:</strong> optimización de recursos, tiempos y costos bajo supervisión experta.</li>
            </ul>

          </p>
        </div>
      </section>

    <Footer />
    </>
  );
}
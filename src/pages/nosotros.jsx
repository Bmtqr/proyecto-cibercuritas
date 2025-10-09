import { useEffect } from "react";
import "../css/nosotros.css";
import Footer from "../utils/footer.jsx";
import AOS from 'aos';
import "aos/dist/aos.css";


export default function Nosotros() {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  useEffect(() => {
    document.title = "Cibercuritas - Nosotros";
  }, []);
  return (
    <main>
      <section className="foto-nos">
        <div className="foto-nos nos-overlay"></div>
        <h1 className="foto-nos-title">Sobre Nosotros</h1>
        <section className="desliza">
          <h5>Desliza</h5>
          <i className="fas fa-chevron-down"></i>
        </section>
      </section>

      <section className="vms">
        <div className="container">
          <h2 className="titulo-seccion" data-aos="fade-up" data-aos-delay="100">Nuestra Visión, Misión y Propósito</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card" data-aos="fade-up" data-aos-delay="100">
                <h3 data-aos="fade-up" data-aos-delay="100">Visión</h3>
                <p data-aos="fade-up" data-aos-delay="100">
                  Ser líderes en la formación en ciberseguridad, ayudando a
                  empresas a proteger sus activos digitales y a crear un entorno
                  más seguro en línea.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" data-aos="fade-up" data-aos-delay="100">
                <h3 data-aos="fade-up" data-aos-delay="100">Misión</h3>
                <p data-aos="fade-up" data-aos-delay="100">
                  Brindar capacitación y servicios de pentesting a empresas,
                  fortaleciendo su infraestructura de seguridad mediante
                  soluciones prácticas e innovadoras.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" data-aos="fade-up" data-aos-delay="100">
                <h3 data-aos="fade-up" data-aos-delay="100">Propósito</h3>
                <p data-aos="fade-up" data-aos-delay="100">
                  Empoderar a nuestros clientes con los conocimientos y
                  herramientas necesarias para prevenir y mitigar amenazas en el
                  mundo digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="imagen-texto1">
        <img
          src="../img/mihistoria.jpg"
          className="itexto1"
          alt="Imagen texto 1"
          data-aos="fade-up" data-aos-delay="100"
        />

        <div className="texto-contenido">
          <h5 data-aos="fade-up" data-aos-delay="100">Aquí nace</h5>
          <h4 className="texto2" data-aos="fade-up" data-aos-delay="100">
            <strong>Nuestra Historia</strong>
          </h4>

          <p data-aos="fade-up" data-aos-delay="100">
            Cibercuritas nació con la convicción de que la seguridad digital debe ser un
            pilar accesible, humano y confiable para todas las organizaciones. Surgimos
            en un contexto donde las amenazas evolucionan a diario y las empresas se
            enfrentan al desafío de proteger sus datos, su reputación y la confianza de
            sus clientes.
            <br />
            <br />
            Hoy, seguimos avanzando con la misma misión que nos vio nacer: construir un
            entorno digital más seguro, donde la tecnología sea un motor de confianza y
            no una fuente de riesgo. Porque para nosotros, la seguridad no es un producto,
            es una cultura.
          </p>
          <a href="#" className="btn-cta" data-aos="fade-up" data-aos-delay="100">
            Descubre más
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
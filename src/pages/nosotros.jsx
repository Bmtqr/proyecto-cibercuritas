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
    const handleDeslizaClick = () => {
    const nextSection = document.querySelector(".vms");
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


      <section className="imagen-texto1" data-aos="fade-up" data-aos-delay="100">
        <img
          src={`${import.meta.env.BASE_URL}img/mihistoria.jpg`}
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
        </div>
      </section>
      <section className="separador-nosotros" data-aos="fade-up" data-aos-delay="100">
        </section>
        
      <section className="nosotros-info2" data-aos="fade-up" data-aos-delay="100">
          <h4 className="texto-info2">
            <strong>Innovación y excelencia en ciberseguridad</strong>
          </h4>
          <p className="parrafo-info2">
            En Cibercuritas, combinamos innovación tecnológica y experiencia humana
            para ofrecer soluciones de ciberseguridad que protegen lo más valioso de tu organización:
            su información, su reputación y su futuro digital.
            Nuestro enfoque integral nos permite anticipar amenazas, fortalecer infraestructuras críticas
            y garantizar la continuidad de tus operaciones en un entorno
            cada vez más conectadoy desafiante.
            </p>
        </section>
        <section className="nosotros-info3" data-aos="fade-up" data-aos-delay="100">
          <h4 className="texto-info3">
            <strong>Más que solo innovación tecnológica</strong>
            </h4>
          <p className="parrafo-info3" data-aos="fade-up" data-aos-delay="100">
            Creemos que la ciberseguridad va más allá de la tecnología: es un compromiso con un mundo digital más seguro, ético y sostenible.
            Por eso, además de innovar en soluciones de protección y redes inteligentes, trabajamos para reducir el impacto ambiental de nuestras operaciones, impulsar la formación de nuevos talentos en ciberseguridad y fomentar la colaboración entre empresas, instituciones y comunidades.
            <br></br><br></br>Nuestra misión es proteger el presente mientras construimos un futuro digital más confiable, inclusivo y resiliente para todos.
            </p>
        </section>
        <section className="nosotros-info4" data-aos="fade-up" data-aos-delay="100">
          <h4 className="texto-info4">
            <strong>Liderazgo de la industria y crecimiento estable</strong>
          </h4>
          <p className="parrafo-info4" data-aos="fade-up" data-aos-delay="100">
            Cibercuritas está liderada por un equipo de especialistas con amplia experiencia
            en seguridad informática, gestión de riesgos y transformación digital.
            Nuestra dirección combina una visión estratégica con un profundo compromiso por fortalecer
            la ciberresiliencia de las organizaciones en América Latina y el mundo.
            <br></br><br></br>Contamos con un consejo asesor multidisciplinario que aporta perspectiva global
            y orientación técnica frente a los desafíos más críticos de la ciberseguridad actual.
            Gracias a esta estructura, Cibercuritas consolida su posición como referente en innovación,
            confianza y excelencia operativa dentro del sector tecnológico.
          </p>
          </section>
            
      <Footer />
    </main>
  );
}
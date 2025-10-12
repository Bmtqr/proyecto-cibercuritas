import { useEffect } from "react";
import Footer from "../utils/footer.jsx";
import "../css/hacking.css";
import AOS from 'aos';
import "aos/dist/aos.css";


export default function Hacking() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);

    useEffect(() => {
    const handleDeslizaClick = () => {
    const nextSection = document.querySelector(".titulo-info-h2");
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
    document.title = "Cibercuritas - Inicio";
  }, []);

    useEffect(() => {
    document.title = "Cibercuritas - Hacking Etico";
  }, []);
  return (
<main className="main-hacking">
    <section className="hero-hacking">
    <div className="hero-h-over"></div>
    <h1 class="hero-h-title">Hacking Ético</h1>
        <section className="desliza">
            <h5>Desliza</h5>
            <i className="fas fa-chevron-down"></i>
        </section>
    </section>

    <section className="titulo-info-h2">
    <article className="texto-info">
        <div className="texto-info-cuerpo">
        <h2 data-aos="fade-up" data-aos-delay="100">Descubrir las debilidades antes que los malos</h2>
        <p data-aos="fade-up" data-aos-delay="100">
            Identificamos y corregimos las vulnerabilidades antes de que puedan ser explotadas, garantizando que tu infraestructura esté siempre un paso por delante de los atacantes.
        </p>
        </div>
    </article>
    </section>

    <section className="icon-features">
    <div className="icon-feature">
        <i className="fas fa-lock" data-aos="fade-up" data-aos-delay></i>
        <h3 data-aos="fade-up" data-aos-delay="100">Seguridad</h3>
        <p data-aos="fade-up" data-aos-delay="100">Protegemos tus sistemas frente a amenazas y accesos no autorizados.</p>
    </div>

    <div className="icon-feature">
        <i className="fas fa-user-secret" data-aos="fade-up" data-aos-delay></i>
        <h3 data-aos="fade-up" data-aos-delay="100">Detección</h3>
        <p data-aos="fade-up" data-aos-delay="100">Identificamos vulnerabilidades antes de que sean explotadas.</p>
    </div>

    <div className="icon-feature">
        <i className="fas fa-laptop-code" data-aos="fade-up" data-aos-delay></i>
        <h3 data-aos="fade-up" data-aos-delay="100">Tecnología</h3>
        <p data-aos="fade-up" data-aos-delay="100">Aplicamos las últimas herramientas para fortalecer tu infraestructura.</p>
    </div>
    </section>

    <section className="msg-dark">
    <h2 className="msg-titulo" data-aos="fade-up" data-aos-delay="100">¿Qué es el hacking ético?</h2>
    <p className="msg-texto" data-aos="fade-up" data-aos-delay="100">
        El hacking ético es una práctica autorizada que consiste en evaluar la seguridad de sistemas, redes y aplicaciones mediante pruebas controladas. Su objetivo es identificar vulnerabilidades antes de que puedan ser aprovechadas por atacantes maliciosos, ayudando a fortalecer la infraestructura tecnológica y proteger la información crítica de una organización.
    </p>
    </section>

    <section className="hacking-enfoques">
    <h2 data-aos="fade-up" data-aos-delay="100">3 ENFOQUES DE HACKING</h2>
    <p className="hacking-subtitle" data-aos="fade-up" data-aos-delay="100">
        Estos enfoques describen el nivel de información y acceso que tendremos al sistema que estamos evaluando.
    </p>

    <div className="hacking-grid">
        <div className="enfoque">
        <h3 data-aos="fade-up" data-aos-delay="100">CAJA BLANCA</h3>
        <p data-aos="fade-up" data-aos-delay="100">
            Este enfoque se realiza con acceso total a la información del sistema, incluyendo código fuente y configuraciones.
            Permite un análisis profundo para detectar fallos de lógica, errores de programación y debilidades internas antes de salir a producción.
        </p>
        </div>

        <div className="enfoque">
        <h3 data-aos="fade-up" data-aos-delay="100">CAJA GRIS</h3>
        <p data-aos="fade-up" data-aos-delay="100">
            Combina lo mejor de los enfoques de caja blanca y negra, contando con información parcial sobre la infraestructura.
            Simula ataques con conocimiento limitado, ideal para evaluar tanto la seguridad interna como la externa con mayor realismo.
        </p>
        </div>

        <div className="enfoque">
        <h3 data-aos="fade-up" data-aos-delay="100">CAJA NEGRA</h3>
        <p data-aos="fade-up" data-aos-delay="100">
            En este tipo de prueba el auditor no tiene información previa del sistema, imitando la perspectiva de un atacante real.
            Se enfoca en descubrir vulnerabilidades expuestas públicamente y medir la capacidad de respuesta ante ataques externos.
        </p>
        </div>
    </div>
    </section>
    <Footer />
    </main>
  );  
}
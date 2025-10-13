import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../utils/footer.jsx";
import Carousel from 'react-bootstrap/Carousel';
import "../css/card.css";
import Card from "../utils/card.jsx";
import "../css/carousel.css";
import "../css/imgtexto1.css"
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from "../utils/navbar.jsx";
import Noticias from "./noticias.jsx";
import "../css/home.css"
import { NavLink } from "react-router-dom";

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);

    useEffect(() => {
    const handleDeslizaClick = () => {
    const nextSection = document.querySelector(".titulo1");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const desliza = document.querySelectorAll(".desliza");
  desliza.forEach((el) => el.addEventListener("click", handleDeslizaClick));

  return () => {
    desliza.forEach((el) => el.removeEventListener("click", handleDeslizaClick));
    };
  }, []);

    useEffect(() => {
    document.title = "Cibercuritas - Inicio";
  }, []);
  return (
    <>
    <Navbar />
    <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={`${import.meta.env.BASE_URL}img/carousel-1.jpg`}
                alt="Slide 1"
                />
                <Carousel.Caption>
                <h3>Seguridad 24/7</h3>
                <p>Monitoreo continuo y respuesta a incidentes.</p>
                <section className="desliza">
                <h5>Desliza</h5>
                <i className="fas fa-chevron-down"></i>
                </section>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={`${import.meta.env.BASE_URL}img/carousel-2.jpg`}
                alt="Slide 2"
                />
                <Carousel.Caption>
                <h3>Protección contra Phishing</h3>
                <p>Identifica y bloquea intentos de suplantación.</p>
                <section className="desliza">
                <h5>Desliza</h5>
                <i className="fas fa-chevron-down"></i>
                </section>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={`${import.meta.env.BASE_URL}img/carousel-3.png`}
                alt="Slide 3"
                />
                <Carousel.Caption>
                <h3>Concientización</h3>
                <p>Capacitaciones para tu equipo.</p>
                <section className="desliza">
                <h5>Desliza</h5>
                <i className="fas fa-chevron-down"></i>
                </section>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <section>
            <h6 className="titulo1" data-aos="fade-up" data-aos-delay="100">INTEGRACION Y AUTOMATIZACIÓN</h6>
        </section>
        <section className="titulo-h1" data-aos="fade-up" data-aos-delay="100">
            <h1>Fortalece su red a través de la convergencia de redes y seguridad</h1>
        </section>

        <section className="cards" data-aos="fade-up" data-aos-delay="100">
            <Card className="card1"
            frontClass="front1"
            backClass="back1"
            title="Redes Seguras"
            subtitle="Redes Seguras"
            description="Convergencia de seguridad y redes en todos los bordes, usuarios y dispositivos"
            items={[
                "NGFW", "Swiching", "LAN Inalambrica", "5G",
                "NAC", "Servicios de seguridad basados en IA", "Gestión unificada"
            ]}
            />
    
            <Card className="card2"
            frontClass="front2"
            backClass="back2"
            title="SASE Unificado"
            subtitle="SASE Unificado"
            description="Acceso seguro para su fuerza laboral híbrida y protección para redes, aplicaciones y datos en cualquier nube"
            items={[
                "Zero Trust Network Access",
                "Secure Web Gateway",
                "Firewall-as-a-Service",
                "Cloud Access Security Broker"
            ]}
            />
    
            <Card className="card3"
            frontClass="front3"
            backClass="back3"
            title="Operaciones de Seguridad"
            subtitle="Operaciones de Seguridad"
            description="La plataforma de operaciones de seguridad consolidada acelera el tiempo para detectar y responder ante amenazas."
            items={[
                "Plataforma SOC",
                "SIEM",
                "SOAR",
                "EDR"
            ]}
            />
    
            <Card className="card4"
            frontClass="front4"
            backClass="back4"
            title="Consultoria Especializada"
            subtitle="Consultoria Especializada"
            description="Ayudamos a su organización a evaluar, diseñar y fortalecer su estrategia de ciberseguridad."
            items={[
                "Análisis-de-Riesgos",
                "Auditorías-de-Seguridad",
                "Asesoría-en-Ciberresiliencia"
            ]}
            />
        </section>
        <section className="imagen-texto1" data-aos="fade-up" data-aos-delay="100">
            <img
                src={`${import.meta.env.BASE_URL}img/texto1.jpg`}
                className="itexto1"
                alt="Imagen texto 1"
                data-aos="fade-up" data-aos-delay="100"
            />

            <div className="texto-contenido">
                <h5 data-aos="fade-up" data-aos-delay="100">Un enfoque diferente</h5>
                <h4 className="texto2" data-aos="fade-up" data-aos-delay="100">
                <strong>FORTALECE LA CIBER RESILIENCIA DE TU EMPRESA</strong>
                </h4>

                <p data-aos="fade-up" data-aos-delay="100">
                    En un entorno digital en constante evolución, fortalecer la ciberresiliencia significa preparar a tu empresa para resistir, adaptarse y recuperarse ante cualquier amenaza.
                    A través de estrategias integrales de prevención, detección y respuesta, ayudamos a proteger tus activos, mantener la continuidad operativa y garantizar la confianza digital de tus clientes.
                </p>

                <NavLink to="/cotizacion" className="btn-cta" data-aos="fade-up" data-aos-delay="100">
                    Descubre más
                </NavLink>
            </div>
        </section>
    <Noticias />
    <Footer />
    </>
    );
}
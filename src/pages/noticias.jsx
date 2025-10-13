import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/noticias.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const API_KEY = "73c19c46e1e34fd39381811c8d6e3b11";
    const API_URL = `https://newsapi.org/v2/everything?q=cybersecurity OR hacking&language=es&sortBy=publishedAt&apiKey=${API_KEY}`;
    const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(API_URL)}`;


    fetch(PROXY_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener las noticias");
        return res.json();
      })
      .then((data) => {
      const parsed = JSON.parse(data.contents);
        setNoticias(parsed.articles || []);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p className="cargando-not">Cargando noticias...</p>;
  if (error) return <p className="error-not">Error al cargar noticia (reinicia la pagina)</p>;

    const slidesToShow = isMobile ? 1 : 4;


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: !isMobile,
    swipe: true,
    responsive: [
      {
      breakpoint: 1200,
      settings: { slidesToShow: 3 },
        },
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const siguiente = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const anterior = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };


  return (
    <section className="noticias-section" data-aos="fade-up" data-aos-delay="100">
      <h2>Últimas noticias de Ciberseguridad</h2>
      <Slider ref={sliderRef} {...settings}>
        {noticias.map((n, i) => (
          <div key={i} className="noticia-card">
            {<img
  src={n.urlToImage || `${import.meta.env.BASE_URL}errorimg-noticias.jpg`}
  alt={n.title || "Noticia de ciberseguridad"}
  onError={(e) => {
    e.target.onerror = null; // evita bucles infinitos
    e.target.src = `${import.meta.env.BASE_URL}errorimg-noticias.jpg`;
  }}
/>}

            <h3>{n.title}</h3>
            <p>{n.description}</p>
            <a href={n.url} target="_blank" rel="noopener noreferrer">
              Leer más →
            </a>
          </div>
        ))}
      </Slider>
        {!isMobile && (
                <>
                <div className="noticias-flecha izquierda" onClick={anterior}>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className="noticias-flecha derecha" onClick={siguiente}>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                </>
            )}
    </section>
  );
}
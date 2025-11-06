import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Admin () {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        document.title = "Cibercuritas - Panel de Control";
    }, []);

    return (
        <>
        <section className="section-admin">
            <h1 className="title-h1"> Panel De Control </h1>
        </section>

        <section className="">
            
        </section>
        </>
    )
}
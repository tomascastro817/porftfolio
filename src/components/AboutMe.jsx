import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el CSS de AOS
import Foto from '../images/cv.jpg'
const AboutMe = () => {
  // Inicializar AOS cuando el componente se monte
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      once: true, // Ejecutar la animación solo una vez
      easing: 'ease-out', // Tipo de transición
    });
  }, []);

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up" 
        >
          Sobre mi
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          <div
            className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-blue-400 shadow-md mb-8 md:mb-0 md:mr-10"
            data-aos="fade-right" // AOS para la imagen
          >
            <img
              src= {Foto}
              alt="Your Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Me Text */}
          <div className="flex-1 text-gray-800 space-y-6 md:space-y-4">
            <p
              className="text-xl md:text-2xl leading-relaxed text-gray-600"
              data-aos="fade-up" // AOS para el texto
            >
              Hola! Soy <span className="font-semibold text-gray-900">Tomas Castro</span>, un desarrollador full-stack apasionado por crear experiencias digitales atractivas y fáciles de usar. Intento combinar la estética con la funcionalidad en cada proyecto.
            </p>
            <p
              className="text-xl md:text-2xl leading-relaxed text-gray-600"
              data-aos="fade-up" // AOS para el segundo párrafo
              data-aos-delay="200" // Retraso para que aparezca después del primero
            >
              Con experiencia en frameworks de JavaScript modernos como React, Tailwind CSS y Node.js, perfecciono constantemente mis habilidades para mantenerme actualizado y dar vida a ideas innovadoras.
            </p>
            <div className="mt-4 flex justify-center md:justify-start" data-aos="fade-up" data-aos-delay="400">
            <a
              href="/Facundo-Tomás-Castro-CV.pdf" // Ruta desde la raíz del servidor
              download="Facundo-Tomás-Castro-CV.pdf"
              className="inline-block bg-blue-400 text-white font-semibold mt-8 py-2 px-6 rounded-full shadow hover:bg-blue-500 transition duration-200"
            >
              Descargar CV
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Asegúrate de importar el CSS de AOS

const Hero = () => {
  // Inicializar AOS cuando el componente se monte 
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      once: true, // Ejecutar la animación solo una vez
      easing: 'ease-out', // Tipo de transición
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b text-gray-900 overflow-hidden"
    >
      {/* Animated Network Nodes */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <svg className="w-full h-full opacity-30 animate-network" xmlns="http://www.w3.org/2000/svg">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + '%'}
              cy={Math.random() * 100 + '%'}
              r="3"
              fill="#4a90e2" // Light blue color
              className="animate-pulse"
              style={{ animationDelay: `${Math.random() * 5}s`, animationDuration: '5s' }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 100 + '%'}
              y1={Math.random() * 100 + '%'}
              x2={Math.random() * 100 + '%'}
              y2={Math.random() * 100 + '%'}
              stroke="#d1d5db" // Light gray color
              strokeWidth="0.5"
              opacity="0.6"
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-2xl">
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          data-aos="fade-up" // AOS animation for fade-up
        >
          Hola, soy <span className="text-blue-500">Tomas Castro</span>.
        </h1>
        <p
          className="text-md md:text-2xl text-gray-700 mb-8"
          data-aos="fade-up" // AOS animation for fade-up
          data-aos-delay="200" // Delay to appear after the title
        >
          Desarrollador Fullstack, Tecnico Universitario en Programacion.
        </p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          data-aos="fade-up" // AOS animation for fade-up
          data-aos-delay="400" // Delay to appear after the description
        >
          Ver Proyectos
        </a>
      </div>

      {/* CSS for network animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            r: 3;
          }
          50% {
            opacity: 1;
            r: 5;
          }
        }
        .animate-network circle {
          animation: pulse infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

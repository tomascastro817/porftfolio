import React, { useEffect } from 'react';
import PagFac from '../images/Captura de pantalla 2024-11-11 111525.png';
import Depox from '../images/depox.png'
import Depox_panel from '../images/depox-panel.png'
import Lavalle from '../images/lavalle.png'
import Lavalle_expediente from '../images/lavalle-expedientes.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

const projects = [
  {
    title: 'Depox',
    description: 'Aplicación web para gestionar ventas por delivery, diseñada para ofrecer una experiencia rápida y sencilla tanto para usuarios como administradores.',
    image: Depox,
    liveLink: 'https://depox.netlify.app/',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySql'],
},
{
    title: 'Depox Panel',
    description: 'Panel de administración para la gestión eficiente de productos, pedidos y usuarios en la aplicación Depox. Diseñado con una interfaz moderna y funcional.',
    image: Depox_panel,
    liveLink: 'https://depox-panel.netlify.app/',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySql'],
},
{
    title: 'Página UTN Anexo Concepción',
    description: 'Sitio web informativo para la Universidad Tecnológica Nacional, Facultad Regional Tucumán, Anexo Concepción. Proporciona información clave para estudiantes y visitantes.',
    image: PagFac,
    liveLink: 'https://utn-frt-anexoconcepcion.netlify.app/',
    technologies: ['React', 'Tailwind CSS'],
},
{
    title: 'Landing Page Centro Médico Lavalle',
    description: 'Landing page informativa para destacar los servicios del Centro Médico Lavalle, incluyendo funcionalidades para agendar turnos en línea de manera sencilla.',
    image: Lavalle,
    liveLink: 'https://centromedicolavalle.netlify.app/',
    technologies: ['React', 'Tailwind CSS'],
},
{
    title: 'Aplicación Web Centro Médico Lavalle',
    description: 'Aplicación web para la gestión de pacientes y expedientes médicos, diseñada para optimizar los procesos administrativos del Centro Médico Lavalle.',
    image: Lavalle_expediente,
    liveLink: 'https://centro-medico-lavalle.netlify.app/',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySql'],
},
  
  // Agrega más proyectos aquí
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out' }); // Configuración de AOS
  }, []);

  return (
    <section id="projects" className="py-20 ">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        <p className="text-center text-2xl md:text-4xl text-gray-600 mb-4">Mis Proyectos</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8 leading-tight">
          Proyectos que reflejan mi experiencia y conocimientos
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 mx-auto max-w-4xl">
          Cada uno de los siguientes proyectos fue creado con pasión y dedicación. Haz clic en el enlace para ver el proyecto en acción.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Tecnologías */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`inline-block text-sm font-medium py-2 px-4 rounded-full uppercase shadow ${
                        tech === 'React'
                          ? 'bg-blue-200 text-blue-800'
                          : tech === 'Node.js'
                          ? 'bg-green-200 text-green-800'
                          : tech === 'Tailwind CSS'
                          ? 'bg-teal-200 text-teal-800'
                          : tech === 'MySql'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex justify-center items-center mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
                  >
                    Ver Proyecto
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Projects;

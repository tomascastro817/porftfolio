import React, { useEffect } from 'react';
import PagFac from '../images/Captura de pantalla 2024-11-11 111525.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

const projects = [
  {
    title: 'Pagina UTN anexo Concepcion',
    description: 'Página informativa para la Universidad Tecnológica Nacional Facultad Regional Tucumán, anexo Concepción.',
    image: PagFac, // Cambia la ruta por la imagen de tu proyecto
    liveLink: 'https://liveproject1.com',
    codeLink: 'https://github.com/usuario/proyecto1',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Proyecto 2',
    description: 'Breve descripción del proyecto 2, una plataforma para gestionar ABC.',
    image: '/path/to/image2.jpg',
    liveLink: 'https://liveproject2.com',
    codeLink: 'https://github.com/usuario/proyecto2',
    technologies: ['Vue.js', 'Firebase', 'CSS'],
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
        <p className="text-center text-2xl md:text-4xl text-gray-500 mb-4">Mis Proyectos</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8 leading-tight">
          Proyectos que reflejan mi experiencia y conocimientos
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 mx-auto max-w-4xl">
          Cada uno de los siguientes proyectos fue creado con pasión y dedicación. Haz clic en los enlaces para ver más detalles, explorar el código o ver el proyecto en acción.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              data-aos="fade-up" // Efecto AOS para las tarjetas
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
                      className={`inline-block text-sm font-medium py-2 px-6 rounded-full uppercase ${
                        tech === 'React'
                          ? 'bg-blue-400 text-white'
                          : tech === 'Node.js'
                          ? 'bg-green-600 text-white'
                          : tech === 'Tailwind CSS'
                          ? 'bg-teal-300 text-white'
                          : 'bg-gray-800 text-white'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
                  >
                    Ver Proyecto
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-200"
                  >
                    Código
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

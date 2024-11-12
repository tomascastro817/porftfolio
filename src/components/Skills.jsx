import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiMysql, SiExpress, SiTailwindcss } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-400 hover:scale-150" />, description: 'Librería de JavaScript para construir interfaces de usuario' },
  { name: 'MySQL', icon: <SiMysql size={40} className="text-blue-700 hover:scale-150" />, description: 'Sistema de gestión de bases de datos relacionales' },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500 hover:scale-150" />, description: 'Entorno de ejecución de JavaScript para el backend' },
  { name: 'Express', icon: <SiExpress size={40} className="text-gray-700 hover:scale-150" />, description: 'Framework para aplicaciones web en Node.js' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-400 hover:scale-150" />, description: 'Framework de CSS para diseño rápido y personalizado' },
  { name: 'HTML', icon: <FaHtml5 size={40} className="text-orange-600 hover:scale-150" />, description: 'Lenguaje de marcado para crear páginas web' },
  { name: 'CSS', icon: <FaCss3Alt size={40} className="text-blue-600 hover:scale-150" />, description: 'Lenguaje de estilo para diseñar la apariencia de las páginas web' },
  { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-yellow-500 hover:scale-150" />, description: 'Lenguaje de programación para el desarrollo web interactivo' },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (index) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          Skills
        </h2>

        
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 text-center mb-12">
          Estas son las tecnologías con las que trabajo a diario para desarrollar soluciones modernas y eficientes. 
          Cada habilidad representa una parte esencial de mi flujo de trabajo, desde la creación de interfaces hasta la gestión de bases de datos.
        </p>


        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:bg-blue-200 hover:text-white hover:rotate-3 cursor-pointer"
              onClick={() => handleSkillClick(index)}
            >
              <div className="mb-4 text-5xl">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              {activeSkill === index && (
                <p className="mt-4 text-sm text-gray-600">{skill.description}</p>
              )}
            </div>
          ))}
        </div>

        
        <p data-aos="fade-up" data-aos-delay="600" className="text-lg text-gray-500 italic text-center mt-8">
          "El buen software no solo funciona, también es fácil de usar y entender." — Un principio que siempre aplico en mis proyectos.
        </p>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react'
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Redes = () => {
  return (
    <div>
        {/* Social Media Icons */}
        <div className="fixed z-50 lg:left-4 lg:top-1/2 lg:transform lg:-translate-y-1/2 bg-white bg-opacity-80 shadow-lg rounded-xl p-4 flex lg:flex-col items-center space-y-0 lg:space-y-6 space-x-4 lg:space-x-0 bottom-4 lg:bottom-auto w-full lg:w-auto justify-center lg:justify-start">
            <a
                href="https://www.linkedin.com/in/facundo-tomas-castro-588339249/"
                target='blank'
                className="text-gray-700 hover:text-blue-500 transform transition-transform duration-300 hover:scale-125 lg:hover:scale-150"
                style={{ transformOrigin: 'center' }}
            >
                <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </a> 
            <a
                href="https://wa.me/543863512795"
                target='blank'
                className="text-gray-700 hover:text-green-500 transform transition-transform duration-300 hover:scale-125 lg:hover:scale-150"
                style={{ transformOrigin: 'center' }}
            >
                <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </a>  
            <a
                href="https://github.com/tomascastro817"
                target='blank'
                className="text-gray-700 hover:text-gray-800 transform transition-transform duration-300 hover:scale-125 lg:hover:scale-150"
                style={{ transformOrigin: 'center' }}
            >
                <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </a>
        </div>
    </div>
  )
}

export default Redes
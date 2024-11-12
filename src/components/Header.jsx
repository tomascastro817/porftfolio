import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-white shadow-md ">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZ1Ztq0GhN8dVQS56ar_xQgRDztsmZemNxQ&s" alt="Your Logo" className="w-16 h-16 rounded-full" />
          <span className="font-bold">TOMAS CASTRO</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-blue-500 hover:text-blue-600 focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 w-full z-10">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-black" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="text-gray-700 hover:text-black" onClick={toggleMobileMenu}>About</a>
            <a href="#projects" className="text-gray-700 hover:text-black" onClick={toggleMobileMenu}>Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-black" onClick={toggleMobileMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

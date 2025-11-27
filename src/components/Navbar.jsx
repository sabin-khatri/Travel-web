/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NavScrollLink = ({ to, label, onClick }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    onClick={onClick}
    className="relative cursor-pointer text-slate-700 transition-colors duration-300 hover:text-orange-500
               after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full
               after:bg-orange-500 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:hover:scale-x-100"
  >
    {label}
  </ScrollLink>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'features', label: 'Features' },
    { to: 'destination', label: 'Destination' },
    { to: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || !isHomePage ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
  
        <RouterLink to="/" onClick={closeMenu}>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Travel<span className="text-orange-500">App</span>
          </h1>
        </RouterLink>

      
        <div className="hidden lg:flex items-center gap-8">
          {isHomePage &&
            navItems.map((item) => (
              <NavScrollLink key={item.to} to={item.to} label={item.label} />
            ))}
        </div>

      
        <div className="hidden lg:flex items-center gap-4">
          <RouterLink
            to="/register"
            className="font-semibold text-slate-700 px-5 py-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            Register
          </RouterLink>
          <RouterLink
            to="/login"
            className="font-semibold text-white bg-orange-500 px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-orange-600"
          >
            Login
          </RouterLink>
        </div>

        
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </nav>


      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 p-8">
          {isHomePage &&
            navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="text-xl font-semibold text-slate-800"
              >
                {item.label}
              </ScrollLink>
            ))}
          <div className="flex flex-col items-center gap-4 mt-4 w-full border-t border-slate-200 pt-6">
            <RouterLink
              to="/register"
              onClick={closeMenu}
              className="w-full text-center font-semibold text-slate-700 px-5 py-3 rounded-full bg-slate-100"
            >
              Register
            </RouterLink>
            <RouterLink
              to="/login"
              onClick={closeMenu}
              className="w-full text-center font-semibold text-white bg-orange-500 px-5 py-3 rounded-full"
            >
              Login
            </RouterLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaPlaneDeparture } from 'react-icons/fa'; // Added a logo icon

const NavScrollLink = ({ to, label, onClick }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    offset={-70}
    onClick={onClick}
    activeClass="text-orange-500 font-bold after:scale-x-100"
    className="relative group cursor-pointer text-slate-600 font-medium transition-all duration-300 hover:text-orange-500 text-[15px] tracking-wide"
  >
    {label}
    {/* Animated Underline */}
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-slate-100'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        
        {/* --- Logo --- */}
        <RouterLink to="/" onClick={closeMenu} className="group flex items-center gap-2 z-50">
          <div className="bg-gradient-to-tr from-orange-500 to-amber-500 text-white p-2 rounded-lg shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
            <FaPlaneDeparture size={20} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Travel<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">App</span>
          </h1>
        </RouterLink>

        {/* --- Desktop Menu --- */}
        <div className="hidden lg:flex items-center gap-10 bg-white/50 px-8 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/40">
          {isHomePage ? (
            navItems.map((item) => (
              <NavScrollLink key={item.to} to={item.to} label={item.label} />
            ))
          ) : (
            <RouterLink to="/" className="text-slate-600 hover:text-orange-500 font-medium">
              Back to Home
            </RouterLink>
          )}
        </div>

        {/* --- Desktop Buttons --- */}
        <div className="hidden lg:flex items-center gap-4">
          <RouterLink
            to="/register"
            className="font-semibold text-slate-600 hover:text-orange-500 transition-colors"
          >
            Register
          </RouterLink>
          <RouterLink
            to="/login"
            className="relative overflow-hidden font-semibold text-white bg-slate-900 px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
            <span className="relative z-10 flex items-center gap-2">
              Login
            </span>
          </RouterLink>
        </div>

        {/* --- Mobile Toggle (Hamburger) --- */}
        <div className="lg:hidden z-50">
          <button 
            onClick={toggleMenu} 
            className="relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none group"
            aria-label="Toggle Menu"
          >
             <span className={`block h-[3px] w-7 bg-slate-800 rounded-full transition-all duration-300 ease-out origin-center ${isMenuOpen ? 'rotate-45 translate-y-1.5 bg-orange-500' : '-translate-y-1'}`} />
             <span className={`block h-[3px] w-7 bg-slate-800 rounded-full transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
             <span className={`block h-[3px] w-7 bg-slate-800 rounded-full transition-all duration-300 ease-out origin-center ${isMenuOpen ? '-rotate-45 -translate-y-1.5 bg-orange-500' : 'translate-y-1'}`} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Overlay Menu --- */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
        }`}
      >
        {/* Decorative Background Blob */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="flex flex-col items-center gap-8 relative z-10">
          {isHomePage &&
            navItems.map((item, index) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                // Staggered animation effect using inline styles based on index
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`text-3xl font-bold text-slate-800 hover:text-orange-500 transition-all duration-500 transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {item.label}
              </ScrollLink>
            ))}

          <div 
            className={`flex flex-col items-center gap-4 mt-8 w-64 transition-all duration-700 delay-500 ${
               isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <RouterLink
              to="/login"
              onClick={closeMenu}
              className="w-full text-center font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 rounded-full shadow-lg shadow-orange-500/30 active:scale-95 transition-transform"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/register"
              onClick={closeMenu}
              className="w-full text-center font-bold text-slate-700 bg-slate-100 px-6 py-4 rounded-full hover:bg-slate-200 transition-colors"
            >
              Create Account
            </RouterLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
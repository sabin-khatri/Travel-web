/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaPlaneDeparture } from 'react-icons/fa';

// Desktop Link Component
const DesktopNavLink = ({ to, label }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    offset={-70}
    activeClass="text-orange-500 font-bold"
    className="cursor-pointer text-slate-600 hover:text-orange-500 font-medium text-[15px] transition-all hover:-translate-y-0.5"
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-slate-100'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-6 lg:px-12 relative z-50">
          
          {/* --- Logo --- */}
          <RouterLink to="/" onClick={closeMenu} className="group flex items-center gap-2 relative z-50">
            <div className="bg-gradient-to-tr from-orange-500 to-amber-500 text-white p-2 rounded-lg shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              <FaPlaneDeparture size={20} />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              Travel<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">App</span>
            </h1>
          </RouterLink>

          {/* --- Desktop Menu --- */}
          <div className="hidden lg:flex items-center gap-8 bg-white/50 px-8 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/40">
            {isHomePage ? (
              navItems.map((item) => (
                <DesktopNavLink key={item.to} to={item.to} label={item.label} />
              ))
            ) : (
              <RouterLink to="/" className="text-slate-600 hover:text-orange-500 font-medium">
                Back to Home
              </RouterLink>
            )}
          </div>

          {/* --- Desktop Buttons --- */}
          <div className="hidden lg:flex items-center gap-4">
            <RouterLink to="/register" className="font-semibold text-slate-600 hover:text-orange-500 transition-colors">
              Register
            </RouterLink>
            <RouterLink
              to="/login"
              className="relative overflow-hidden font-semibold text-white bg-slate-900 px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              <span className="relative z-10">Login</span>
            </RouterLink>
          </div>

          {/* --- Hamburger Button --- */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden relative z-50 w-12 h-12 flex flex-col justify-center items-center rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
          >
             {/* Top Line */}
             <span className={`block h-[2.5px] w-6 bg-slate-800 rounded-full transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'}`} />
             {/* Bottom Line */}
             <span className={`block h-[2.5px] w-6 bg-slate-800 rounded-full transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-1'}`} />
          </button>
        </nav>
      </header>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <div 
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isMenuOpen ? 'opacity-100 visible clip-circle-full' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

        <div className="flex flex-col items-center gap-6 relative z-10 w-full px-6">
          {isHomePage && navItems.map((item, index) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className={`text-4xl font-bold text-slate-800 hover:text-orange-500 transition-all duration-500 cursor-pointer ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Stagger Effect
            >
              {item.label}
            </ScrollLink>
          ))}

          {!isHomePage && (
             <RouterLink
              to="/"
              onClick={closeMenu}
              className={`text-3xl font-bold text-slate-800 hover:text-orange-500 transition-all duration-500 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
             >
               Back to Home
             </RouterLink>
          )}

          {/* Separator Line */}
          <div className={`w-16 h-1 bg-slate-200 rounded-full my-4 transition-all duration-700 delay-300 ${isMenuOpen ? 'scale-x-100' : 'scale-x-0'}`}></div>

          {/* Buttons Area */}
          <div 
            className={`flex flex-col gap-4 w-full max-w-xs transition-all duration-700 delay-500 ${
               isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <RouterLink
              to="/login"
              onClick={closeMenu}
              className="w-full text-center font-bold text-lg text-white bg-slate-900 px-8 py-4 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
            >
              Log In
            </RouterLink>
            
            <RouterLink
              to="/register"
              onClick={closeMenu}
              className="w-full text-center font-bold text-lg text-slate-700 bg-slate-100 px-8 py-4 rounded-2xl hover:bg-slate-200 active:scale-95 transition-all"
            >
              Create Account
            </RouterLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
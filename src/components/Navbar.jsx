// src/components/Navbar.jsx

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
// react-scroll को Link लाई ScrollLink र react-router-dom को Link लाई RouterLink को रूपमा import गर्ने
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom"; // useLocation थप्ने
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavLink = ({ to, children, onClick }) => (
  <ScrollLink
    to={to} spy={true} smooth={true} duration={500} onClick={onClick}
    className="capitalize relative cursor-pointer text-lg text-slate-700 hover:text-slate-900 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full 
               after:bg-orange-500 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:hover:scale-x-100"
  >
    {children}
  </ScrollLink>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); 
  const isHomePage = location.pathname === '/';

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "features", label: "Features" },
    { to: "destination", label: "Destination" },
    { to: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-slate-50/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-4 md:px-8">
        <RouterLink to="/" className="cursor-pointer" onClick={closeMenu}>
          <h1 className="font-extrabold text-2xl text-slate-900 transition-transform duration-300 hover:scale-105">
            Travel<span className="text-orange-500">App</span>
          </h1>
        </RouterLink>

  
        {isHomePage && (
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
        )}

        {/* Desktop Authentication Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <RouterLink to="/register" className="text-slate-700 hover:text-slate-900 font-semibold transition-colors px-5 py-2 rounded-full border-2 border-transparent hover:border-slate-300">
            Register
          </RouterLink>
          <RouterLink to="/login" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-md hover:shadow-orange-300 transform hover:scale-105">
            Login
          </RouterLink>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-slate-800 focus:outline-none z-50 relative" aria-label="Toggle Navigation Menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-slate-50/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
        
          {isHomePage && navItems.map((item) => (
            <ScrollLink key={item.to} to={item.to} spy={true} smooth={true} duration={500} onClick={closeMenu} className="text-3xl font-bold text-slate-800 hover:text-orange-500 transition-colors">
              {item.label}
            </ScrollLink>
          ))}
          <div className={`flex flex-col items-center gap-6 w-4/5 pt-8 ${isHomePage ? 'mt-10 border-t-2 border-slate-200' : ''}`}>
             <RouterLink to="/register" onClick={closeMenu} className="text-slate-700 hover:text-slate-900 font-semibold transition-colors text-2xl">
                Register
            </RouterLink>
            <RouterLink to="/login" onClick={closeMenu} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg text-xl">
                Login
            </RouterLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
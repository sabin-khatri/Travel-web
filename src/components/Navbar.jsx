/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

/**
 * A reusable, animated link component for desktop navigation.
 */
const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    onClick={onClick}
    className="capitalize relative cursor-pointer text-lg text-slate-700 hover:text-slate-900 transition-colors duration-300
               after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full 
               after:bg-orange-500 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:hover:scale-x-100"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // An array of objects for navigation items for better maintainability.
  // 'to' is the scroll ID (lowercase), 'label' is the displayed text.
  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "features", label: "Features" },
    { to: "destination", label: "Destination" },
    { to: "contact", label: "Contact" },
  ];

  // Toggles the mobile menu state.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Ensures the menu closes when a link is clicked on mobile.
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to handle scroll detection and lock body scroll when menu is open.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Prevent body scroll when the mobile menu is open for better UX.
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function to remove event listener and restore scrolling.
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-50/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Logo Section */}
        <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer" onClick={closeMenu}>
          <h1 className="font-extrabold text-2xl text-slate-900 transition-transform duration-300 hover:scale-105">
            Travel<span className="text-orange-500">App</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Authentication Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-slate-700 hover:text-slate-900 font-semibold transition-colors px-5 py-2 rounded-full border-2 border-transparent hover:border-slate-300">
            Register
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-md hover:shadow-orange-300 transform hover:scale-105">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none z-50 relative"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-slate-50/95 backdrop-blur-lg
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="text-3xl font-bold text-slate-800 hover:text-orange-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-6 mt-10 border-t-2 border-slate-200 w-4/5 pt-8">
             <button className="text-slate-700 hover:text-slate-900 font-semibold transition-colors text-2xl">
                Register
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg text-xl">
                Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
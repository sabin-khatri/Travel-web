/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPlaneDeparture } from 'react-icons/fa';

// Helper component for Links with hover animation
const FooterLink = ({ text }) => (
  <li className="group">
    <a 
      href="/" 
      className="text-slate-400 text-sm transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-1 inline-block"
    >
      {text}
    </a>
  </li>
);

// Helper component for Social Icons
const SocialButton = ({ Icon }) => (
  <a 
    href="/" 
    className="bg-slate-800 p-3 rounded-full text-slate-200 hover:text-white hover:bg-orange-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 ease-out"
  >
    <Icon size={18} />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* --- Brand Section --- */}
          <div className="space-y-4 pr-4">
            <div className="flex items-center gap-2">
              <FaPlaneDeparture className="text-orange-500 text-2xl" />
              <h1 className="text-2xl font-bold tracking-tight">
                Travel<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">App</span>
              </h1>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Discover amazing travel destinations with TravelApp. We curate the
              best experiences, bringing the world beauty right to your screen.
            </p>
          </div>

          {/* --- Destinations --- */}
          <div>
            <h2 className="text-lg font-semibold mb-6 relative inline-block">
              Destinations
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-orange-500 rounded-full"></span>
            </h2>
            <ul className="space-y-3">
              <FooterLink text="Paris, France" />
              <FooterLink text="Dubai, UAE" />
              <FooterLink text="Venice, Italy" />
              <FooterLink text="Kyoto, Japan" />
            </ul>
          </div>

          {/* --- About --- */}
          <div>
            <h2 className="text-lg font-semibold mb-6 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-orange-500 rounded-full"></span>
            </h2>
            <ul className="space-y-3">
              <FooterLink text="About Us" />
              <FooterLink text="Testimonials" />
              <FooterLink text="Terms & Conditions" />
              <FooterLink text="Contact Support" />
            </ul>
          </div>

          {/* --- Socials --- */}
          <div>
            <h2 className="text-lg font-semibold mb-6 relative inline-block">
              Follow Us
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-orange-500 rounded-full"></span>
            </h2>
            <p className="text-slate-400 text-sm mb-4">Join our community for exclusive deals.</p>
            <div className="flex gap-4">
              <SocialButton Icon={BsFacebook} />
              <SocialButton Icon={RiTwitterXFill} />
              <SocialButton Icon={BsInstagram} />
            </div>
          </div>
        </div>

        {/* --- Copyright Bar --- */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} TravelApp. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Developed by 
            <span className="text-orange-500 font-medium ml-1 cursor-pointer hover:underline decoration-orange-500 underline-offset-4">
              Sabin Khatri
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
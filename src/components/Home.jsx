/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";

const keyframesCSS = `
  @keyframes pan-zoom {
    0% {
      transform: scale(1.15) translate(-5%, 5%);
      transform-origin: center center;
    }
    100% {
      transform: scale(1) translate(0, 0);
      transform-origin: center center;
    }
  }

  .pan-zoom-background {
    animation: pan-zoom 30s linear infinite alternate;
  }
`;

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center lg:justify-start overflow-hidden">
      <style>{keyframesCSS}</style>
      
      <div 
        className="pan-zoom-background absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1935&auto=format&fit=crop)` }}
      />
      
      <div className="absolute inset-0 -z-10 bg-white/30" />

      <div className="container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-xl">
          <h1 
            className={`text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight drop-shadow-lg
              transition-all duration-700 ease-out
              ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Craft Your Unforgettable <span className="text-orange-500">Story</span>.
          </h1>
          
          <p 
            className={`mt-4 text-lg text-slate-700 font-medium drop-shadow-md
              transition-all duration-700 ease-out delay-200
              ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            From serene lakes to bustling cities, let us design a journey as unique as you are. Explore the world, your way.
          </p>
          
          <div 
            className={`mt-8 transition-all duration-700 ease-out delay-300
              ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Link to="destination" spy={true} smooth={true} duration={500}>
              <button className="flex items-center gap-3 w-fit bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-7 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-300 transform hover:scale-105 mx-auto lg:mx-0">
                Start Exploring
                <FiArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
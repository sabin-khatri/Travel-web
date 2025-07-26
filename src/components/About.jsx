/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { FiArrowRight } from "react-icons/fi";

// A high-quality, vibrant image from Unsplash
const aboutImageUrl = "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop";

const About = () => {
  // Hook for triggering animations when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will only run once
    threshold: 0.2,    // Trigger when 20% of the element is visible
  });

  return (
    <div id="about" className="min-h-screen w-full bg-slate-50 py-20 lg:py-28">
      <div ref={ref} className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6">
        
        {/* === Image Section === */}
        <div 
          className={`relative transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          {/* Decorative background accent */}
          <div className="absolute -top-4 -left-4 w-full h-full border-4 border-orange-200 rounded-3xl z-0 transform -rotate-3"></div>
          <img
            className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl"
            src={aboutImageUrl}
            alt="A beautiful travel destination with a wooden walkway over turquoise water"
          />
        </div>

        {/* === Text Content Section === */}
        <div 
          className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <h3 className="text-lg font-semibold uppercase text-orange-500 tracking-wider">
            Why Choose Us?
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            We Curate Trips You Will Remember Forever.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Forget generic itineraries. At TravelApp, we believe travel is a personal story waiting to be written. Our experts craft unique, tailor-made journeys that connect you with the heart of a destination, ensuring every moment is authentic and unforgettable.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your dream vacation is just a conversation away. Let Us start planning.
          </p>

          <Link to="contact" spy={true} smooth={true} duration={500} className="inline-block pt-4">
            <button className="flex items-center gap-3 w-fit bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-7 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-300 transform hover:scale-105">
              Contact an Expert
              <FiArrowRight size={20} />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
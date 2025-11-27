import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-darkBackground text-white px-5 md:px-32 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  
        <div>
          <h1 className="text-xl font-semibold mb-2">TravelApp</h1>
          <p className="text-sm">
            Discover amazing travel destinations with TravelApp. We bring the
            best experiences right to your screen.
          </p>
        </div>

    
        <div>
          <h2 className="text-lg font-medium mb-2">Destinations</h2>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-brightColor cursor-pointer">Paris, France</li>
            <li className="hover:text-brightColor cursor-pointer">Dubai, UAE</li>
            <li className="hover:text-brightColor cursor-pointer">Venice, Italy</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-medium mb-2">About</h2>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-brightColor cursor-pointer">Contact Us</li>
            <li className="hover:text-brightColor cursor-pointer">Testimonial</li>
            <li className="hover:text-brightColor cursor-pointer">Rating</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-medium mb-2">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <BsFacebook className="hover:text-brightColor cursor-pointer" size={22} />
            <RiTwitterXFill className="hover:text-brightColor cursor-pointer" size={22} />
            <BsInstagram className="hover:text-brightColor cursor-pointer" size={22} />
          </div>
        </div>
      </div>

    
      <div className="pt-8 text-center text-sm border-t border-gray-700 mt-8">
        &copy; {new Date().getFullYear()} developed by
        <span className="text-brightColor"> sabin dev</span> | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

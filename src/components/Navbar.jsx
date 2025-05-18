import  { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleClose = () => {
    setMenu(false); // close menu on mobile link click
  };

  const backgroundColor = `bg-white`;

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex flex-row justify-between items-center p-5 md:px-32 px-5 bg-darkBackground text-white">
        <Link to="home" spy={true} smooth={true} duration={500}>
          <h1 className="font-semibold text-xl cursor-pointer">TravelApp</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-row items-center gap-6">
          {["home", "features", "destination", "about", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              className="capitalize hover:text-brightColor transition-all cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex flex-row items-center gap-4">
          <h1 className="hover:text-brightColor transition-all cursor-pointer">Register</h1>
          <Button title="Login" backgroundColor={backgroundColor} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center p-2 cursor-pointer" onClick={handleChange}>
          {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-xl text-center pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300 ease-in-out z-40`}
      >
        {["home", "features", "destination", "about", "contact"].map((item) => (
          <Link
            key={item}
            to={item}
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClose}
            className="capitalize hover:text-brightColor transition-all cursor-pointer"
          >
            {item}
          </Link>
        ))}

        <div className="flex flex-col items-center gap-4">
          <h1 className="hover:text-brightColor transition-all cursor-pointer">Register</h1>
          <Button title="Login" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

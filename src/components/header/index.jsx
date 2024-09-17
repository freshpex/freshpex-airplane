import { useState } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../../assets/icons/arrow.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent z-50">
      <Link
        className="text-white text-4xl font-semibold transform hover:scale-105 transition-transform duration-300"
        to="/"
      >
        <span className="font-[Montserrat-SemiBold]">U</span>
        <span className="font-[Avenir_LT_Std-Regular]">travel</span>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <FaTimes className="animate-fadeIn" />
        ) : (
          <FaBars className="animate-fadeIn" />
        )}
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex-row md:flex items-center space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent py-4 md:py-0 z-20 md:z-auto transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          className="text-white text-lg hover:text-yellow-400 transform hover:scale-105 transition-all duration-300 ease-in-out"
          to="/"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          className="text-white text-lg hover:text-yellow-400 transform hover:scale-105 transition-all duration-300 ease-in-out"
          to="/help"
          onClick={() => setIsOpen(false)}
        >
          Help
        </Link>
        <Link
          className="text-white text-lg hover:text-yellow-400 transform hover:scale-105 transition-all duration-300 ease-in-out"
          to="/login"
          onClick={() => setIsOpen(false)}
        >
          Log in
        </Link>
        <Link
          className="text-white text-lg hover:text-yellow-400 transform hover:scale-105 transition-all duration-300 ease-in-out"
          to="/signup"
          onClick={() => setIsOpen(false)}
        >
          Sign up
        </Link>

        <div className="flex items-center space-x-2">
          <div className="text-white text-lg">EN</div>
          <Arrow className="w-3 h-3 text-white transform hover:rotate-90 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Header;

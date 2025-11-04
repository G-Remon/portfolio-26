import { useState } from "react";
import templateData from "../../templateOneData.json";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const templateOneData = templateData;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-4 md:top-6 left-0 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-[700px] rounded-2xl md:rounded-full bg-[#211f2a]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-purple-500/10 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 transition-all duration-300 hover:border-white/20 hover:shadow-purple-500/20">
        <div className="text-white text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-evenly gap-4 lg:gap-6">
          {templateOneData.NavBar.about && (
            <li>
              <a
                href="#about"
                className="relative text-sm lg:text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-white/5 group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          )}
          {templateOneData.NavBar.projects && (
            <li>
              <a
                href="#projects"
                className="relative text-sm lg:text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-white/5 group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          )}
          {templateOneData.NavBar.skills && (
            <li>
              <a
                href="#skills"
                className="relative text-sm lg:text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-white/5 group"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          )}
          {templateOneData.NavBar.experience && (
            <li>
              <a
                href="#experience"
                className="relative text-sm lg:text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-white/5 group"
              >
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          )}
          {templateOneData.NavBar.contact && (
            <li>
              <a
                href="#contact"
                className="relative text-sm lg:text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-white/5 group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          )}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-xl z-50 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-full left-0 right-0 mt-3 bg-[#211f2a]/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center gap-3 py-4 px-4 shadow-xl shadow-purple-500/20 transition-all duration-300 ease-out ${
            isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {templateOneData.NavBar.about && (
            <li className="w-full">
              <a
                href="#about"
                onClick={closeMenu}
                className="block text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-white/5 text-center"
              >
                About
              </a>
            </li>
          )}
          {templateOneData.NavBar.projects && (
            <li className="w-full">
              <a
                href="#projects"
                onClick={closeMenu}
                className="block text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-white/5 text-center"
              >
                Projects
              </a>
            </li>
          )}
          {templateOneData.NavBar.skills && (
            <li className="w-full">
              <a
                href="#skills"
                onClick={closeMenu}
                className="block text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-white/5 text-center"
              >
                Skills
              </a>
            </li>
          )}
          {templateOneData.NavBar.experience && (
            <li className="w-full">
              <a
                href="#experience"
                onClick={closeMenu}
                className="block text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-white/5 text-center"
              >
                Experience
              </a>
            </li>
          )}
          {templateOneData.NavBar.contact && (
            <li className="w-full">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-base font-medium text-white/80 hover:text-white transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-white/5 text-center"
              >
                Contact
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

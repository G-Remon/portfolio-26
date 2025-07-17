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
    <nav className="w-full fixed top-4 left-0 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-[600px] rounded-full bg-[#211f2a] flex items-center justify-between px-6 py-4">
        <div className="text-white text-lg font-bold">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center justify-evenly gap-6">
          {templateOneData.NavBar.about && (
            <li>
              <a
                href="#about"
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                About
              </a>
            </li>
          )}
          {templateOneData.NavBar.projects && (
            <li>
              <a
                href="#projects"
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                Projects
              </a>
            </li>
          )}
          {templateOneData.NavBar.skills && (
            <li>
              <a
                href="#skills"
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                Skills
              </a>
            </li>
          )}
          {templateOneData.NavBar.experience && (
            <li>
              <a
                href="#experience"
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                Experience
              </a>
            </li>
          )}
          {templateOneData.NavBar.contact && (
            <li>
              <a
                href="#contact"
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                Contact
              </a>
            </li>
          )}
        </ul>

        {/* Mobile Button */}
        <button
          className="sm:hidden text-white text-2xl z-50"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-full left-0 right-0 mt-2 bg-[#211f2a] rounded-lg flex flex-col items-center gap-4 py-4 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {templateOneData.NavBar.about && (
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                About
              </a>
            </li>
          )}
          {templateOneData.NavBar.projects && (
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                Projects
              </a>
            </li>
          )}
          {templateOneData.NavBar.skills && (
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                Skills
              </a>
            </li>
          )}
          {templateOneData.NavBar.experience && (
            <li>
              <a
                href="#experience"
                onClick={closeMenu}
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                Experience
              </a>
            </li>
          )}
          {templateOneData.NavBar.contact && (
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-base font-medium text-white/70 hover:text-white transition-all duration-300"
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

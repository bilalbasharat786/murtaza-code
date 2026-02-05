import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Ensure logo path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile menu toggle handler
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth Scroll Handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Navbar ki height minus karke scroll position set krna (taake content chup na jaye)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Mobile menu ko band karna click k baad
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full font-sans relative">
      <nav className="bg-white shadow-md py-4 px-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logo}
              alt="AirCon Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-[#0a1535] ml-2">
              AirCon
            </span>
          </div>
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-orange-500 transition"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-orange-500 transition"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-orange-500 transition"
              >
                Our Services
              </button>
            </li>
            <li className="group relative cursor-pointer flex items-center gap-1 hover:text-orange-500 transition">
              <span>Pages</span>
              <FaChevronDown size={12} />
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block border-t-2 border-orange-500">
                <button
                  onClick={() => scrollToSection("features")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("stats")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600"
                >
                  Stats
                </button>
                <button
                  onClick={() => scrollToSection("quote")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600"
                >
                  Get A Quote
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600"
                >
                  Our Team
                </button>
                <button
                  onClick={() => scrollToSection("testimonial")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600"
                >
                  Testimonial
                </button>
              </div>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-orange-500 transition"
              >
                Contact Us
              </button>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaInstagram />} />
            </div>

            <button
              className="lg:hidden text-2xl text-[#0a1535]"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-lg flex flex-col p-4 gap-4 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-orange-500 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-gray-700 hover:text-orange-500 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-gray-700 hover:text-orange-500 font-medium"
            >
              Our Services
            </button>
            <div className="pl-4 border-l-2 border-orange-100 flex flex-col gap-3">
              <span className="text-gray-400 text-sm font-semibold">
                Pages:
              </span>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-gray-600 hover:text-orange-500 text-sm"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("stats")}
                className="text-left text-gray-600 hover:text-orange-500 text-sm"
              >
                Stats
              </button>
              <button
                onClick={() => scrollToSection("quote")}
                className="text-left text-gray-600 hover:text-orange-500 text-sm"
              >
                Get Quote
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left text-gray-600 hover:text-orange-500 text-sm"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection("testimonial")}
                className="text-left text-gray-600 hover:text-orange-500 text-sm"
              >
                Testimonial
              </button>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-gray-700 hover:text-orange-500 font-medium"
            >
              Contact Us
            </button>

            <div className="flex gap-3 mt-2 border-t pt-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaInstagram />} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
  >
    {icon}
  </a>
);

export default Navbar;

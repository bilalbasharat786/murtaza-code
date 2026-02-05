import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a1535] text-white pt-16 mt-0">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-orange-500 text-4xl">
                <img
                  src={logo}
                  alt="AirCon"
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <span className="text-3xl font-bold tracking-wide">AirCon</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam
              ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem
              et sit.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Newsletter</h4>
            <p className="text-gray-400">
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita.
            </p>
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-4 px-6 pr-24 bg-transparent border border-gray-600 outline-none text-white focus:border-orange-500 transition-colors rounded-sm placeholder-gray-500"
              />
              <button className="absolute top-0 right-0 h-full px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors rounded-r-sm">
                SignUp
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700/50 mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>123 Street, New York, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="flex-shrink-0" />
                <span>+012 345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0" />
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <FooterLink text="AC Installation" />
              <FooterLink text="Cooling Services" />
              <FooterLink text="Heating Services" />
              <FooterLink text="Annual Inspections" />
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink text="About Us" />
              <FooterLink text="Contact Us" />
              <FooterLink text="Our Services" />
              <FooterLink text="Terms & Condition" />
              <FooterLink text="Support" />
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Follow Us</h4>
            <div className="flex gap-2">
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaYoutube />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#081028] py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <div className="text-center md:text-left">
            &copy;{" "}
            <span className="text-orange-500 border-b border-orange-500 cursor-pointer">
              Your Site Name
            </span>
            , All Right Reserved.
          </div>
          <div className="text-center md:text-right">
            Designed By{" "}
            <span className="text-orange-500 border-b border-orange-500 cursor-pointer">
              Muhammad Bilal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
const FooterLink = ({ text }) => (
  <li>
    <a
      href="#"
      className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2"
    >
      <FaChevronRight size={12} />
      {text}
    </a>
  </li>
);

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;

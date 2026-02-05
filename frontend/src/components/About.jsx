import React from "react";
import { FaUserCog, FaAward, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AboutImage1 from "../assets/about-1.jpg";
import AboutImage2 from "../assets/about-2.jpg";
import AboutImage3 from "../assets/about-3.jpg";

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-[#0a1535] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Welcome To Best Cooling & Heating Service Center
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 py-4">
            <div className="flex items-center gap-4">
              <div className="text-orange-500 border-2 border-orange-500 border-dashed rounded-full p-3">
                <FaUserCog size={30} />
              </div>
              <div>
                <h4 className="text-[#0a1535] font-bold text-lg">
                  Expert Technician
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-orange-500 border-2 border-orange-500 border-dashed rounded-full p-3">
                <FaAward size={30} />
              </div>
              <div>
                <h4 className="text-[#0a1535] font-bold text-lg">
                  Best Quality Services
                </h4>
              </div>
            </div>
          </div>

          <p className="text-gray-500 leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 pt-4">
            <div className="flex items-center gap-4">
              <div className="bg-orange-500 text-white rounded-full p-3 flex items-center justify-center">
                <FaPhoneAlt size={18} />
              </div>
              <span className="text-[#0a1535] font-bold text-lg">
                +012 345 6789
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 text-white rounded-full p-3 flex items-center justify-center">
                <FaEnvelope size={18} />
              </div>
              <span className="text-[#0a1535] font-bold text-lg">
                info@example.com
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex gap-4 h-[400px] md:h-[500px]">
          <div className="w-1/2 flex flex-col gap-4">
            <img
              src={AboutImage1}
              alt="Technician working"
              className="h-1/2 w-full object-cover rounded shadow-md"
            />
            <img
              src={AboutImage2}
              alt="AC Repair"
              className="h-1/2 w-full object-cover rounded shadow-md"
            />
          </div>
          <div className="w-1/2">
            <img
              src={AboutImage3}
              alt="Outdoor Unit Repair"
              className="h-full w-full object-cover rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState, useEffect, useRef } from "react";
import {
  FaTools,
  FaSnowflake,
  FaFireAlt,
  FaWrench,
  FaWind,
  FaClipboardCheck,
} from "react-icons/fa";
import serviceImage1 from "../assets/about-1.jpg";
import serviceImage2 from "../assets/about-3.jpg";
import serviceImage3 from "../assets/Hero1.jpg";
import serviceImage4 from "../assets/service-4.jpg";
import serviceImage5 from "../assets/service-5.jpg";
import serviceImage6 from "../assets/service-6.jpg";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const servicesData = [
    {
      id: 1,
      title: "AC Installation",
      icon: <FaTools size={24} />,
      image: serviceImage1,
    },
    {
      id: 2,
      title: "Cooling Services",
      icon: <FaSnowflake size={24} />,
      image: serviceImage2,
    },
    {
      id: 3,
      title: "Heating Services",
      icon: <FaFireAlt size={24} />,
      image: serviceImage3,
    },
    {
      id: 4,
      title: "Maintenance & Repair",
      icon: <FaWrench size={24} />,
      image: serviceImage4,
    },
    {
      id: 5,
      title: "Indoor Air Quality",
      icon: <FaWind size={24} />,
      image: serviceImage5,
    },
    {
      id: 6,
      title: "Annual Inspections",
      icon: <FaClipboardCheck size={24} />,
      image: serviceImage6,
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-[#0a1535] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We Provide professional Heating & Cooling Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`group bg-gray-50 shadow-md hover:shadow-xl transition-all duration-700 ease-out transform overflow-hidden
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              `}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex h-20">
                <div className="w-20 bg-orange-500 text-white flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-orange-600">
                  {service.icon}
                </div>
                <div className="flex items-center pl-6 flex-grow bg-gray-100 group-hover:bg-white transition-colors duration-300">
                  <h3 className="text-[#0a1535] font-bold text-xl group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

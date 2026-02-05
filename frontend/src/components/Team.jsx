import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import teamImage1 from "../assets/team-1.jpg";
import teamImage2 from "../assets/team-2.jpg";
import teamImage3 from "../assets/team-3.jpg";
import teamImage4 from "../assets/team-4.jpg";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const teamData = [
    {
      id: 1,
      name: "Full Name",
      designation: "Designation",
      image: teamImage1,
    },
    {
      id: 2,
      name: "Full Name",
      designation: "Designation",
      image: teamImage2,
    },
    {
      id: 3,
      name: "Full Name",
      designation: "Designation",
      image: teamImage3,
    },
    {
      id: 4,
      name: "Full Name",
      designation: "Designation",
      image: teamImage4,
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
        <div className="text-center mb-12">
          <h2 className="text-[#0a1535] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Meet Our Professional <br /> Team Members
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div
              key={member.id}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`group bg-white shadow-md hover:shadow-xl transition-all duration-700 ease-out transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}
              `}
            >
              <div className="relative overflow-hidden h-[300px] w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0a1535]/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-transform hover:-translate-y-1"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-transform hover:-translate-y-1"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-transform hover:-translate-y-1"
                  >
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
              <div className="text-center p-6 bg-gray-50">
                <h3 className="text-[#0a1535] font-bold text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium text-sm uppercase">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

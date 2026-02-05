import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeroImage1 from "../assets/Hero1.jpg";
import HeroImage2 from "../assets/Hero2.jpg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: HeroImage1,
      title: "We Provide Best AC Repair Services",
      subtitle:
        "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
    },
    {
      id: 2,
      image: HeroImage2,
      title: "Professional Heating & Cooling",
      subtitle: "Quality service you can trust anytime, anywhere.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="w-full h-[600px] md:h-[700px] relative group overflow-hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative transition-all ease-in-out"
      >
        <div className="absolute inset-0 bg-[#0a1535]/80"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-4 drop-shadow-lg animate-fade-in-down">
          {slides[currentIndex].title}
        </h1>
        <p className="text-gray-300 text-base md:text-xl max-w-2xl mb-8 animate-fade-in-up">
          {slides[currentIndex].subtitle}
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-sm transition duration-300 animate-fade-in-up">
          Explore More
        </button>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#0a1535]/50 text-white cursor-pointer hover:bg-orange-500 transition duration-300">
        <FaChevronLeft onClick={prevSlide} size={20} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#0a1535]/50 text-white cursor-pointer hover:bg-orange-500 transition duration-300">
        <FaChevronRight onClick={nextSlide} size={20} />
      </div>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;

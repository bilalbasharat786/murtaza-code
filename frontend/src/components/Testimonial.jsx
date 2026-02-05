import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialImage1 from "../assets/testimonial-1.jpg";
import testimonialImage2 from "../assets/testimonial-2.jpg";
import testimonialImage3 from "../assets/testimonial-3.jpg";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Client Name 1",
      profession: "Profession",
      text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
      image: testimonialImage1,
    },
    {
      id: 2,
      name: "Client Name 2",
      profession: "Business Owner",
      text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: testimonialImage2,
    },
    {
      id: 3,
      name: "Client Name 3",
      profession: "Home Owner",
      text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.",
      image: testimonialImage3,
    },
  ];
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto py-16 px-4 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-[#0a1535] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          What They Say About <br /> Our Services
        </h2>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <div
          key={currentIndex}
          className="flex flex-col items-center animate-fade-in"
        >
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-24 h-24 rounded-full border-4 border-gray-100 object-cover mb-6 shadow-sm"
          />
          <p className="text-gray-500 text-lg italic mb-6 leading-relaxed">
            "{testimonials[currentIndex].text}"
          </p>
          <h4 className="text-[#0a1535] font-bold text-xl">
            {testimonials[currentIndex].name}
          </h4>
          <span className="text-gray-400 text-sm uppercase">
            {testimonials[currentIndex].profession}
          </span>
        </div>
        <div className="flex gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src={testimonialImage2}
          className="absolute top-20 left-10 w-16 h-16 rounded-full object-cover border-4 border-gray-50 opacity-70"
          alt="decoration"
        />
        <img
          src={testimonialImage3}
          className="absolute top-1/2 left-20 w-20 h-20 rounded-full object-cover border-4 border-gray-50 opacity-70"
          alt="decoration"
        />
        <img
          src={testimonialImage1}
          className="absolute bottom-20 left-10 w-14 h-14 rounded-full object-cover border-4 border-gray-50 opacity-70"
          alt="decoration"
        />
        <img
          src={testimonialImage3}
          className="absolute top-20 right-10 w-16 h-16 rounded-full object-cover border-4 border-gray-50 opacity-70"
          alt="decoration"
        />
        <img
          src={testimonialImage2}
          className="absolute top-1/2 right-20 w-20 h-20 rounded-full object-cover border-4 border-gray-50 opacity-70"
          alt="decoration"
        />
        <img
          src={testimonialImage1}
          className="absolute bottom-20 right-10 w-14 h-14 rounded-full object-cover border-4 border-gray-50 opacity-70"
          alt="decoration"
        />
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;

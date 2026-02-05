import React, { useState, useEffect, useRef } from "react";
import { FaHandshake, FaTags, FaHeadset } from "react-icons/fa";
import featureImage from "../assets/feature.jpg";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  const animationClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-24";

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div
        className={`container mx-auto px-4 md:px-8 lg:px-16 transition-all duration-1000 ease-out transform ${animationClass}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#0a1535] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Few Reasons Why People Choosing Us!
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
            </div>
            <div className="space-y-6">
              <FeatureItem
                icon={<FaHandshake size={28} />}
                title="Trusted Service Center"
                description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos."
              />
              <FeatureItem
                icon={<FaTags size={28} />}
                title="Reasonable Price"
                description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos."
              />
              <FeatureItem
                icon={<FaHeadset size={28} />}
                title="24/7 Supports"
                description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos."
              />
            </div>
          </div>
          <div className="lg:w-1/2 h-full">
            <img
              src={featureImage}
              alt="AC Cooling Air"
              className="w-full h-auto object-cover rounded-lg md:max-w-lg lg:max-w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="text-xl font-bold text-[#0a1535] mb-2">{title}</h4>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);

export default Features;

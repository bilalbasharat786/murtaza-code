import React, { useState, useEffect, useRef } from "react";
import backgroundImage from "../assets/Hero1.jpg";
const CounterItem = ({ target, label, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = duration / target;

    if (startAnimation) {
      const timer = setInterval(() => {
        start += Math.ceil(target / 100);
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [target, startAnimation]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">
        {count}
      </h2>
      <p className="text-orange-500 font-medium text-lg uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsData = [
    { id: 1, target: 1234, label: "Happy Clients" },
    { id: 2, target: 1234, label: "Projects Succeed" },
    { id: 3, target: 1234, label: "Awards Achieved" },
    { id: 4, target: 1234, label: "Team Members" },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <div
      ref={sectionRef}
      className="relative w-full py-20 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#0a1535]/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsData.map((item) => (
            <CounterItem
              key={item.id}
              target={item.target}
              label={item.label}
              startAnimation={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

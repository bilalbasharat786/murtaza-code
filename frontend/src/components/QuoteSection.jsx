import React, { useState, useEffect, useRef } from "react";
import backgroundImage1 from "../assets/Hero1.jpg";
import backgroundImage2 from "../assets/Hero2.jpg";

const QuoteSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const myPhoneNumber = "923275372176"; 
    const whatsappMessage = `
*New Quote Request:*
-----------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Mobile:* ${formData.mobile}
*Service Type:* ${formData.service}
*Message:* ${formData.message}
    `;
    const url = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

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

  return (
    <section
      ref={sectionRef}
      className="w-full lg:h-[600px] flex flex-col lg:flex-row font-sans"
    >
      <div
        className="lg:w-1/2 relative bg-cover bg-center py-16 px-8 md:px-16 flex items-center"
        style={{ backgroundImage: `url(${backgroundImage1})` }}
      >
        <div className="absolute inset-0 bg-[#0a1535]/80"></div>
        <div
          className={`relative z-10 max-w-lg transition-all duration-1000 ease-out transform 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
        >
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            For Individuals And Organisations
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-sm transition duration-300">
            More Details
          </button>
        </div>
      </div>
      <div
        className="lg:w-1/2 relative bg-cover bg-center py-16 px-8 md:px-16 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <div className="relative z-10 bg-white p-8 md:p-12 shadow-lg rounded-sm w-full max-w-xl">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Your Mobile"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition"
              />
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition text-gray-500 bg-white"
              >
                <option value="">Service Type</option>
                <option value="AC Installation">AC Installation</option>
                <option value="Cooling Services">Cooling Services</option>
                <option value="Heating Services">Heating Services</option>
              </select>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-sm transition duration-300 uppercase tracking-wider"
            >
              Get A Free Quote
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

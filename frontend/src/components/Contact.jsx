import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const myPhoneNumber = "923275372176";
    const whatsappMessage = `
*New Query from Website:*
-----------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
    `;
    const url = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-[#0a1535] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            If You Have Any Query, <br /> Please Contact Us
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="lg:w-1/2 bg-white p-2">
            <p className="text-gray-500 mb-8 leading-relaxed">
              Fill out the form below to send us a direct message on WhatsApp.
              We will get back to you as soon as possible with a solution to
              your problem.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition bg-gray-50"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition bg-gray-50"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition bg-gray-50"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition resize-none bg-gray-50"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-sm transition duration-300 uppercase tracking-wider"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              className="w-full h-full border-0"
              src="https://maps.google.com/maps?q=Adyala%20Road%20Rawalpindi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

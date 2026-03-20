import React, { useState } from 'react';

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Let's Connect
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently seeking opportunities in data engineering, particularly in FinTech companies.
          If you'd like to discuss projects, opportunities, or just connect, feel free to reach out!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setShowEmail(!showEmail)}
            className="px-8 py-3 bg-black text-white font-medium transition-all duration-300 hover:bg-gray-800"
          >
            {showEmail ? 'tveeraj311@gmail.com' : 'Email'}
          </button>
          <button
            onClick={() => setShowPhone(!showPhone)}
            className="px-8 py-3 bg-transparent border-2 border-black text-black font-medium transition-all duration-300 hover:bg-black hover:text-white"
          >
            {showPhone ? '+91 8688301917' : 'Phone'}
          </button>
          <a
            href="https://linkedin.com/in/veeraj-thota-9463a1290"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-black text-black font-medium transition-all duration-300 hover:bg-black hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vijay12968"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-black text-black font-medium transition-all duration-300 hover:bg-black hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

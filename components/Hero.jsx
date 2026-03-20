import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Data Engineer
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Student working on emerging tech
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable data systems and pipelines with modern technologies.
          Passionate about data engineering, machine learning, and cloud infrastructure.
          Currently pursuing B.Tech CSE at GRIET Hyderabad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-black text-white font-medium transition-all duration-300 hover:bg-gray-800"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/vijay12968"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-black text-black font-medium transition-all duration-300 hover:bg-black hover:text-white"
          >
            View GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
          <div>
            <div className="text-3xl font-bold text-black mb-1">5+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-1">3</div>
            <div className="text-sm text-gray-600">Hackathons</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-1">7.7</div>
            <div className="text-sm text-gray-600">CGPA</div>
          </div>
        </div>
      </div>
    </section>
  );
}

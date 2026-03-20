import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20 grid-bg"></div>

      {/* Animated background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-color-dodge filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-color-dodge filter blur-3xl opacity-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 z-10 text-center">
        {/* Status badge with animation */}
        <div className="mb-8 inline-block animate-fade-in-down">
          <div className="border border-cyan-500/50 rounded-full px-6 py-2 backdrop-blur-sm bg-cyan-500/5 animate-border-glow">
            <p className="text-cyan-400 text-xs font-mono tracking-widest">◆ ACTIVE STATUS ◆</p>
          </div>
        </div>

        {/* Main title with staggered animation */}
        <div className="animate-fade-in-up">
          <h1 className="text-7xl md:text-8xl font-serif font-black mb-4 text-white leading-none tracking-tighter">
            VEERAJ
            <br />
            <span className="neon-glow-cyan animate-neon-flicker text-5xl md:text-7xl inline-block">
              THOTA
            </span>
          </h1>
        </div>

        {/* Subtitle with animation */}
        <div className="mb-8 space-y-2 animate-fade-in-up stagger-1">
          <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-widest">
            DATA ENGINEER
          </p>
          <p className="text-sm md:text-base text-cyan-400 font-mono tracking-wider">
            ◆ PRECISION • SYSTEMS • ARCHITECTURE ◆
          </p>
        </div>

        {/* Description with animation */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed font-light animate-fade-in-up stagger-2">
          Building scalable data systems with the precision of a masterpiece.
          Every pipeline tuned. Every query executed with intent.
        </p>

        {/* CTA Buttons with animations */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="#projects"
            className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold uppercase tracking-widest text-sm hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 hover:-translate-y-2 border border-cyan-400 animate-fade-in-up stagger-3 transform"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>→ VIEW ARSENAL</span>
            </span>
          </a>

          <a
            href="#contact"
            className="group relative px-12 py-4 bg-transparent border-2 border-pink-500 text-pink-500 font-bold uppercase tracking-widest text-sm hover:bg-pink-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 animate-fade-in-up stagger-4"
          >
            INITIATE CONTACT
          </a>
        </div>

        {/* Scroll indicator with float animation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center animate-float">
          <p className="text-xs font-mono text-gray-500 tracking-widest mb-2">SCROLL</p>
          <svg className="w-5 h-5 text-cyan-400 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Decorative elements with animations */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-cyan-500/30 opacity-50 animate-rotate-slow"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-pink-600/30 opacity-50 animate-rotate-slow"></div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f1ed 55%, #f0ebe3 100%)',
        paddingTop: '80px',
      }}
    >
      {/* Background radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(139,158,126,0.07) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(212,165,116,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Profile Image */}
          <div
            className={`flex justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-2xl animate-glow-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(139,158,126,0.2) 0%, transparent 70%)',
                  transform: 'scale(1.1)',
                }}
              />
              {/* Decorative border */}
              <div
                className="absolute -inset-1 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,158,126,0.3) 0%, rgba(212,165,116,0.2) 100%)',
                  zIndex: 0,
                }}
              />
              <div className="relative z-10 rounded-2xl overflow-hidden" style={{ width: '340px', height: '400px' }}>
                <img
                  src="/self.jpeg"
                  alt="Veeraj Thota"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center" style="background:linear-gradient(135deg,#d1dcc8,#e8ede4)"><span style="color:#6a7d5e;font-size:1rem;font-weight:500">Veeraj Thota</span></div>';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="section-label">Portfolio</span>
              <h1
                className="mt-2 font-semibold text-charcoal"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Veeraj Thota
              </h1>
            </div>

            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '350ms' }}
            >
              <p className="text-lg font-medium" style={{ color: 'var(--sage)' }}>
                Data Engineer · ML Enthusiast · Full-Stack Developer
              </p>
            </div>

            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)', maxWidth: '480px' }}>
                3rd-year B.Tech CSE student at GRIET, passionate about data engineering, machine learning,
                and scalable infrastructure. CSI Operations Lead with hands-on experience in ETL pipelines,
                ML model deployment, and cloud infrastructure.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '650ms' }}
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="btn-primary"
              >
                Explore My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 pt-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                transitionDelay: '800ms',
                borderTop: '1px solid rgba(139,158,126,0.2)',
              }}
            >
              {[
                { value: '5+', label: 'Projects' },
                { value: '3',  label: 'Hackathons' },
                { value: '7.7', label: 'CGPA' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-semibold"
                    style={{ color: 'var(--charcoal)', letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center mt-16 gap-2">
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--sage)' }}>
            Scroll to explore
          </span>
          <div
            className="animate-scroll-bounce w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: '1.5px solid var(--sage-light)' }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: 'var(--sage)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

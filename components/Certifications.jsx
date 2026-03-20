import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const items = [
  // Achievements
  {
    title: 'Adobe India Hackathon 2025 — Round-2 Finalist',
    issuer: 'Adobe',
    year: '2025',
    type: 'Achievement',
    description: 'Top finalist from 4000+ participating teams in the PDF Intelligence / AI track.',
  },
  {
    title: 'CSI GRIET Chapter — Membership Growth Lead',
    issuer: 'CSI GRIET',
    year: '2024–25',
    type: 'Achievement',
    description: 'Grew chapter membership by 30% and secured ₹50,000+ in corporate sponsorships.',
  },
  // Certifications
  {
    title: 'Oracle Cloud AI Foundations',
    issuer: 'Oracle',
    year: '2024',
    type: 'Certification',
    description: 'Certified in Oracle Cloud AI infrastructure and foundational AI concepts.',
  },
  {
    title: 'Amazon Machine Learning Certificate — Fundamentals',
    issuer: 'Amazon Web Services',
    year: '2024',
    type: 'Certification',
    description: 'AWS AI service fundamentals and machine learning foundations.',
  },
  {
    title: 'SmartCoder Coding Certification',
    issuer: 'Smart Interviews',
    year: '2024',
    type: 'Certification',
    description: 'Competitive programming and algorithmic problem-solving certification.',
  },
  {
    title: 'SQL Developer Certification',
    issuer: 'GeeksforGeeks',
    year: '2024',
    type: 'Certification',
    description: 'Advanced SQL querying, optimization, and database design fundamentals.',
  },
];

const typeStyle = {
  Achievement:   { bg: 'rgba(212,165,116,0.1)', text: '#b8864a',          checkBg: 'rgba(212,165,116,0.15)', checkColor: 'var(--gold)' },
  Certification: { bg: 'rgba(139,158,126,0.1)', text: 'var(--sage-dark)', checkBg: 'rgba(139,158,126,0.15)', checkColor: 'var(--sage)' },
};

export default function Certifications() {
  const [ref, inView] = useInView(0.1);

  const achievements = items.filter((i) => i.type === 'Achievement');
  const certs = items.filter((i) => i.type === 'Certification');

  return (
    <section
      id="certifications"
      className="py-28 px-6"
      style={{ background: 'linear-gradient(135deg, #f5f1ed 0%, #fafafa 100%)' }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">Credentials</span>
          <h2 className="section-heading mt-2">Certifications & Achievements</h2>
        </div>

        {/* Achievements row */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
            Achievements
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((item, i) => {
              const ts = typeStyle[item.type];
              return (
                <div
                  key={i}
                  className={`group flex gap-4 bg-white rounded-2xl p-5 border card-hover transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    borderColor: 'rgba(212,165,116,0.25)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    transitionDelay: `${200 + i * 80}ms`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: ts.checkBg }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke={ts.checkColor} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--charcoal)' }}>
                        {item.title}
                      </h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                        style={{ background: ts.bg, color: ts.text }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs font-medium mb-1.5" style={{ color: ts.text }}>
                      {item.issuer}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications grid */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>
            Certifications
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {certs.map((item, i) => {
              const ts = typeStyle[item.type];
              return (
                <div
                  key={i}
                  className={`group flex gap-4 bg-white rounded-2xl p-5 border card-hover transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    borderColor: 'rgba(209,220,200,0.5)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    transitionDelay: `${400 + i * 80}ms`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: ts.checkBg }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke={ts.checkColor} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--charcoal)' }}>
                        {item.title}
                      </h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                        style={{ background: ts.bg, color: ts.text }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs font-medium mb-1.5" style={{ color: ts.text }}>
                      {item.issuer}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

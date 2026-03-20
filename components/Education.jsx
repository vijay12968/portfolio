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

const coursework = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Software Engineering & Design Patterns',
  'Automata Theory & Compiler Design',
  'Cloud Computing',
  'Machine Learning & Data Science',
  'Web Development & Full-Stack',
  'Operating Systems',
];

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)',
    location: 'Hyderabad, India',
    period: '2023 – 2027',
    highlight: '2nd Year · CGPA 7.7 / 10.0',
    note: null,
    stats: [
      { label: 'CGPA',      value: '7.7 / 10' },
      { label: 'Year',      value: '2nd' },
      { label: 'Program',   value: 'B.Tech CSE' },
    ],
    coursework,
    accentColor: 'var(--sage)',
    primary: true,
  },
  {
    degree: 'Intermediate (10+2) — PCM',
    institution: 'FIITJEE Saifabad Branch',
    location: 'Hyderabad, India',
    period: null,
    highlight: 'Physics · Chemistry · Mathematics',
    note: 'Strong foundation in physics and mathematics for engineering.',
    stats: null,
    coursework: null,
    accentColor: 'var(--gold)',
    primary: false,
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'St Andrews School',
    location: 'Old Bowenpally, Hyderabad',
    period: null,
    highlight: 'General Science · Mathematics',
    note: null,
    stats: null,
    coursework: null,
    accentColor: 'rgba(90,90,90,0.5)',
    primary: false,
  },
];

export default function Education() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="education" className="py-28 px-6 bg-spa-white">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">Background</span>
          <h2 className="section-heading mt-2">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border overflow-hidden card-hover transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderColor: 'rgba(209,220,200,0.5)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transitionDelay: `${200 + i * 120}ms`,
              }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full" style={{ background: edu.accentColor }} />

              <div className={`p-7 ${edu.primary ? '' : 'py-5'}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(139,158,126,0.1)' }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="var(--sage)" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--sage)' }}>
                        {edu.institution}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {edu.location}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    {edu.period && (
                      <span
                        className="text-xs px-3 py-1 rounded-full font-semibold inline-block mb-1"
                        style={{ background: 'rgba(139,158,126,0.1)', color: 'var(--sage-dark)' }}
                      >
                        {edu.period}
                      </span>
                    )}
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {edu.highlight}
                    </p>
                    {edu.note && (
                      <p className="text-xs mt-1 max-w-xs text-right" style={{ color: 'var(--text-secondary)' }}>
                        {edu.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* Stats row — only for primary */}
                {edu.stats && (
                  <div
                    className="grid grid-cols-3 gap-4 py-4 mt-5 rounded-xl px-4"
                    style={{ background: 'var(--spa-cream)' }}
                  >
                    {edu.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-base font-semibold" style={{ color: 'var(--charcoal)' }}>
                          {s.value}
                        </div>
                        <div className="text-xs mt-0.5 font-medium" style={{ color: 'var(--text-secondary)' }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Coursework */}
                {edu.coursework && (
                  <div className="mt-5">
                    <p className="text-xs font-semibold mb-3 tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{ background: '#f0ede9', color: 'var(--text-secondary)' }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

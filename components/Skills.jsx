import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
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

const skillsData = [
  {
    category: 'Languages & Core',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: 'Python',     wip: false },
      { name: 'SQL',        wip: false },
      { name: 'Java',       wip: false },
      { name: 'JavaScript', wip: false },
    ],
  },
  {
    category: 'Data Tools & Frameworks',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    skills: [
      { name: 'Pandas',        wip: false },
      { name: 'FastAPI',       wip: false },
      { name: 'Streamlit',     wip: false },
      { name: 'NumPy',         wip: false },
      { name: 'Apache Spark',  wip: true  },
      { name: 'ETL Pipelines', wip: true  },
    ],
  },
  {
    category: 'Databases & Infrastructure',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: 'PostgreSQL', wip: false },
      { name: 'MongoDB',    wip: false },
      { name: 'Docker',     wip: false },
      { name: 'Git',        wip: false },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ background: 'linear-gradient(135deg, #f5f1ed 0%, #fafafa 100%)' }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">Expertise</span>
          <h2 className="section-heading mt-2">Skills & Technologies</h2>
          <p className="mt-3 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Core competencies in data engineering, cloud infrastructure, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((cat, ci) => (
            <div
              key={ci}
              className={`bg-white rounded-2xl p-7 border transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderColor: 'rgba(209,220,200,0.5)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transitionDelay: `${200 + ci * 120}ms`,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(139,158,126,0.1)', color: 'var(--sage)' }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>
                  {cat.category}
                </h3>
              </div>

              {/* Badge grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <span key={si} className="skill-badge">
                    {skill.name}
                    {skill.wip && (
                      <span
                        className="text-xs italic font-normal"
                        style={{ color: 'var(--gold)', marginLeft: '2px' }}
                        title="Work in progress"
                      >
                        ·WIP
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

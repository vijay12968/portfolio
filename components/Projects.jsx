import React, { useState, useEffect, useRef } from 'react';
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

const fallbackProjects = [
  {
    title: 'AgriConnect — Smart Crop Planner',
    description: 'Full-stack agriculture platform with intelligent crop planning, real-time weather integration, and ML-powered recommendations. Combines IoT data, rainfall prediction, and soil health monitoring to optimize crop yields.',
    tech: ['MERN', 'Next.js', 'TailwindCSS', 'OpenWeather API'],
    status: 'Active',
    url: 'https://github.com/vijay12968',
  },
  {
    title: 'Adobe Hackathon 2025 — PDF Intelligence Pipeline',
    description: 'Enterprise-grade PDF document intelligence system with TF-IDF semantic search, multilingual support, and clause-level extraction. Docker containerized for offline deployment. Round-2 Finalist from 4000+ teams.',
    tech: ['Python', 'TF-IDF', 'FastAPI', 'Docker'],
    status: 'Finalist',
    url: 'https://github.com/vijay12968',
  },
  {
    title: 'Airline Fare Prediction System',
    description: 'ML web application predicting airline ticket prices using ensemble models (RandomForest/GradientBoosting) trained on 50K+ fare records. Features booking lead time analysis and interactive Streamlit UI.',
    tech: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas'],
    status: 'Complete',
    url: 'https://github.com/vijay12968',
  },
];

const statusColors = {
  Active:   { bg: 'rgba(139,158,126,0.12)', text: 'var(--sage-dark)' },
  Finalist: { bg: 'rgba(212,165,116,0.12)', text: '#b8864a' },
  Complete: { bg: 'rgba(42,42,42,0.07)',    text: 'var(--charcoal)' },
};

export default function Projects() {
  const [projects] = useState(fallbackProjects);
  const [loading]  = useState(false);
  const [ref, inView] = useInView(0.1);

  return (
    <section id="projects" className="py-28 px-6 bg-spa-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">Work</span>
          <h2 className="section-heading mt-2">Featured Projects</h2>
          <p className="mt-3 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Showcasing data engineering, machine learning, and full-stack development.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-16">
            <LoadingSpinner />
          </div>
        )}

        {!loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => {
              const sc = statusColors[project.status] || statusColors.Complete;
              return (
                <a
                  key={i}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col bg-white rounded-2xl p-7 border cursor-pointer card-hover transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    borderColor: 'rgba(209,220,200,0.5)',
                    transitionDelay: `${200 + i * 120}ms`,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    textDecoration: 'none',
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(139,158,126,0.1)' }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="var(--sage)" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: sc.bg, color: sc.text, letterSpacing: '0.04em' }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-semibold mb-2 group-hover:text-sage transition-colors duration-200"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((t, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: '#f0ede9', color: 'var(--text-secondary)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: 'var(--sage)' }}
                  >
                    View on GitHub
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* View All */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href="https://github.com/vijay12968"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            View All on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

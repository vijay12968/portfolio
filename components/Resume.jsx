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

const resumes = [
  {
    id: 'v1',
    title: 'Technical-Focused',
    subtitle: 'Engineering & Projects',
    description: 'Emphasizes technical depth — data pipelines, ML projects, and engineering achievements.',
    file: '/resumes/Veeraj_1.pdf',
    highlights: ['Data Engineering', 'ML Projects', 'Technical Skills'],
  },
  {
    id: 'v2',
    title: 'Comprehensive',
    subtitle: 'Full Professional Overview',
    description: 'Complete overview including leadership, extracurriculars, and soft-skill achievements.',
    file: '/resumes/Veeraj_2.pdf',
    highlights: ['Leadership', 'Certifications', 'Full Overview'],
  },
];

function ResumeCard({ resume, index, inView }) {
  return (
    <div
      className={`group bg-white rounded-2xl border overflow-hidden card-hover transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        borderColor: 'rgba(209,220,200,0.5)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        transitionDelay: `${200 + index * 150}ms`,
      }}
    >
      {/* Preview area */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f5f1ed 0%, #e8ede4 100%)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-6">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
            style={{ background: 'rgba(139,158,126,0.15)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="var(--sage)" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--sage)' }}>
            PDF Resume
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="mb-1">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
            Resume {resume.id.toUpperCase()}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--charcoal)' }}>
          {resume.title}
        </h3>
        <p className="text-sm mb-3 font-medium" style={{ color: 'var(--sage)' }}>
          {resume.subtitle}
        </p>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          {resume.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {resume.highlights.map((h) => (
            <span
              key={h}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: '#f0ede9', color: 'var(--text-secondary)' }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={resume.file}
            download
            className="btn-primary flex-1 justify-center text-sm py-2.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
          <a
            href={resume.file}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm py-2.5 px-4"
            aria-label="View resume in new tab"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="resume"
      className="py-28 px-6"
      style={{ background: 'linear-gradient(135deg, #f5f1ed 0%, #fafafa 100%)' }}
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`mb-12 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">Documents</span>
          <h2 className="section-heading mt-2">My Resumes</h2>
          <p className="mt-3 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Two versions tailored to different opportunities. Choose the format that best fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {resumes.map((r, i) => (
            <ResumeCard key={r.id} resume={r} index={i} inView={inView} />
          ))}
        </div>

        {/* Note */}
        <p
          className={`text-center text-xs mt-8 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: 'var(--text-secondary)', transitionDelay: '500ms' }}
        >
          PDF files available once uploaded to <code className="font-mono text-xs" style={{ color: 'var(--sage)' }}>/public/resumes/</code>
        </p>
      </div>
    </section>
  );
}

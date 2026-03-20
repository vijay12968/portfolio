import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.05) {
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

const experiences = [
  {
    role: 'Operations Lead — PR & Sponsorship',
    org: 'CSI GRIET Chapter',
    period: '2024 – Present',
    location: 'Hyderabad, India',
    type: 'Leadership',
    description:
      'Leading operations and external partnerships for the Computer Society of India student chapter at GRIET, managing event logistics, industry sponsorships, and strategic coordination with multiple stakeholder teams. Coordinated with CR team to ensure smooth operations of food stalls and event food management. Worked with management to ensure smooth flow of events via delegation, enforcement and follow-up. Took leadership to solve issues on ground related to supply chain of inventory.',
    responsibilities: [
      {
        title: 'Event Operations & Coordination',
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        items: [
          'Coordinated with CR team for food stalls & catering',
          'Managed end-to-end logistics for RESO\'25, IdeaQuest, Sequence Saga',
          'Reduced event turnaround time by 25–50%',
          'Coordinated 5+ technical workshops and seminars',
        ],
      },
      {
        title: 'Strategic Delegation & Leadership',
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        items: [
          'Coordinated with management for smooth event flow via delegation',
          'Solved on-ground supply chain and inventory issues',
          'Built relationships with 10+ industry partners',
          'Managed volunteer coordination and team accountability',
        ],
      },
      {
        title: 'Sponsorship & Business Development',
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        items: [
          'Secured ₹50,000+ in corporate sponsorships',
          'Handled sponsor communication & agreement management',
          'Developed strategic tech & educational partnerships',
          'Grew chapter membership by 30% over one year',
        ],
      },
    ],
    achievements: [
      { metric: '30% Growth',         desc: 'Chapter membership growth over one year' },
      { metric: '25–50% Efficiency',  desc: 'Improvement in event execution turnaround' },
      { metric: '₹50,000+ Secured',   desc: 'Corporate sponsorship revenue generated' },
      { metric: '10+ Partners',       desc: 'Industry relationships established' },
    ],
    impact: 'Strong operational leadership demonstrated through event execution excellence, stakeholder management, and team coordination. Proven ability to solve real-time supply chain issues and scale chapter operations.',
    tools: [],
  },
  {
    role: 'Project Intern — Design, Development & Digital Marketing',
    org: 'BytesEdge',
    period: 'January 2026 – March 2026',
    periodNote: '3 months · Completed',
    location: 'Hyderabad, India',
    type: 'Internship',
    description:
      'Worked primarily across design, development, and digital marketing functions, contributing to tasks that supported real product and campaign workflows. Assisted in creating and reviewing UI/UX designs, developing functional website components, and planning digital marketing strategies focused on user engagement and visibility. Collaborated with team members to analyze project requirements, test usability, and refine solutions based on feedback. This role strengthened my practical understanding of how technical development, visual design, and marketing strategy integrate to build and launch effective digital products in a professional environment.',
    responsibilities: [
      {
        title: 'Design & UI/UX Development',
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        items: [
          'Created and reviewed UI/UX designs for digital products',
          'Applied UI/UX principles and design system best practices',
          'Adobe Photoshop and design workflow experience',
          'Tested usability and refined designs based on feedback',
        ],
      },
      {
        title: 'Web Development & Digital Presence',
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
          </svg>
        ),
        items: [
          'Developed functional website components for digital products',
          'Built responsive and accessible web solutions',
          'Collaborated on product launch workflows',
          'Git version control and team code collaboration',
        ],
      },
      {
        title: 'Digital Marketing & Strategy',
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        ),
        items: [
          'Planned digital marketing strategies for user engagement',
          'Supported campaign workflows and visibility optimization',
          'Analyzed project requirements with cross-functional team',
          'Contributed to building and launching digital products',
        ],
      },
    ],
    achievements: [
      { metric: 'UI/UX Designs',      desc: 'Assisted in creating and reviewing designs for digital products' },
      { metric: 'Web Components',      desc: 'Developed functional components for web applications' },
      { metric: 'Marketing Strategy',  desc: 'Participated in planning for user engagement and visibility' },
      { metric: 'Cross-functional',    desc: 'Analyzed requirements, tested usability, refined with team' },
    ],
    impact: 'Strengthened practical understanding of how technical development, visual design, and marketing strategy integrate to build and launch effective digital products in a professional environment.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Adobe Photoshop', 'Git', 'UI/UX Design', 'Digital Marketing'],
  },
];

const typeColors = {
  Leadership: { bg: 'rgba(139,158,126,0.1)', text: 'var(--sage-dark)' },
  Internship: { bg: 'rgba(42,42,42,0.07)',   text: 'var(--charcoal)' },
};

function ResponsibilityCard({ item, visible, delay }) {
  return (
    <div
      className={`rounded-xl p-4 border transition-all duration-500 cursor-default group/rc ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        background: 'var(--spa-cream)',
        borderColor: 'rgba(209,220,200,0.6)',
        transitionDelay: delay,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover/rc:bg-sage group-hover/rc:text-white"
          style={{ background: 'rgba(139,158,126,0.12)', color: 'var(--sage)' }}
        >
          {item.icon}
        </div>
        <h4 className="text-xs font-semibold" style={{ color: 'var(--charcoal)' }}>
          {item.title}
        </h4>
      </div>
      <ul className="space-y-1.5">
        {item.items.map((pt, k) => (
          <li key={k} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--sage-light)' }} />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceCard({ exp, index, inView }) {
  const tc = typeColors[exp.type] || typeColors.Internship;
  const cardVisible = inView;

  return (
    <div
      className={`flex gap-6 transition-all duration-700 ${
        cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${150 + index * 200}ms` }}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="timeline-dot mt-1.5" />
        {index === 0 && (
          <div
            className="w-0.5 flex-1 mt-3"
            style={{
              background: 'linear-gradient(to bottom, rgba(139,158,126,0.4), rgba(139,158,126,0.1))',
              minHeight: '80px',
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 bg-white rounded-2xl border mb-10 overflow-hidden"
        style={{
          borderColor: 'rgba(209,220,200,0.5)',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        }}
      >
        {/* Card header */}
        <div className="p-7 pb-5">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-base font-semibold leading-snug" style={{ color: 'var(--charcoal)' }}>
                {exp.role}
              </h3>
              <p className="text-sm font-medium mt-1" style={{ color: 'var(--sage)' }}>
                {exp.org}
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                {exp.location}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-xs px-2.5 py-1 rounded-full font-semibold"
                style={{ background: tc.bg, color: tc.text }}
              >
                {exp.type}
              </span>
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                {exp.period}
              </span>
              {exp.periodNote && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: 'rgba(139,158,126,0.1)', color: 'var(--sage-dark)' }}
                >
                  {exp.periodNote}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {exp.description}
          </p>
        </div>

        {/* Responsibilities sub-cards */}
        <div className="px-7 pb-6">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
            Key Responsibilities
          </p>
          <div className={`grid gap-3 ${exp.responsibilities.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-3'} grid-cols-1 sm:grid-cols-2`}>
            {exp.responsibilities.map((item, ri) => (
              <ResponsibilityCard
                key={ri}
                item={item}
                visible={cardVisible}
                delay={`${300 + index * 200 + ri * 60}ms`}
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div
          className="mx-7 mb-6 rounded-xl p-5"
          style={{ background: 'rgba(139,158,126,0.04)', border: '1px solid rgba(212,165,116,0.2)' }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
            Key Achievements
          </p>
          <div className={`grid gap-3 ${exp.achievements.length <= 2 ? 'grid-cols-2' : 'grid-cols-2'}`}>
            {exp.achievements.map((a, ai) => (
              <div key={ai} className="flex items-start gap-2">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(212,165,116,0.15)' }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="var(--gold)" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--sage)' }}>{a.metric}</div>
                  <div className="text-xs leading-snug mt-0.5" style={{ color: 'var(--text-secondary)' }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools (if any) */}
        {exp.tools.length > 0 && (
          <div className="px-7 mb-5">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--text-secondary)' }}>
              Tools & Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tools.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: '#f0ede9', color: 'var(--text-secondary)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Impact */}
        <div
          className="mx-7 mb-7 px-4 py-3 rounded-xl"
          style={{ borderLeft: '3px solid var(--sage)', background: 'var(--spa-cream)' }}
        >
          <p className="text-xs leading-relaxed italic" style={{ color: 'var(--text-secondary)' }}>
            {exp.impact}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="experience" className="py-28 px-6 bg-spa-white">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">Journey</span>
          <h2 className="section-heading mt-2">Experience & Leadership</h2>
          <p className="mt-3 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            Building real-world skills through leadership roles, internships, and technical challenges.
          </p>
        </div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.org} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

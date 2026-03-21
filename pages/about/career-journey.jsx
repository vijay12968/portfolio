import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';

const phases = [
  {
    id: 1,
    title: 'Building Core Data Skills',
    timeline: '2025 – 2026',
    status: 'current',
    description: 'Developing cross-functional expertise across data engineering, data science, and analytics to be ready for any data role in FinTech.',
    details: [
      'Refactoring Adobe Hackathon project from AI perspective to production-grade data systems perspective',
      'Building a core data engineering project: ETL pipelines, ML integration, analytics dashboards',
      'Demonstrating versatility across Data Engineer, Data Scientist, and Data Analyst paths',
      'Targeting Summer 2026 internship applications with a strong, well-documented project portfolio',
    ],
    milestone: 'Two production-grade data projects complete with documentation',
  },
  {
    id: 2,
    title: 'FinTech Data Role Internship',
    timeline: '2026 – 2027',
    status: 'upcoming',
    description: 'Real-world experience contributing to production data systems at a FinTech organization. Open to Data Engineer, Data Scientist, or Data Analyst roles.',
    details: [
      'Summer 2026 (May–July): Primary internship hunting period — India-based FinTech companies',
      'Winter 2026–27 (Dec–Jan): Fallback internship opportunity — ensures experience before MBA',
      'Target companies: Razorpay, BharatPe, Zepto, Groww, and similar growth-stage FinTechs',
      'Goal: Contribute to a production data system; understand FinTech-specific data challenges',
    ],
    milestone: 'Minimum one FinTech data internship completed before MBA enrollment',
  },
  {
    id: 3,
    title: 'MBA and Strategic Transition',
    timeline: '2027 – 2030',
    status: 'planned',
    description: 'Building strategic thinking, finance fluency, and leadership capabilities to transition from technical specialist to strategic data leader.',
    details: [
      'Focus areas: Finance and Financial Markets, Risk Management, Business Strategy and Leadership',
      'Purpose: Develop the business acumen to lead data teams and make strategic decisions',
      'Build industry network: investors, founders, and senior FinTech professionals',
      'Optional track: Entrepreneurship if planning an independent FinTech venture',
    ],
    milestone: 'MBA complete with finance specialization and clear leadership track',
  },
  {
    id: 4,
    title: 'Leadership in FinTech',
    timeline: '2030 and beyond',
    status: 'planned',
    description: 'Leading data-driven initiatives, teams, and strategy in FinTech organizations, combining technical depth with business fluency.',
    details: [
      'Path A: VP or Director of Data — lead data strategy and engineering teams',
      'Path B: Head of Risk and Analytics — combine ML models with business risk frameworks',
      'Path C: Chief Product Officer — data-informed product decisions at scale',
      'Path D: Founder — build own FinTech venture applying combined expertise',
    ],
    milestone: 'Leadership role with direct impact on data strategy and business outcomes',
  },
];

const statusLabel = { current: 'Current', upcoming: 'Next', planned: 'Planned' };
const statusStyle = {
  current:  { background: '#1F2937', color: '#fff' },
  upcoming: { background: '#E5E7EB', color: '#1F2937' },
  planned:  { background: '#F9FAFB', color: '#6B7280', border: '1px solid #E5E7EB' },
};

export default function CareerJourney() {
  const [expanded, setExpanded] = useState(1);

  return (
    <PageLayout breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Career Journey' }]}>
      <Head>
        <title>Career Journey — Veeraj Thota</title>
        <meta name="description" content="Four-phase career trajectory from data specialist to FinTech leadership." />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>Path Forward</p>
        <h1 className="text-4xl font-bold mb-3" style={{ color: '#1F2937', letterSpacing: '-0.02em' }}>Career Trajectory</h1>
        <p className="mb-12 max-w-lg" style={{ color: '#6B7280' }}>
          Four phases from data specialist to strategic leadership in FinTech. Click each phase to expand.
        </p>

        <div className="space-y-3">
          {phases.map((phase) => (
            <div key={phase.id} style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
              <button
                onClick={() => setExpanded(expanded === phase.id ? null : phase.id)}
                className="w-full px-6 py-5 text-left flex items-start justify-between transition-colors"
                style={{ background: expanded === phase.id ? '#F9FAFB' : '#fff', cursor: 'pointer', border: 'none' }}
              >
                <div className="flex-1 min-w-0 pr-4">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h2 className="text-base font-semibold" style={{ color: '#1F2937' }}>{phase.title}</h2>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded" style={statusStyle[phase.status]}>
                      {statusLabel[phase.status]}
                    </span>
                  </div>
                  <p className="text-xs mb-2" style={{ color: '#9CA3AF' }}>{phase.timeline}</p>
                  <p className="text-sm" style={{ color: '#374151' }}>{phase.description}</p>
                </div>
                <span className="text-xl font-light flex-shrink-0" style={{ color: '#9CA3AF' }}>
                  {expanded === phase.id ? '−' : '+'}
                </span>
              </button>

              {expanded === phase.id && (
                <div className="px-6 py-5" style={{ borderTop: '1px solid #E5E7EB', background: '#F9FAFB' }}>
                  <ul className="space-y-2.5 mb-5">
                    {phase.details.map((d, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: '#374151' }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: '#9CA3AF' }}>—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#6B7280' }}>Milestone</p>
                    <p className="text-sm" style={{ color: '#374151' }}>{phase.milestone}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid #E5E7EB' }}>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            Currently in Phase 1. Internship applications begin May 2026.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="text-sm font-medium px-4 py-2 rounded" style={{ background: '#1F2937', color: '#fff', textDecoration: 'none' }}>
              See Current Projects
            </Link>
            <Link href="/skills/learning-path" className="text-sm font-medium px-4 py-2 rounded" style={{ border: '1px solid #E5E7EB', color: '#1F2937', textDecoration: 'none' }}>
              Learning Path
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

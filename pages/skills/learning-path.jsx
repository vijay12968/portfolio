import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';

const currentLearning = [
  {
    skill: 'Advanced Apache Spark',
    status: 'Intermediate',
    why: 'Data pipeline optimization at scale is a core competency for production data engineering roles. Spark is the industry standard for large-scale batch processing.',
    applying: 'Core data engineering project — building distributed processing pipeline',
    target: 'Q2 2026',
  },
  {
    skill: 'Kubernetes and Container Orchestration',
    status: 'Beginner',
    why: 'Production deployment at scale requires container orchestration. Docker alone is insufficient for multi-service, auto-scaling systems.',
    applying: 'Personal projects after Spark fundamentals are solid',
    target: 'Q3 2026',
  },
  {
    skill: 'Financial Risk Modeling',
    status: 'Beginner',
    why: 'FinTech domain expertise requires understanding how risk models work — credit risk, market risk, fraud detection. Technical skills alone are not enough.',
    applying: 'Self-study: coursework, books, case studies',
    target: 'Q4 2026',
  },
];

const futureFocus = [
  { skill: 'Advanced SQL Optimization', timeline: '2027', context: 'Query performance for large-scale analytics' },
  { skill: 'Apache Kafka (Streaming)', timeline: '2027', context: 'Real-time data pipeline architecture' },
  { skill: 'Product Management Fundamentals', timeline: '2027', context: 'Strategic thinking for leadership path' },
  { skill: 'System Design Patterns', timeline: 'Q1 2027', context: 'Designing scalable distributed systems' },
];

export default function LearningPath() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Skills', href: '/skills' }, { label: 'Learning Path' }]}>
      <Head>
        <title>Learning Path — Veeraj Thota</title>
        <meta name="description" content="Active development areas and future learning priorities. Strategic skill building for data engineering in FinTech." />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Development Areas</p>
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Learning Path</h1>
        <p className="mb-12 max-w-lg" style={{ color: 'var(--color-text-muted)' }}>
          Skills in active development and the reasoning behind prioritization. Learning tied directly to career goals.
        </p>

        {/* Currently Learning */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-text-muted)' }}>Now — Active Learning</p>
          <div className="space-y-4">
            {currentLearning.map((item, i) => (
              <div key={i} className="p-6" style={{ border: '1px solid var(--color-border)', borderRadius: '8px', background: 'var(--color-bg-card)' }}>
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-base font-semibold" style={{ color: 'var(--color-text)' }}>{item.skill}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--color-bg-subtle2)', color: 'var(--color-text-muted)' }}>{item.status}</span>
                    <span className="text-xs" style={{ color: 'var(--color-text-faint)' }}>Target: {item.target}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="pl-3" style={{ borderLeft: '2px solid var(--color-border)' }}>
                    <p className="text-xs font-medium mb-1 uppercase tracking-wide" style={{ color: 'var(--color-text-faint)' }}>Why</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.why}</p>
                  </div>
                  <div className="pl-3" style={{ borderLeft: '2px solid var(--color-border)' }}>
                    <p className="text-xs font-medium mb-1 uppercase tracking-wide" style={{ color: 'var(--color-text-faint)' }}>Applying in</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.applying}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Focus */}
        <section className="mb-16" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-text-muted)' }}>Next 12 Months — Future Focus</p>
          <div className="space-y-3">
            {futureFocus.map((item, i) => (
              <div key={i} className="flex items-start justify-between p-4 gap-4" style={{ border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <div className="pl-3" style={{ borderLeft: '2px solid var(--color-border)' }}>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{item.skill}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-faint)' }}>{item.context}</p>
                </div>
                <span className="text-xs flex-shrink-0" style={{ color: 'var(--color-text-faint)' }}>{item.timeline}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-12" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Philosophy</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>Why a Learning Path Matters</h2>
          <div className="space-y-4">
            {[
              { point: 'Strategic learning over reactive learning', detail: 'Each item on this list is tied to a specific career goal, not picked because it is trending.' },
              { point: 'Self-awareness about gaps', detail: 'Acknowledging what is beginner or in-progress is more useful than inflating proficiency. It drives honest prioritization.' },
              { point: 'Learning tied to application', detail: 'Every skill being actively learned is connected to a project or use case. Abstract learning without application is low-retention.' },
              { point: 'Continuous growth mindset', detail: 'The list evolves as goals evolve. When internship goals shift, the learning list shifts with them.' },
            ].map((item, i) => (
              <div key={i} className="pl-6" style={{ borderLeft: '2px solid var(--color-border)' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{item.point}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="text-sm font-medium px-4 py-2 rounded" style={{ background: 'var(--color-btn-bg)', color: '#fff', textDecoration: 'none' }}>
            See Current Projects
          </Link>
          <Link href="/about" className="text-sm font-medium px-4 py-2 rounded" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none' }}>
            About My Approach
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';
import { experiences } from '../../data/experience';

export default function ExperiencePage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Experience' }]}>
      <Head>
        <title>Experience — Veeraj Thota</title>
        <meta name="description" content="Work experience and leadership roles. CSI Operations Lead and BytesEdge Internship." />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>Background</p>
        <h1 className="text-4xl font-bold mb-3" style={{ color: '#1F2937', letterSpacing: '-0.02em' }}>Experience</h1>
        <p className="mb-12" style={{ color: '#6B7280' }}>Leadership roles and professional internships. Click any role for the full deep-dive.</p>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div key={exp.slug} className="p-6" style={{ border: '1px solid #E5E7EB', borderRadius: '8px', background: '#fff' }}>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div>
                  <h2 className="text-base font-semibold" style={{ color: '#1F2937' }}>{exp.role}</h2>
                  <p className="text-sm mt-0.5" style={{ color: '#6B7280' }}>{exp.orgFull}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{exp.location}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: '#F3F4F6', color: '#374151' }}>{exp.type}</span>
                  <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>{exp.period}</p>
                  {exp.periodNote && <p className="text-xs" style={{ color: '#9CA3AF' }}>{exp.periodNote}</p>}
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>{exp.summary}</p>

              {/* Achievements preview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {exp.achievements.slice(0, 4).map((a, i) => (
                  <div key={i} className="p-3 rounded" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                    <p className="text-base font-bold" style={{ color: '#1F2937' }}>{a.metric}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{a.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`/experience/${exp.slug}`}
                className="text-sm font-medium transition-colors"
                style={{ color: '#1F2937', textDecoration: 'none', borderBottom: '1px solid #1F2937' }}
              >
                Full Role Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';

const education = [
  {
    degree: 'B.Tech — Computer Science and Engineering',
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    location: 'Hyderabad, India',
    period: '2023 – 2027',
    status: 'In Progress',
    metric: '7.7',
    metricLabel: 'CGPA',
    studied: ['Data Structures and Algorithms', 'Database Management Systems', 'Operating Systems', 'Machine Learning', 'Computer Networks', 'Software Engineering'],
  },
  {
    degree: 'Intermediate (Class XII) — MPC',
    institution: 'FIITJEE Saifabad Branch',
    location: 'Hyderabad, India',
    period: '2021 – 2023',
    status: 'Completed',
    metric: '83%',
    metricLabel: 'Percentage',
    studied: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    degree: 'Class X (SSC)',
    institution: 'St Andrews School Old Bowenpally',
    location: 'Hyderabad, India',
    period: '2020 – 2021',
    status: 'Completed',
    metric: '91%',
    metricLabel: 'Percentage',
    studied: ['Mathematics', 'Science', 'English', 'Social Studies', 'Telugu', 'Hindi'],
  },
];

export default function EducationPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Education' }]}>
      <Head>
        <title>Education — Veeraj Thota</title>
        <meta name="description" content="Academic background. B.Tech CSE at GRIET (CGPA 7.7), Intermediate 83%, Class X 91%." />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Academic</p>
        <h1 className="text-4xl font-bold mb-12" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Education</h1>

        <div className="space-y-5">
          {education.map((edu, i) => (
            <div key={i} className="p-6" style={{ border: '1px solid var(--color-border)', borderRadius: '8px', background: 'var(--color-bg-card)' }}>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                <div>
                  <h2 className="text-base font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{edu.degree}</h2>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{edu.institution}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-faint)' }}>{edu.location} · {edu.period}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-2xl font-bold" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>{edu.metric}</span>
                  <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>{edu.metricLabel}</p>
                  <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded" style={{ background: 'var(--color-bg-subtle2)', color: 'var(--color-text-secondary)' }}>{edu.status}</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-faint)' }}>Studied</p>
                <div className="flex flex-wrap gap-2">
                  {edu.studied.map(subject => (
                    <span key={subject} className="text-xs px-2.5 py-1 rounded" style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 flex flex-wrap gap-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          <Link href="/experience" className="text-sm font-medium px-4 py-2 rounded" style={{ background: 'var(--color-btn-bg)', color: '#fff', textDecoration: 'none' }}>
            View Experience
          </Link>
          <Link href="/skills" className="text-sm font-medium px-4 py-2 rounded" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none' }}>
            Technical Skills
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

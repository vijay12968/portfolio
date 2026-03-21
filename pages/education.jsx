import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';

const education = [
  {
    degree: 'B.Tech — Computer Science and Engineering',
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    shortName: 'GRIET, Hyderabad',
    period: '2023 – 2027',
    status: 'In Progress',
    metric: '7.7',
    metricLabel: 'CGPA',
    description: 'Specializing in software engineering and data systems. Core coursework spans algorithms, data structures, databases, operating systems, and machine learning fundamentals.',
    highlights: [
      'Active member and Operations Lead at CSI (Computer Society of India) GRIET Chapter',
      'Participated in Adobe GenSolve Hackathon — top national-level competition',
      'Coursework includes Data Structures, DBMS, Operating Systems, Machine Learning',
      'Projects span data engineering, full-stack development, and ML applications',
    ],
    relevantCourses: ['Data Structures and Algorithms', 'Database Management Systems', 'Operating Systems', 'Machine Learning', 'Computer Networks', 'Software Engineering'],
  },
  {
    degree: 'Intermediate (Class XII) — MPC',
    institution: 'Narayana Junior College',
    shortName: 'Hyderabad, India',
    period: '2021 – 2023',
    status: 'Completed',
    metric: '83%',
    metricLabel: 'Percentage',
    description: 'Mathematics, Physics, Chemistry stream. Strong foundation in analytical reasoning and quantitative methods.',
    highlights: [
      'Mathematics, Physics, Chemistry (MPC) specialization',
      'Built foundation in analytical reasoning and problem-solving',
    ],
    relevantCourses: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    degree: 'Class X (SSC)',
    institution: 'Narayana School',
    shortName: 'Hyderabad, India',
    period: '2020 – 2021',
    status: 'Completed',
    metric: '91%',
    metricLabel: 'Percentage',
    description: 'Secondary School Certificate. Strong academic performance across core subjects.',
    highlights: [
      'Strong performance across core academic subjects',
    ],
    relevantCourses: ['Mathematics', 'Science', 'English'],
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
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Education</h1>
        <p className="mb-12" style={{ color: 'var(--color-text-muted)' }}>Academic background and coursework relevant to data engineering and software development.</p>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="p-6" style={{ border: '1px solid var(--color-border)', borderRadius: '8px', background: 'var(--color-bg-card)' }}>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                <div>
                  <h2 className="text-base font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{edu.degree}</h2>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{edu.institution}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-faint)' }}>{edu.shortName}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="mb-1">
                    <span className="text-2xl font-bold" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>{edu.metric}</span>
                    <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>{edu.metricLabel}</p>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: 'var(--color-bg-subtle2)', color: 'var(--color-text-secondary)' }}>{edu.status}</span>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-faint)' }}>{edu.period}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>{edu.description}</p>

              {edu.highlights.length > 0 && (
                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-text-faint)' }}>Highlights</p>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-text-faint)' }}>—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-text-faint)' }}>Relevant Courses</p>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map(course => (
                    <span key={course} className="text-xs px-2.5 py-1 rounded" style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>
                      {course}
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

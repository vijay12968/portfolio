import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';
import { experiences, getExperienceBySlug } from '../../data/experience';

export async function getStaticPaths() {
  return {
    paths: experiences.map(e => ({ params: { slug: e.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const exp = getExperienceBySlug(params.slug);
  if (!exp) return { notFound: true };
  return { props: { exp } };
}

export default function ExperienceDetail({ exp }) {
  return (
    <PageLayout breadcrumbs={[{ label: 'Experience', href: '/experience' }, { label: exp.role }]}>
      <Head>
        <title>{exp.role} — {exp.org} — Veeraj Thota</title>
        <meta name="description" content={exp.summary} />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-14">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: 'var(--color-bg-subtle2)', color: 'var(--color-text-muted)' }}>{exp.type}</span>
            {exp.periodNote && <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: 'var(--color-bg-subtle2)', color: 'var(--color-text-muted)' }}>{exp.periodNote}</span>}
          </div>
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>{exp.role}</h1>
          <p className="text-lg mb-1" style={{ color: 'var(--color-text-muted)' }}>{exp.orgFull}</p>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-faint)' }}>{exp.period} · {exp.location}</p>
          <p className="leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>{exp.description}</p>
        </div>

        {/* Quantified Achievements */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-text-muted)' }}>Key Achievements</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {exp.achievements.map((a, i) => (
              <div key={i} className="p-5" style={{ border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <p className="text-2xl font-bold mb-1" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>{a.metric}</p>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-secondary)' }}>{a.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-faint)' }}>{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsibilities */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-text-muted)' }}>Responsibilities</p>
          <div className="space-y-8">
            {exp.responsibilities.map((area, i) => (
              <div key={i}>
                <h2 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-text)' }}>{area.area}</h2>
                <ul className="space-y-2.5">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-text-faint)' }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-text-muted)' }}>Challenges and Lessons</p>
          <div className="space-y-5">
            {exp.challenges.map((item, i) => (
              <div key={i} className="pl-6" style={{ borderLeft: '2px solid var(--color-border)' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{item.challenge}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.lesson}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Skills Demonstrated</p>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map(skill => (
              <span key={skill} className="text-sm px-3 py-1 rounded" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {exp.tools && exp.tools.length > 0 && (
          <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Tools Used</p>
            <div className="flex flex-wrap gap-2">
              {exp.tools.map(tool => (
                <span key={tool} className="text-sm px-3 py-1 rounded" style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>
                  {tool}
                </span>
              ))}
            </div>
          </section>
        )}

        <div className="pt-8 flex flex-wrap gap-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          <Link href="/experience" className="text-sm font-medium px-4 py-2 rounded" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none' }}>
            All Experience
          </Link>
          <Link href="/skills/learning-path" className="text-sm font-medium" style={{ color: 'var(--color-text)', textDecoration: 'underline', alignSelf: 'center' }}>
            View Learning Path
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PageLayout from '../../components/PageLayout';
import { projects, getProjectBySlug } from '../../data/projects';

export async function getStaticPaths() {
  return {
    paths: projects.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
}

export default function ProjectDetail({ project }) {
  const related = projects.filter(p => p.slug !== project.slug).slice(0, 2);

  return (
    <PageLayout breadcrumbs={[{ label: 'Projects', href: '/projects' }, { label: project.shortTitle }]}>
      <Head>
        <title>{project.shortTitle} — Veeraj Thota</title>
        <meta name="description" content={project.summary} />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-14">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map(cat => (
              <span key={cat} className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: 'var(--color-bg-subtle2)', color: 'var(--color-text-muted)' }}>
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>{project.title}</h1>
          <p className="text-lg mb-6" style={{ color: 'var(--color-text-muted)' }}>{project.summary}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-2.5 py-1 rounded" style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium px-4 py-2 rounded" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none' }}>
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Problem */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>01 — Problem</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>The Challenge</h2>
          <p className="leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{project.problem}</p>
          <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{project.problemContext}</p>
        </section>

        {/* Solution */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>02 — Approach</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>How I Approached It</h2>
          <p className="leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>{project.solution}</p>

          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Architecture</p>
          <ul className="space-y-3">
            {project.architecture.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span className="flex-shrink-0 font-mono text-xs mt-0.5" style={{ color: 'var(--color-text-faint)' }}>{String(i+1).padStart(2,'0')}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Reasons */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>03 — Technology</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>Technology Choices and Why</h2>
          <div className="space-y-4">
            {project.techReasons.map((item, i) => (
              <div key={i} className="p-5" style={{ border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{item.tech}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>04 — Challenges</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>Obstacles and Solutions</h2>
          <div className="space-y-5">
            {project.challenges.map((item, i) => (
              <div key={i} className="pl-6" style={{ borderLeft: '2px solid var(--color-border)' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{item.challenge}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>05 — Results</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>Outcomes</h2>
          <ul className="space-y-3">
            {project.results.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-text-faint)' }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Learnings */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>06 — Learnings</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>What I Learned</h2>
          <ul className="space-y-3">
            {project.learnings.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-text-faint)' }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-14" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Skills Used</p>
          <div className="flex flex-wrap gap-2">
            {project.skillsUsed.map(skill => (
              <Link key={skill} href="/skills" className="text-sm px-3 py-1 rounded transition-colors" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                {skill}
              </Link>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        <section style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-text-muted)' }}>Other Projects</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map(p => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="p-5 rounded-lg block transition-colors" style={{ border: '1px solid var(--color-border)', textDecoration: 'none' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{p.shortTitle}</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{p.summary.slice(0, 90)}...</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}

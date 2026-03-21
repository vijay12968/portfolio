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
              <span key={cat} className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: '#F3F4F6', color: '#6B7280' }}>
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1F2937', letterSpacing: '-0.02em' }}>{project.title}</h1>
          <p className="text-lg mb-6" style={{ color: '#6B7280' }}>{project.summary}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-2.5 py-1 rounded" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#374151' }}>
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium px-4 py-2 rounded" style={{ border: '1px solid #E5E7EB', color: '#1F2937', textDecoration: 'none' }}>
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Problem */}
        <section className="mb-14" style={{ borderTop: '1px solid #E5E7EB', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>01 — Problem</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>The Challenge</h2>
          <p className="leading-relaxed mb-4" style={{ color: '#374151' }}>{project.problem}</p>
          <p className="leading-relaxed" style={{ color: '#6B7280' }}>{project.problemContext}</p>
        </section>

        {/* Solution */}
        <section className="mb-14" style={{ borderTop: '1px solid #E5E7EB', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>02 — Approach</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>How I Approached It</h2>
          <p className="leading-relaxed mb-8" style={{ color: '#374151' }}>{project.solution}</p>

          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>Architecture</p>
          <ul className="space-y-3">
            {project.architecture.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm" style={{ color: '#374151' }}>
                <span className="flex-shrink-0 font-mono text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{String(i+1).padStart(2,'0')}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Reasons */}
        <section className="mb-14" style={{ borderTop: '1px solid #E5E7EB', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>03 — Technology</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Technology Choices and Why</h2>
          <div className="space-y-4">
            {project.techReasons.map((item, i) => (
              <div key={i} className="p-5" style={{ border: '1px solid #E5E7EB', borderRadius: '8px' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#1F2937' }}>{item.tech}</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-14" style={{ borderTop: '1px solid #E5E7EB', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>04 — Challenges</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Obstacles and Solutions</h2>
          <div className="space-y-5">
            {project.challenges.map((item, i) => (
              <div key={i} className="pl-6" style={{ borderLeft: '2px solid #E5E7EB' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#1F2937' }}>{item.challenge}</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-14" style={{ borderTop: '1px solid #E5E7EB', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>05 — Results</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Outcomes</h2>
          <ul className="space-y-3">
            {project.results.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm" style={{ color: '#374151' }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: '#9CA3AF' }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Learnings */}
        <section className="mb-14" style={{ borderTop: '1px solid #E5E7EB', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>06 — Learnings</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>What I Learned</h2>
          <ul className="space-y-3">
            {project.learnings.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#374151' }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: '#9CA3AF' }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-14" style={{ borderTop: '1px solid #E5E7EB', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>Skills Used</p>
          <div className="flex flex-wrap gap-2">
            {project.skillsUsed.map(skill => (
              <Link key={skill} href="/skills" className="text-sm px-3 py-1 rounded transition-colors" style={{ border: '1px solid #E5E7EB', color: '#374151', textDecoration: 'none' }}>
                {skill}
              </Link>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        <section style={{ borderTop: '1px solid #E5E7EB', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B7280' }}>Other Projects</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map(p => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="p-5 rounded-lg block transition-colors" style={{ border: '1px solid #E5E7EB', textDecoration: 'none' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#1F2937' }}>{p.shortTitle}</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>{p.summary.slice(0, 90)}...</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}

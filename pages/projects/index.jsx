import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';
import { projects } from '../../data/projects';

const allCategories = ['All', 'Data Engineering', 'ML/AI', 'Full-Stack', 'Hackathon'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <PageLayout breadcrumbs={[{ label: 'Projects' }]}>
      <Head>
        <title>Projects — Veeraj Thota</title>
        <meta name="description" content="Data engineering, ML, and full-stack projects with deep case studies." />
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Work</p>
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Projects</h1>
        <p className="mb-10" style={{ color: 'var(--color-text-muted)' }}>Data engineering, machine learning, and full-stack applications. Click any project for the full case study.</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="text-sm font-medium px-4 py-1.5 rounded transition-colors"
              style={{
                background: activeFilter === cat ? 'var(--color-btn-bg)' : 'var(--color-bg-subtle)',
                color: activeFilter === cat ? '#fff' : 'var(--color-text-muted)',
                border: activeFilter === cat ? '1px solid var(--color-btn-bg)' : '1px solid var(--color-border)',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
          <span className="ml-2 text-sm self-center" style={{ color: 'var(--color-text-faint)' }}>
            Showing {filtered.length} of {projects.length}
          </span>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col transition-colors"
              style={{ border: '1px solid var(--color-border)', borderRadius: '8px', background: 'var(--color-bg-card)', overflow: 'hidden' }}
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.category.slice(0, 2).map(cat => (
                      <span key={cat} className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: 'var(--color-bg-subtle2)', color: 'var(--color-text-muted)' }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-medium" style={{ color: 'var(--color-text-faint)' }}>{project.status}</span>
                </div>

                <h2 className="text-base font-semibold mb-3" style={{ color: 'var(--color-text)' }}>{project.shortTitle}</h2>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--color-text-muted)' }}>{project.summary}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--color-bg-subtle)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid var(--color-bg-subtle2)' }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium transition-colors"
                    style={{ color: 'var(--color-text)', textDecoration: 'none', borderBottom: '1px solid var(--color-text)' }}
                  >
                    View Case Study
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors"
                    style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center" style={{ color: 'var(--color-text-faint)' }}>
            <p className="text-sm">No projects in this category.</p>
            <button onClick={() => setActiveFilter('All')} className="mt-3 text-sm font-medium" style={{ color: 'var(--color-text)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
              Show all projects
            </button>
          </div>
        )}

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
          <a
            href="https://github.com/vijay12968"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
            style={{ color: 'var(--color-text)', textDecoration: 'underline' }}
          >
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </PageLayout>
  );
}

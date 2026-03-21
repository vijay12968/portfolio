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
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>Work</p>
        <h1 className="text-4xl font-bold mb-3" style={{ color: '#1F2937', letterSpacing: '-0.02em' }}>Projects</h1>
        <p className="mb-10" style={{ color: '#6B7280' }}>Data engineering, machine learning, and full-stack applications. Click any project for the full case study.</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="text-sm font-medium px-4 py-1.5 rounded transition-colors"
              style={{
                background: activeFilter === cat ? '#1F2937' : '#F9FAFB',
                color: activeFilter === cat ? '#fff' : '#6B7280',
                border: activeFilter === cat ? '1px solid #1F2937' : '1px solid #E5E7EB',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
          <span className="ml-2 text-sm self-center" style={{ color: '#9CA3AF' }}>
            Showing {filtered.length} of {projects.length}
          </span>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col transition-colors"
              style={{ border: '1px solid #E5E7EB', borderRadius: '8px', background: '#fff', overflow: 'hidden' }}
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.category.slice(0, 2).map(cat => (
                      <span key={cat} className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: '#F3F4F6', color: '#6B7280' }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-medium" style={{ color: '#9CA3AF' }}>{project.status}</span>
                </div>

                <h2 className="text-base font-semibold mb-3" style={{ color: '#1F2937' }}>{project.shortTitle}</h2>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#6B7280' }}>{project.summary}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded" style={{ background: '#F9FAFB', color: '#6B7280', border: '1px solid #E5E7EB' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid #F3F4F6' }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium transition-colors"
                    style={{ color: '#1F2937', textDecoration: 'none', borderBottom: '1px solid #1F2937' }}
                  >
                    View Case Study
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors"
                    style={{ color: '#6B7280', textDecoration: 'none' }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center" style={{ color: '#9CA3AF' }}>
            <p className="text-sm">No projects in this category.</p>
            <button onClick={() => setActiveFilter('All')} className="mt-3 text-sm font-medium" style={{ color: '#1F2937', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
              Show all projects
            </button>
          </div>
        )}

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid #E5E7EB' }}>
          <a
            href="https://github.com/vijay12968"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
            style={{ color: '#1F2937', textDecoration: 'underline' }}
          >
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </PageLayout>
  );
}

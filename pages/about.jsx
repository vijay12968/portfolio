import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';

export default function About() {
  return (
    <PageLayout breadcrumbs={[{ label: 'About' }]}>
      <Head>
        <title>About — Veeraj Thota</title>
        <meta name="description" content="B.Tech CSE student at GRIET, Hyderabad. Focused on data engineering and FinTech." />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Intro */}
        <section className="mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Introduction</p>
          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Who I Am</h1>
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)', maxWidth: '640px' }}>
            I am a 3rd-year B.Tech Computer Science student at GRIET, Hyderabad. My focus is on data engineering and FinTech — building systems that move, transform, and extract value from data.
          </p>
          <p className="leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)', maxWidth: '640px' }}>
            I work across the full data stack: pipeline architecture, machine learning, analytics, and full-stack development. My goal is to intern at a FinTech company in a data role, gain production experience, and build toward a leadership position at the intersection of data and finance.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/about/career-journey" className="text-sm font-medium px-4 py-2 rounded" style={{ background: 'var(--color-btn-bg)', color: '#fff', textDecoration: 'none' }}>
              Career Trajectory
            </Link>
            <Link href="/projects" className="text-sm font-medium px-4 py-2 rounded" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none' }}>
              View Projects
            </Link>
          </div>
        </section>

        {/* Current Work */}
        <section className="mb-20" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '64px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Now</p>
          <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>What I Am Working On</h2>
          <p className="mb-10" style={{ color: 'var(--color-text-muted)' }}>Active projects and current learning priorities. Updated as of March 2026.</p>

          <div className="space-y-6">
            <div className="p-6 rounded-lg" style={{ border: '1px solid var(--color-border)' }}>
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold" style={{ color: 'var(--color-text)' }}>Adobe Hackathon Project — Data System Optimization</h3>
                <span className="text-xs font-semibold px-2 py-1 rounded" style={{ background: 'var(--color-bg-subtle2)', color: 'var(--color-text-secondary)' }}>In Progress</span>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>Refactoring the PDF Intelligence pipeline to demonstrate production-grade data engineering thinking: ETL perspective, observability, and scalable architecture design.</p>
              <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>Timeline: Completing next 2–3 weeks &nbsp;|&nbsp; Purpose: FinTech recruiter-ready data engineering showcase</p>
            </div>

            <div className="p-6 rounded-lg" style={{ border: '1px solid var(--color-border)' }}>
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold" style={{ color: 'var(--color-text)' }}>Data Engineering Core Skills Project</h3>
                <span className="text-xs font-semibold px-2 py-1 rounded" style={{ background: 'var(--color-bg-subtle2)', color: 'var(--color-text-secondary)' }}>Building</span>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>Building a ground-up data project covering ingestion, transformation, ML integration, and analytics dashboards. Designed to demonstrate versatility across Data Engineer, Data Scientist, and Data Analyst roles.</p>
              <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>Timeline: Through April 2026 &nbsp;|&nbsp; Target: FinTech internship applications Summer 2026</p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Currently Learning</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { topic: 'Advanced Apache Spark',   context: 'Pipeline optimization at scale' },
                { topic: 'Kubernetes Fundamentals', context: 'Production container orchestration' },
                { topic: 'Financial Risk Modeling', context: 'FinTech domain expertise' },
              ].map((item, i) => (
                <div key={i} className="pl-3" style={{ borderLeft: '2px solid var(--color-border)' }}>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{item.topic}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-faint)' }}>{item.context}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/skills/learning-path" className="text-sm font-medium" style={{ color: 'var(--color-text)', textDecoration: 'underline' }}>
                View full learning path
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Profile Download */}
        <section style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>Quick Profile</p>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>One-page summary — print to PDF from browser</p>
            </div>
            <a
              href="/downloads/Veeraj_Quick_Profile.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded"
              style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none', background: 'var(--color-bg-card)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              View One-Pager
            </a>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}

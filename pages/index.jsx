import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SiteNavigation from '../components/SiteNavigation';
import Footer from '../components/Footer';
import SchemaMarkup from '../components/SchemaMarkup';

const navCards = [
  { href: '/about',      label: 'About',      description: 'Background, approach, and what I\'m currently working on.' },
  { href: '/projects',   label: 'Projects',   description: 'Case studies with problem, solution, tech choices, and outcomes.' },
  { href: '/skills',     label: 'Skills',     description: 'Technical skills with proficiency levels and project context.' },
  { href: '/experience', label: 'Experience', description: 'Quantified achievements from leadership roles and internships.' },
  { href: '/education',  label: 'Education',  description: 'B.Tech CSE at GRIET. CGPA 7.7. Graduation 2027.' },
  { href: '/contact',    label: 'Contact',    description: 'Available for internships from mid-2026. Based in Hyderabad.' },
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <SchemaMarkup />
      <Head>
        <title>Veeraj Thota — Data Engineer, Scientist & Analyst</title>
        <meta name="description" content="Portfolio of Veeraj Thota. B.Tech CSE student at GRIET. Focused on data engineering, data science, and FinTech. Seeking internships from mid-2026." />
      </Head>

      <SiteNavigation />

      <main style={{ flex: 1, paddingTop: '65px' }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Hero layout */}
          <div className="flex items-start justify-between gap-10 flex-wrap mb-12">
            <div style={{ flex: '1 1 320px' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-text-muted)' }}>Portfolio</p>
              <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                Veeraj Thota
              </h1>
              <p className="text-xl mb-3" style={{ color: 'var(--color-text-muted)' }}>Aspiring Data Engineer, Scientist & Analyst</p>
              <p className="text-base mb-4" style={{ color: 'var(--color-text-faint)', lineHeight: '1.7', maxWidth: '420px' }}>
                B.Tech CSE student at GRIET, Hyderabad. Building toward a career in data engineering and FinTech.
                3 years programming experience across Python, SQL, and data systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: 'English', note: 'Studied in English' },
                  { lang: 'Telugu',  note: 'Native' },
                  { lang: 'Hindi',   note: 'Street fluency' },
                ].map(({ lang, note }) => (
                  <span key={lang} style={{ fontSize: '11px', padding: '3px 10px', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-muted)' }}>
                    {lang} <span style={{ color: 'var(--color-text-faint)' }}>· {note}</span>
                  </span>
                ))}
              </div>
            </div>
            <div style={{ flexShrink: 0 }}>
              <img
                src="/self.jpeg"
                alt="Veeraj Thota"
                style={{ width: '210px', height: '210px', borderRadius: '8px', objectFit: 'cover', objectPosition: 'top', border: '1px solid var(--color-border)', display: 'block' }}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-20">
            <Link href="/projects" className="text-sm font-medium px-5 py-2.5 rounded" style={{ background: 'var(--color-btn-bg)', color: '#fff', textDecoration: 'none' }}>
              View Projects
            </Link>
            <Link href="/about" className="text-sm font-medium px-5 py-2.5 rounded" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none' }}>
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium px-5 py-2.5 rounded" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none' }}>
              Contact
            </Link>
          </div>

          {/* Navigation Cards */}
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '48px' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: 'var(--color-text-muted)' }}>Explore</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {navCards.map(card => (
                <Link
                  key={card.href}
                  href={card.href}
                  style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '20px', textDecoration: 'none', display: 'block', background: 'var(--color-bg-card)', transition: 'border-color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-text-faint)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <p className="text-sm font-semibold mb-1.5" style={{ color: 'var(--color-text)' }}>{card.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-faint)' }}>{card.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

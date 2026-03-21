import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/about',      label: 'About' },
  { href: '/projects',   label: 'Projects' },
  { href: '/skills',     label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/education',  label: 'Education' },
  { href: '/contact',    label: 'Contact' },
];

export default function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => router.pathname === href || router.pathname.startsWith(href + '/');

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300`}
      style={{
        background: scrolled ? 'rgba(250,250,250,0.97)' : 'rgba(255,255,255,0.97)',
        borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
        backdropFilter: 'blur(12px)',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-widest transition-colors duration-200"
          style={{ color: '#1F2937', textDecoration: 'none', letterSpacing: '0.08em' }}
        >
          VEERAJ THOTA
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: isActive(link.href) ? '#1F2937' : '#6B7280',
                textDecoration: 'none',
                borderBottom: isActive(link.href) ? '1px solid #1F2937' : '1px solid transparent',
                paddingBottom: '2px',
              }}
              onMouseEnter={e => { if (!isActive(link.href)) { e.currentTarget.style.color = '#1F2937'; } }}
              onMouseLeave={e => { if (!isActive(link.href)) { e.currentTarget.style.color = '#6B7280'; } }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="/resumes/Veeraj_1.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded transition-colors duration-200"
          style={{ border: '1px solid #E5E7EB', color: '#1F2937', textDecoration: 'none', background: '#fff' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F9FAFB'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Resume
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 cursor-pointer"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          style={{ background: 'none', border: 'none', color: '#1F2937' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-1" style={{ borderTop: '1px solid #E5E7EB', background: '#fff' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2.5 text-sm font-medium transition-colors duration-200"
              style={{
                color: isActive(link.href) ? '#1F2937' : '#6B7280',
                textDecoration: 'none',
                borderBottom: '1px solid #F3F4F6',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resumes/Veeraj_1.pdf"
            download
            className="block mt-3 text-center text-sm font-medium py-2.5 rounded"
            style={{ border: '1px solid #E5E7EB', color: '#1F2937', textDecoration: 'none' }}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

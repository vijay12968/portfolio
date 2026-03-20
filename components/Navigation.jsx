import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about',       label: 'About' },
  { href: '#projects',    label: 'Projects' },
  { href: '#skills',      label: 'Skills' },
  { href: '#experience',  label: 'Experience' },
  { href: '#resume',      label: 'Resume' },
  { href: '#contact',     label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, '#hero')}
          className="text-base font-semibold tracking-wide text-charcoal hover:text-sage transition-colors duration-200"
          style={{ letterSpacing: '0.08em' }}
        >
          VEERAJ THOTA
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-sm font-medium text-muted hover:text-charcoal gold-underline transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/resumes/Veeraj_1.pdf"
          download
          className="hidden md:inline-flex btn-secondary text-sm py-2 px-5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Resume
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-charcoal cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(250,250,250,0.97)', backdropFilter: 'blur(12px)' }}
      >
        <div className="px-6 py-4 space-y-1 border-t border-sage-light/30">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="block py-3 text-sm font-medium text-muted hover:text-charcoal transition-colors duration-200 border-b border-spa-cream last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resumes/Veeraj_1.pdf"
            download
            className="block mt-4 text-center btn-secondary text-sm py-2.5"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

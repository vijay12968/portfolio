import React from 'react';

const quickLinks = [
  { href: '#about',          label: 'About' },
  { href: '#projects',       label: 'Projects' },
  { href: '#skills',         label: 'Skills' },
  { href: '#experience',     label: 'Experience' },
  { href: '#resume',         label: 'Resume' },
  { href: '#contact',        label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/vijay12968',                   label: 'GitHub',   external: true },
  { href: 'https://linkedin.com/in/veeraj-thota-9463a1290', label: 'LinkedIn', external: true },
  { href: 'mailto:tveeraj311@gmail.com',                     label: 'Email',    external: false },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="py-16 px-6"
      style={{
        background: 'var(--charcoal)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3
              className="text-base font-semibold mb-3 tracking-widest"
              style={{ color: 'white', letterSpacing: '0.08em' }}
            >
              VEERAJ THOTA
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Data Engineer building scalable systems and intelligent pipelines.
              B.Tech CSE, GRIET Hyderabad.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.slice(0, 2).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                  aria-label={s.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(139,158,126,0.25)';
                    e.currentTarget.style.color = 'var(--sage)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  }}
                >
                  {s.label === 'GitHub' ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="text-xs font-semibold mb-4 tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-sm transition-colors duration-200 cursor-pointer"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--sage)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold mb-4 tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Contact
            </p>
            <div className="space-y-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="block text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--sage)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                >
                  {s.label}
                </a>
              ))}
              <span className="block text-sm" style={{ color: 'rgba(255,255,255,0.25)', userSelect: 'none' }}>
                veerajthota42@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2025 Veeraj Thota · Crafted with care
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

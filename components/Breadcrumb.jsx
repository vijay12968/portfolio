import React from 'react';
import Link from 'next/link';

export default function Breadcrumb({ crumbs }) {
  // crumbs: [{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Adobe Hackathon' }]
  return (
    <nav aria-label="Breadcrumb" className="px-6 py-3" style={{ borderBottom: '1px solid #E5E7EB' }}>
      <ol className="max-w-6xl mx-auto flex items-center gap-1 flex-wrap" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link
            href="/"
            className="text-sm transition-colors duration-150"
            style={{ color: '#6B7280', textDecoration: 'none' }}
            onMouseEnter={e => e.target.style.textDecoration = 'underline'}
            onMouseLeave={e => e.target.style.textDecoration = 'none'}
          >
            Portfolio
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            <li style={{ color: '#D1D5DB', fontSize: '0.875rem', userSelect: 'none' }} aria-hidden="true">
              &rsaquo;
            </li>
            <li>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-sm transition-colors duration-150"
                  style={{ color: '#6B7280', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.target.style.textDecoration = 'none'}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-sm font-medium" style={{ color: '#1F2937' }}>
                  {crumb.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}

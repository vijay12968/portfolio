import React, { useState } from 'react';
import Head from 'next/head';
import PageLayout from '../components/PageLayout';

export default function ContactPage() {
  const [emailVisible, setEmailVisible] = useState(false);

  return (
    <PageLayout breadcrumbs={[{ label: 'Contact' }]}>
      <Head>
        <title>Contact — Veeraj Thota</title>
        <meta name="description" content="Get in touch with Veeraj Thota. Available for internship opportunities in data engineering and software development." />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B7280' }}>Get In Touch</p>
        <h1 className="text-4xl font-bold mb-3" style={{ color: '#1F2937', letterSpacing: '-0.02em' }}>Contact</h1>
        <p className="mb-12 max-w-lg" style={{ color: '#6B7280' }}>
          Open to internship opportunities in data engineering, data science, and software development. Currently in third year B.Tech, available from mid-2026.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">

          {/* Email */}
          <div className="p-6" style={{ border: '1px solid #E5E7EB', borderRadius: '8px', background: '#fff' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#9CA3AF' }}>Email</p>
            {emailVisible ? (
              <a
                href="mailto:veerajthota4@gmail.com"
                className="text-sm font-medium"
                style={{ color: '#1F2937', textDecoration: 'none', borderBottom: '1px solid #E5E7EB' }}
              >
                veerajthota4@gmail.com
              </a>
            ) : (
              <button
                onClick={() => setEmailVisible(true)}
                className="text-sm font-medium"
                style={{ color: '#1F2937', background: 'none', border: 'none', cursor: 'pointer', padding: 0, borderBottom: '1px solid #1F2937' }}
              >
                Reveal email address
              </button>
            )}
            <p className="text-xs mt-3" style={{ color: '#9CA3AF' }}>Best for internship inquiries and formal introductions.</p>
          </div>

          {/* LinkedIn */}
          <div className="p-6" style={{ border: '1px solid #E5E7EB', borderRadius: '8px', background: '#fff' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#9CA3AF' }}>LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/veeraj-thota"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
              style={{ color: '#1F2937', textDecoration: 'none', borderBottom: '1px solid #E5E7EB' }}
            >
              linkedin.com/in/veeraj-thota
            </a>
            <p className="text-xs mt-3" style={{ color: '#9CA3AF' }}>Connect for professional networking and opportunities.</p>
          </div>

          {/* GitHub */}
          <div className="p-6" style={{ border: '1px solid #E5E7EB', borderRadius: '8px', background: '#fff' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#9CA3AF' }}>GitHub</p>
            <a
              href="https://github.com/veerajthota"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
              style={{ color: '#1F2937', textDecoration: 'none', borderBottom: '1px solid #E5E7EB' }}
            >
              github.com/veerajthota
            </a>
            <p className="text-xs mt-3" style={{ color: '#9CA3AF' }}>View code, projects, and technical work.</p>
          </div>

          {/* Location */}
          <div className="p-6" style={{ border: '1px solid #E5E7EB', borderRadius: '8px', background: '#fff' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#9CA3AF' }}>Location</p>
            <p className="text-sm font-medium" style={{ color: '#1F2937' }}>Hyderabad, India</p>
            <p className="text-xs mt-3" style={{ color: '#9CA3AF' }}>Open to remote and relocation for the right opportunity.</p>
          </div>
        </div>

        {/* Availability */}
        <section style={{ borderTop: '1px solid #E5E7EB', paddingTop: '48px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B7280' }}>Availability</p>
          <div className="space-y-4">
            {[
              { label: 'Internship Start', value: 'Mid-2026 onwards', note: 'Currently in third year B.Tech (2023–2027)' },
              { label: 'Type', value: 'Full-time internship', note: 'Data engineering, data science, or software development' },
              { label: 'Preference', value: 'FinTech, data-heavy products', note: 'Open to all domains with strong data infrastructure' },
              { label: 'Format', value: 'On-site, hybrid, or remote', note: 'Based in Hyderabad, open to relocation' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 py-3" style={{ borderBottom: '1px solid #F3F4F6' }}>
                <p className="text-xs font-semibold uppercase tracking-wide w-32 flex-shrink-0 pt-0.5" style={{ color: '#9CA3AF' }}>{item.label}</p>
                <div>
                  <p className="text-sm font-medium" style={{ color: '#1F2937' }}>{item.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

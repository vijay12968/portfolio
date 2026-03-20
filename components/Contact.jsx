import React, { useState, useEffect, useRef } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/veeraj-thota-9463a1290',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vijay12968',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView(0.1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const mailto = `mailto:veerajthota42@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: 'linear-gradient(135deg, #f0ebe3 0%, #fafafa 100%)' }}
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`mb-14 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">Reach Out</span>
          <h2
            className="section-heading mt-2"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Let's Create Something Amazing
          </h2>
          <p className="mt-4 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Seeking opportunities in data engineering and FinTech. Open to discussions about projects, collaborations, or just connecting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Contact methods */}
          <div
            className={`space-y-4 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Email button */}
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="w-full flex items-center gap-4 bg-white rounded-xl p-4 border card-hover text-left cursor-pointer"
              style={{ borderColor: 'rgba(209,220,200,0.5)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(139,158,126,0.1)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="var(--sage)" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: 'var(--sage)' }}>Email</div>
                <div className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>
                  {showEmail ? 'veerajthota42@gmail.com' : 'Click to reveal address'}
                </div>
              </div>
            </button>

            {/* Phone button */}
            <button
              onClick={() => setShowPhone(!showPhone)}
              className="w-full flex items-center gap-4 bg-white rounded-xl p-4 border card-hover text-left cursor-pointer"
              style={{ borderColor: 'rgba(209,220,200,0.5)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(212,165,116,0.1)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="var(--gold)" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: '#b8864a' }}>Phone</div>
                <div className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>
                  {showPhone ? '+91 8688301917' : 'Click to reveal number'}
                </div>
              </div>
            </button>

            {/* Social links */}
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="w-full flex items-center gap-4 bg-white rounded-xl p-4 border card-hover"
                style={{ borderColor: 'rgba(209,220,200,0.5)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', textDecoration: 'none' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(42,42,42,0.06)', color: 'var(--charcoal)' }}
                >
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: 'var(--text-secondary)' }}>{link.label}</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>
                    Connect on {link.label}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Contact form */}
          <div
            className={`bg-white rounded-2xl p-8 border transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ borderColor: 'rgba(209,220,200,0.5)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', transitionDelay: '300ms' }}
          >
            <h3 className="text-base font-semibold mb-6" style={{ color: 'var(--charcoal)' }}>
              Send a Message
            </h3>

            {submitted ? (
              <div
                className="text-center py-12 rounded-xl"
                style={{ background: 'rgba(139,158,126,0.08)' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(139,158,126,0.15)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="var(--sage)" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>Message sent!</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>Opening your mail client…</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold mb-1.5 tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="form-input"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold mb-1.5 tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="form-input"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold mb-1.5 tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity…"
                    required
                    className="form-input resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

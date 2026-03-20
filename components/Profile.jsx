import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Profile() {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ background: 'linear-gradient(135deg, #f5f1ed 0%, #fafafa 100%)' }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <div className={`mb-4 transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-label">About</span>
        </div>
        <h2
          className={`section-heading mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Passionate about building<br />
          <span style={{ color: 'var(--sage)' }}>robust data systems</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Photo */}
          <div
            className={`flex justify-center transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl"
                style={{ background: 'var(--sage-light)', opacity: 0.4 }}
              />
              <img
                src="/self.jpeg"
                alt="Veeraj Thota"
                className="relative z-10 rounded-2xl w-full max-w-sm object-cover"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML +=
                    '<div class="relative z-10 rounded-2xl w-full max-w-sm aspect-square flex items-center justify-center" style="background:linear-gradient(135deg,#d1dcc8,#e8ede4)"><span style="color:#6a7d5e">Veeraj Thota</span></div>';
                }}
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-5">
            {[
              {
                delay: '300ms',
                content: (
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    I'm Veeraj Thota, a 3rd-year B.Tech CSE student at <strong style={{ color: 'var(--charcoal)' }}>GRIET Hyderabad</strong> with
                    a strong focus on data engineering and emerging technologies.
                  </p>
                ),
              },
              {
                delay: '400ms',
                content: (
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Recently completed an internship at <strong style={{ color: 'var(--charcoal)' }}>BytesEdge</strong> (Jan – Mar 2026)
                    and serving as Operations Lead. My passion lies in building scalable data
                    systems using Python, SQL, and modern cloud infrastructure.
                  </p>
                ),
              },
              {
                delay: '500ms',
                content: (
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    My expertise spans Apache Spark, Pandas, PostgreSQL, MongoDB, AWS, and Docker.
                    Whether it's building ETL pipelines, optimizing database queries, or deploying
                    ML models — I engineer solutions that stand the test of scale.
                  </p>
                ),
              },
              {
                delay: '600ms',
                content: (
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Actively seeking opportunities in <strong style={{ color: 'var(--charcoal)' }}>FinTech</strong> where I can apply my
                    data engineering skills to build robust, scalable systems.
                  </p>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: item.delay }}
              >
                {item.content}
              </div>
            ))}

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 pt-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{
                transitionDelay: '700ms',
                borderTop: '1px solid rgba(139,158,126,0.2)',
              }}
            >
              {[
                { value: '2+', label: 'Years Coding' },
                { value: '15+', label: 'Projects' },
                { value: '5+', label: 'Tech Stacks' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-semibold" style={{ color: 'var(--charcoal)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-1 font-medium" style={{ color: 'var(--sage)', letterSpacing: '0.05em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

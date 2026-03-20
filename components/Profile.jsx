import React, { useState } from 'react';

export default function Profile() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="profile" className="py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 grid-bg"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side - John Wick styled */}
          <div className="relative group order-2 md:order-1 animate-slide-in-left">
            {/* Neon frame glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-pink-600 to-cyan-500 rounded opacity-20 group-hover:opacity-40 transition duration-500 blur-lg animate-pulse"></div>

            {/* Image container */}
            <div className="relative bg-black p-2 rounded overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-black rounded">
                {/* Try to load main image, fallback to placeholder */}
                <img
                  src={imageError ? "/placeholder.svg" : "/veeraj.jpg"}
                  alt="Veeraj Thota - Data Engineer"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
                {/* Noir overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50 pointer-events-none"></div>

                {/* Neon scan line effect */}
                <div className="absolute inset-0 pointer-events-none animate-scan" style={{
                  backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.1) 25%, rgba(0, 217, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.1) 75%, rgba(0, 217, 255, 0.1) 76%, transparent 77%, transparent)',
                  backgroundSize: '100% 3px',
                }}></div>

                {/* Image upload hint (only shows with placeholder) */}
                {imageError && (
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-cyan-500/50 rounded p-3 text-center">
                    <p className="text-cyan-400 text-xs font-mono">
                      Add your photo: <span className="text-pink-500">/public/veeraj.jpg</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Corner tags with animations */}
            <div className="absolute -bottom-6 -right-6 bg-black border-2 border-cyan-500 px-4 py-2 rounded font-mono text-xs text-cyan-400 backdrop-blur-sm animate-bounce-in stagger-1">
              &lt;ENGINEER&gt;
            </div>
            <div className="absolute -top-6 -left-6 bg-black border-2 border-pink-600 px-4 py-2 rounded font-mono text-xs text-pink-500 backdrop-blur-sm animate-bounce-in stagger-2">
              &lt;DATA&gt;
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-8 order-1 md:order-2 animate-slide-in-right">
            <div className="animate-fade-in-up">
              <h2 className="text-6xl md:text-7xl font-serif font-black mb-4 text-white leading-tight">
                ARCHITECT
                <br />
                <span className="neon-glow-cyan">OF SYSTEMS</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                3rd-year Computer Science engineer from GRIET, Hyderabad. Specializing in building scalable data pipelines with surgical precision.
              </p>
            </div>

            {/* Key metrics - Animated cards */}
            <div className="grid grid-cols-2 gap-8 py-10 border-y border-cyan-500/30">
              {[
                { label: 'CGPA', value: '7.7', sub: 'Excellence', delay: '0' },
                { label: 'Recognition', value: 'Adobe Top 50', sub: '4000+ Teams', delay: '1' },
                { label: 'Projects', value: '5+', sub: 'Production', delay: '2' },
                { label: 'Leadership', value: 'CSI Lead', sub: 'Operations', delay: '3' }
              ].map((metric, idx) => (
                <div key={idx} className={`space-y-2 animate-fade-in-up stagger-${metric.delay}`}>
                  <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest">{metric.label}</p>
                  <p className="text-4xl font-serif font-black text-white">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.sub}</p>
                </div>
              ))}
            </div>

            {/* Certifications with animations */}
            <div className="space-y-4 animate-fade-in-up stagger-4">
              <p className="font-mono text-xs text-gray-500 tracking-widest uppercase">Certifications</p>
              <div className="flex flex-wrap gap-3">
                {['◆ SQL MASTER', '◆ CLOUD ARCHITECT', '◆ ML CERTIFIED'].map((cert, idx) => (
                  <span key={idx} className={`px-4 py-2 border border-cyan-500/60 text-cyan-400 text-xs font-mono rounded hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition animate-scale-in stagger-${idx}`}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Status indicator with pulse animation */}
            <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-6 font-mono text-xs space-y-3 backdrop-blur animate-pulse-glow">
              <div className="flex justify-between text-gray-400">
                <span>➜ System Status</span>
                <span className="text-cyan-400 neon-glow-cyan">OPERATIONAL</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>➜ Location</span>
                <span className="text-cyan-400">Hyderabad, India</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>➜ Mission</span>
                <span className="text-pink-500 neon-glow-pink">SCALE SYSTEMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function Arsenal() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">PRECISION ENGINEERING</p>
          <h2 className="text-6xl md:text-7xl font-serif font-black text-white leading-tight">
            CLASSIC
            <br />
            <span style={{textShadow: '0 0 10px #FF006E, 0 0 20px #FF006E'}} className="text-pink-500">MACHINES</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Like a perfectly tuned Aston Martin, Mercedes, or Mustang—every system I build is engineered for precision,
            performance, and timeless elegance. Data pipelines tuned like engines. Queries executed with intent.
          </p>
        </div>

        {/* Classic cars grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Aston Martin */}
          <div className="group border border-cyan-500/40 p-10 bg-black/40 rounded-lg hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 transition backdrop-blur-sm">
            <div className="text-6xl mb-6">🚗</div>
            <h3 className="text-3xl font-serif font-black mb-3 group-hover:text-cyan-400 transition">ASTON MARTIN</h3>
            <p className="text-gray-400 mb-4 text-sm">British Engineering Excellence</p>
            <p className="font-mono text-xs text-cyan-400">
              Precision. Elegance. Timeless Design.
              <br/>
              Like my data systems: refined and purposeful.
            </p>
          </div>

          {/* Mercedes */}
          <div className="group border border-pink-600/40 p-10 bg-black/40 rounded-lg hover:border-pink-600 hover:shadow-2xl hover:shadow-pink-600/30 transition backdrop-blur-sm">
            <div className="text-6xl mb-6">🏎️</div>
            <h3 className="text-3xl font-serif font-black mb-3 group-hover:text-pink-500 transition">MERCEDES</h3>
            <p className="text-gray-400 mb-4 text-sm">German Engineering Mastery</p>
            <p className="font-mono text-xs text-pink-500">
              Power. Innovation. Excellence.
              <br/>
              Every component optimized for performance.
            </p>
          </div>

          {/* Mustang */}
          <div className="group border border-cyan-500/40 p-10 bg-black/40 rounded-lg hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 transition backdrop-blur-sm">
            <div className="text-6xl mb-6">🐎</div>
            <h3 className="text-3xl font-serif font-black mb-3 group-hover:text-cyan-400 transition">MUSTANG</h3>
            <p className="text-gray-400 mb-4 text-sm">American Raw Power</p>
            <p className="font-mono text-xs text-cyan-400">
              Bold. Strong. Unstoppable.
              <br/>
              Systems built to scale and dominate.
            </p>
          </div>
        </div>

        {/* Philosophy statement */}
        <div className="p-8 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-pink-600/10 rounded-lg backdrop-blur-sm">
          <p className="font-mono text-sm text-gray-300 leading-relaxed">
            <span className="text-cyan-400">// ENGINEERING PHILOSOPHY</span><br/>
            Like the masters who engineered these machines, I build data systems with<br/>
            <span className="text-pink-500 font-bold">precision</span>, <span className="text-cyan-400 font-bold">performance</span>, and timeless elegance.<br/>
            Every pipeline tuned. Every query executed with intent. Every system built to last.
          </p>
        </div>
      </div>
    </section>
  );
}

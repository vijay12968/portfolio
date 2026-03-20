import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-black text-white mb-3">VT</h3>
            <p className="text-gray-400 text-sm font-light">Engineer of precision. Builder of legendary systems.</p>
          </div>

          <div>
            <p className="font-mono text-xs text-gray-600 tracking-widest mb-6 uppercase">Navigation</p>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="#profile" className="block hover:text-cyan-400 transition">PROFILE</a>
              <a href="#projects" className="block hover:text-cyan-400 transition">PROJECTS</a>
              <a href="#arsenal" className="block hover:text-cyan-400 transition">ARSENAL</a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-gray-600 tracking-widest mb-6 uppercase">Connect</p>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="https://github.com/vijay12698" className="block hover:text-cyan-400 transition">GITHUB</a>
              <a href="https://linkedin.com/in/veeraj-thota" className="block hover:text-cyan-400 transition">LINKEDIN</a>
              <a href="mailto:veerajthota42@gmail.com" className="block hover:text-cyan-400 transition">EMAIL</a>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 text-center">
          <p className="font-mono text-xs text-gray-600 tracking-widest">© 2024 VEERAJ THOTA. BUILT WITH PRECISION.</p>
          <p className="font-mono text-xs text-gray-700 mt-3">NEXT.JS • REACT • TAILWIND CSS • JOHN WICK AESTHETIC</p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';

const skillCategories = [
  {
    category: 'DATA ENGINEERING',
    items: ['Python', 'SQL', 'ETL Pipelines', 'Data Architecture', 'RDBMS', 'Distributed Systems'],
    neon: 'cyan'
  },
  {
    category: 'MACHINE LEARNING',
    items: ['Scikit-Learn', 'Pandas', 'NumPy', 'FAISS', 'Model Optimization', 'Feature Engineering'],
    neon: 'pink'
  },
  {
    category: 'SYSTEMS & TOOLS',
    items: ['Streamlit', 'MongoDB', 'Git', 'Docker', 'APIs', 'Visualization'],
    neon: 'cyan'
  },
  {
    category: 'LEADERSHIP',
    items: ['Team Coordination', 'Problem Solving', 'Communication', 'Innovation', 'Strategy', 'Execution'],
    neon: 'pink'
  }
];

export default function Skills() {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimateSkills(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="arsenal" className="py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 grid-bg"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div id="skills-section" className="mb-20 text-center space-y-4">
          <p className="text-pink-500 font-mono text-sm tracking-widest uppercase animate-fade-in-up">Capabilities</p>
          <h2 className="text-6xl md:text-7xl font-serif font-black text-white leading-tight animate-fade-in-up stagger-1">
            TECHNICAL
            <br />
            <span className="neon-glow-cyan">ARSENAL</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`group bg-black/40 border transition-all duration-300 p-8 rounded-lg backdrop-blur-sm transform hover:-translate-y-2 ${
                category.neon === 'cyan'
                  ? 'border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/5'
                  : 'border-pink-600/30 hover:border-pink-600 hover:bg-pink-600/5'
              } ${animateSkills ? `animate-fade-in-up stagger-${idx}` : 'opacity-0'}`}
            >
              <p className={`font-mono text-xs tracking-widest mb-6 uppercase ${category.neon === 'cyan' ? 'text-cyan-400' : 'text-pink-500'}`}>
                {category.category}
              </p>

              <div className="space-y-3">
                {category.items.map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 text-gray-300 text-sm group-hover:text-white transition transform hover:translate-x-1 ${animateSkills ? `animate-fade-in-up stagger-${i}` : 'opacity-0'}`}>
                    <span className={category.neon === 'cyan' ? 'text-cyan-400' : 'text-pink-500'}>◆</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

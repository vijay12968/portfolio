import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

// Fallback projects (manual highlights)
const fallbackProjects = [
  {
    title: 'Adobe Hackathon',
    subtitle: 'Intelligent Document Query System',
    description: 'Semantic search using LLMs and FAISS vector indexing with 95%+ accuracy.',
    type: 'LLM PIPELINE',
    tech: ['Python', 'FAISS', 'PyMuPDF', 'LLM'],
    metrics: ['Round-2 Finalist', '4000+ Teams', '95%+ Accuracy'],
    neon: 'cyan',
    icon: '⚡'
  },
  {
    title: 'AgriConnect',
    subtitle: 'Smart Crop Planner',
    description: 'ML-powered crop recommendations with real-time weather integration.',
    type: 'ML SYSTEM',
    tech: ['Python', 'Streamlit', 'MongoDB', 'APIs'],
    metrics: ['Real-time', 'Multi-model', 'Production'],
    neon: 'pink',
    icon: '🌾'
  },
  {
    title: 'Flight Price Prediction',
    subtitle: 'Regression Analysis Engine',
    description: 'Advanced feature engineering with real-time price prediction interface.',
    type: 'DATA SCIENCE',
    tech: ['Python', 'Pandas', 'Scikit-Learn'],
    metrics: ['Feature Eng', 'Live Prediction', 'Production UI'],
    neon: 'cyan',
    icon: '✈️'
  }
];

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const [dataSource, setDataSource] = useState('fallback');

  // Fetch projects from GitHub API
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/github/repos');

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const result = await response.json();

        if (result.data && result.data.length > 0) {
          // Use top 6 projects (or all if less than 6)
          const topProjects = result.data.slice(0, 6);
          setProjects(topProjects);
          setDataSource(result.source || 'api');
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
        // Keep fallback projects
        setDataSource('fallback');
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimateCards(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 grid-bg"></div>
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-cyan-500 rounded-full mix-blend-color-dodge filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-0 -right-96 w-96 h-96 bg-pink-600 rounded-full mix-blend-color-dodge filter blur-3xl opacity-5 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header with animations */}
        <div id="projects-section" className="mb-20 text-center space-y-4">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase animate-fade-in-up">Signature Systems</p>
          <h2 className="text-6xl md:text-7xl font-serif font-black text-white leading-tight animate-fade-in-up stagger-1">
            PROJECTS
            <br />
            <span className="neon-glow-pink">ARSENAL</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up stagger-2">Production-ready systems built with precision</p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner />
            <p className="ml-4 text-gray-400 font-mono text-sm">Loading projects from GitHub...</p>
          </div>
        )}

        {/* Projects grid with staggered animations */}
        {!loading && (
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <a
                href={project.url || '#'}
                target={project.url ? '_blank' : '_self'}
                rel={project.url ? 'noopener noreferrer' : ''}
                key={idx}
                className={`group relative bg-black/40 border transition-all duration-300 overflow-hidden backdrop-blur-sm rounded-lg p-8 transform cursor-pointer ${
                  project.neon === 'cyan'
                    ? 'border-cyan-500/40 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2'
                    : 'border-pink-600/40 hover:border-pink-600 hover:shadow-2xl hover:shadow-pink-600/30 hover:-translate-y-2'
                } ${animateCards ? `animate-fade-in-up stagger-${idx}` : 'opacity-0'}`}
              >
              {/* Glow effect */}
              <div className={`absolute -inset-1 ${project.neon === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-transparent' : 'bg-gradient-to-r from-pink-600 to-transparent'} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur pointer-events-none`}></div>

              {/* Content with animations */}
              <div className="relative space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-5xl animate-bounce-in">{project.icon}</span>
                  <span className={`font-mono text-xs tracking-widest uppercase px-3 py-1 rounded animate-scale-in ${project.neon === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-pink-600/20 text-pink-500'}`}>
                    {project.type}
                  </span>
                </div>

                <div>
                  <h3 className={`text-2xl font-serif font-black mb-1 transition ${project.neon === 'cyan' ? 'group-hover:text-cyan-400' : 'group-hover:text-pink-500'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm font-mono ${project.neon === 'cyan' ? 'text-cyan-400/70' : 'text-pink-500/70'}`}>
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                {/* Tech stack with hover animation */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className={`px-2 py-1 text-xs font-mono rounded transition transform hover:scale-110 ${project.neon === 'cyan' ? 'bg-cyan-500/15 text-cyan-400' : 'bg-pink-600/15 text-pink-500'}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metrics with animations */}
                <div className={`border-t ${project.neon === 'cyan' ? 'border-cyan-500/20' : 'border-pink-600/20'} pt-4 space-y-2`}>
                  {project.metrics.map((metric, i) => (
                    <p key={i} className={`text-xs font-mono animate-fade-in-up stagger-${i} ${project.neon === 'cyan' ? 'text-cyan-400' : 'text-pink-500'}`}>
                      ◆ {metric}
                    </p>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        )}

        {/* Data source indicator */}
        {!loading && (
          <div className="mt-12 text-center">
            <p className="text-xs font-mono text-gray-500">
              {dataSource === 'github_api' && '◆ Live from GitHub API'}
              {dataSource === 'cache' && '◆ Cached from GitHub (refreshes daily)'}
              {dataSource === 'stale_cache' && '◆ Cached (API temporarily unavailable)'}
              {dataSource === 'fallback' && '◆ Featured Projects (API unavailable)'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

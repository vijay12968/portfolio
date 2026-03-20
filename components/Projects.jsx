import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

// Fallback projects
const fallbackProjects = [
  {
    title: 'Adobe Hackathon - Document Query System',
    description: 'Intelligent document query system using LLMs and FAISS vector indexing with 95%+ accuracy. Round-2 Finalist out of 4000+ teams.',
    tech: ['Python', 'FAISS', 'PyMuPDF', 'LLM'],
    url: 'https://github.com/vijay12968'
  },
  {
    title: 'AgriConnect - Smart Crop Planner',
    description: 'ML-powered crop recommendations with real-time weather integration. Multi-model production system.',
    tech: ['Python', 'Streamlit', 'MongoDB', 'APIs'],
    url: 'https://github.com/vijay12968'
  },
  {
    title: 'Flight Price Prediction Engine',
    description: 'Advanced feature engineering with real-time price prediction interface using regression analysis.',
    tech: ['Python', 'Pandas', 'Scikit-Learn'],
    url: 'https://github.com/vijay12968'
  }
];

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/github/repos');
        if (!response.ok) throw new Error('Failed to fetch');

        const result = await response.json();
        if (result.data && result.data.length > 0) {
          const topProjects = result.data.slice(0, 3).map(project => ({
            title: project.title,
            description: project.description || project.subtitle,
            tech: project.tech || [],
            url: project.url || 'https://github.com/vijay12968'
          }));
          setProjects(topProjects);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Projects
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Featured projects showcasing data engineering, machine learning, and full-stack development
        </p>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Project Title */}
                <h3 className="text-xl font-bold text-black mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/vijay12968"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-transparent border-2 border-black text-black font-medium transition-all duration-300 hover:bg-black hover:text-white"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

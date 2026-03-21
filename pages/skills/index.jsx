import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Python', level: 'Intermediate, progressing to Advanced', projects: ['Adobe Hackathon', 'AgriConnect', 'Airline Fare Prediction'] },
      { name: 'SQL', level: 'Intermediate, progressing to Advanced', projects: ['AgriConnect', 'Data Engineering projects'] },
      { name: 'JavaScript', level: 'Beginner', projects: ['AgriConnect'] },
      { name: 'Java', level: 'Intermediate', projects: ['Academic coursework'] },
    ],
  },
  {
    id: 'data-ml',
    label: 'Data and ML',
    skills: [
      { name: 'Pandas', level: 'Basic, progressing to Intermediate', projects: ['Adobe Hackathon', 'Airline Fare Prediction'] },
      { name: 'Scikit-Learn', level: 'Basic, progressing to Intermediate', projects: ['Airline Fare Prediction'] },
      { name: 'TensorFlow', level: 'Basic, progressing to Intermediate', projects: ['Coursework and personal projects'] },
      { name: 'FAISS', level: 'Basic, progressing to Intermediate', projects: ['Adobe Hackathon'] },
      { name: 'Apache Spark', level: 'Basic, progressing to Intermediate', projects: ['Self-study, active learning'] },
    ],
  },
  {
    id: 'backend',
    label: 'Backend and APIs',
    skills: [
      { name: 'FastAPI', level: 'Beginner', projects: ['Adobe Hackathon'] },
      { name: 'Node.js', level: 'Beginner', projects: ['AgriConnect'] },
      { name: 'PostgreSQL', level: 'Beginner', projects: ['Side projects'] },
      { name: 'MongoDB', level: 'Beginner', projects: ['AgriConnect'] },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', level: 'Beginner', projects: ['AgriConnect', 'Portfolio'] },
      { name: 'Next.js', level: 'Beginner', projects: ['AgriConnect', 'Portfolio'] },
      { name: 'Tailwind CSS', level: 'Beginner', projects: ['Portfolio'] },
      { name: 'HTML / CSS', level: 'Beginner', projects: ['BytesEdge', 'Portfolio'] },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps and Infrastructure',
    skills: [
      { name: 'Docker', level: 'Basic', projects: ['Adobe Hackathon'] },
      { name: 'Git', level: 'Basic', projects: ['All projects'] },
      { name: 'Vercel', level: 'Basic', projects: ['Portfolio'] },
      { name: 'Cloud Platforms', level: 'Basic', projects: ['Coursework'] },
    ],
  },
  {
    id: 'ai-llm',
    label: 'AI and LLM Integration',
    skills: [
      { name: 'Claude API', level: 'In Progress', projects: ['Active learning'] },
      { name: 'RAG Systems', level: 'In Progress', projects: ['Adobe Hackathon (partial)', 'Self-study'] },
      { name: 'NLP', level: 'In Progress', projects: ['Adobe Hackathon', 'Self-study'] },
      { name: 'LLM Prompting', level: 'In Progress', projects: ['Active learning'] },
    ],
  },
];

const allFilters = ['All', ...skillCategories.map(c => c.label)];

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.label === activeFilter);

  return (
    <PageLayout breadcrumbs={[{ label: 'Skills' }]}>
      <Head>
        <title>Skills — Veeraj Thota</title>
        <meta name="description" content="Technical skills with proficiency levels and project context. 3 years programming experience." />
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>Capabilities</p>
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Technical Skills</h1>
        <p className="mb-10" style={{ color: 'var(--color-text-muted)' }}>
          3 years of programming experience. Each skill shows proficiency level and projects where it was applied.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allFilters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="text-sm font-medium px-4 py-1.5 rounded transition-colors"
              style={{
                background: activeFilter === f ? 'var(--color-btn-bg)' : 'var(--color-bg-subtle)',
                color: activeFilter === f ? '#fff' : 'var(--color-text-muted)',
                border: activeFilter === f ? '1px solid var(--color-btn-bg)' : '1px solid var(--color-border)',
                cursor: 'pointer',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filtered.map(category => (
            <div key={category.id} className="p-6" style={{ border: '1px solid var(--color-border)', borderRadius: '8px', background: 'var(--color-bg-card)' }}>
              <h2 className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-text-muted)' }}>
                {category.label}
              </h2>
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i} className="pl-3" style={{ borderLeft: '2px solid var(--color-border)' }}>
                    <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{skill.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-faint)' }}>{skill.level}</p>
                    <p className="text-xs mt-1" style={{ color: '#D1D5DB' }}>
                      {skill.projects.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="pt-10 mb-12" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '3 years', label: 'Programming Experience' },
              { value: '6', label: 'Skill Categories' },
              { value: '26', label: 'Technologies' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>{stat.value}</p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <Link href="/skills/learning-path" className="text-sm font-medium px-4 py-2 rounded" style={{ background: 'var(--color-btn-bg)', color: '#fff', textDecoration: 'none' }}>
            View Learning Path
          </Link>
          <Link href="/projects" className="text-sm font-medium px-4 py-2 rounded" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', textDecoration: 'none' }}>
            See Projects Using These Skills
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

import React from 'react';
import dynamic from 'next/dynamic';

// Above-the-fold: load immediately
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

// Below-the-fold: lazy load
const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <div className="py-28 flex items-center justify-center" style={{ background: '#fafafa' }}><div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--sage-light)', borderTopColor: 'var(--sage)' }} /></div>,
  ssr: true,
});
const Skills = dynamic(() => import('../components/Skills'), {
  loading: () => <div className="py-28 flex items-center justify-center" style={{ background: '#f5f1ed' }}><div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--sage-light)', borderTopColor: 'var(--sage)' }} /></div>,
  ssr: true,
});
const Experience = dynamic(() => import('../components/Experience'), {
  loading: () => <div className="py-28" style={{ background: '#fafafa' }} />,
  ssr: true,
});
const Resume = dynamic(() => import('../components/Resume'), {
  loading: () => <div className="py-28" style={{ background: '#f5f1ed' }} />,
  ssr: true,
});
const Education = dynamic(() => import('../components/Education'), {
  loading: () => <div className="py-28" style={{ background: '#fafafa' }} />,
  ssr: true,
});
const Certifications = dynamic(() => import('../components/Certifications'), {
  loading: () => <div className="py-28" style={{ background: '#f5f1ed' }} />,
  ssr: true,
});
const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="py-28" style={{ background: '#f0ebe3' }} />,
  ssr: true,
});

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
      <Navigation />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Skills />
        <Experience />
        <Resume />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

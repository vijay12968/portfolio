import React from 'react';
import dynamic from 'next/dynamic';

// Above-the-fold: Load immediately for fast FCP
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';

// Below-the-fold: Lazy load to reduce initial bundle
const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500 font-mono">Loading projects...</p></div>,
  ssr: true, // Still render on server for SEO
});

const Arsenal = dynamic(() => import('../components/Arsenal'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500 font-mono">Loading arsenal...</p></div>,
  ssr: true,
});

const Skills = dynamic(() => import('../components/Skills'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500 font-mono">Loading skills...</p></div>,
  ssr: true,
});

const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500 font-mono">Loading contact...</p></div>,
  ssr: true,
});

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Arsenal />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

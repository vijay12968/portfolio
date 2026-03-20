import React from 'react';
import dynamic from 'next/dynamic';

// Above-the-fold: Load immediately for fast FCP
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

// Below-the-fold: Lazy load to reduce initial bundle
const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-white"><p className="text-gray-500">Loading projects...</p></div>,
  ssr: true,
});

const Skills = dynamic(() => import('../components/Skills'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-gray-500">Loading skills...</p></div>,
  ssr: true,
});

const Testimonial = dynamic(() => import('../components/Testimonial'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-white"><p className="text-gray-500">Loading...</p></div>,
  ssr: true,
});

const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-gray-500">Loading contact...</p></div>,
  ssr: true,
});

export default function Home() {
  return (
    <div className="bg-white text-black overflow-x-hidden" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <Navigation />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Skills />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

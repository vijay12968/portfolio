import React from 'react';
import dynamic from 'next/dynamic';

// Above-the-fold: load immediately
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

// Below-the-fold: lazy load
const CareerTimeline = dynamic(() => import('../components/CareerTimeline'), {
  loading: () => <div className="py-20" style={{ background: '#F9FAFB' }} />,
  ssr: true,
});
const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <div className="py-20" style={{ background: '#fff' }} />,
  ssr: true,
});
const SkillsGrid = dynamic(() => import('../components/SkillsGrid'), {
  loading: () => <div className="py-20" style={{ background: '#fff' }} />,
  ssr: true,
});
const Experience = dynamic(() => import('../components/Experience'), {
  loading: () => <div className="py-20" style={{ background: '#F9FAFB' }} />,
  ssr: true,
});
const Resume = dynamic(() => import('../components/Resume'), {
  loading: () => <div className="py-20" style={{ background: '#fff' }} />,
  ssr: true,
});
const Education = dynamic(() => import('../components/Education'), {
  loading: () => <div className="py-20" style={{ background: '#F9FAFB' }} />,
  ssr: true,
});
const Certifications = dynamic(() => import('../components/Certifications'), {
  loading: () => <div className="py-20" style={{ background: '#fff' }} />,
  ssr: true,
});
const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="py-20" style={{ background: '#F9FAFB' }} />,
  ssr: true,
});

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
      <Navigation />
      <main>
        <Hero />
        <Profile />
        <CareerTimeline />
        <Projects />
        <SkillsGrid />
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

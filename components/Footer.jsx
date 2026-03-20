import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
              VEERAJ THOTA
            </h3>
            <p className="text-gray-600 text-sm">
              Data Engineer building scalable systems
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-bold text-black mb-3 text-sm">Quick Links</p>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-gray-600 hover:text-black transition">About</a>
              <a href="#projects" className="block text-gray-600 hover:text-black transition">Projects</a>
              <a href="#skills" className="block text-gray-600 hover:text-black transition">Skills</a>
              <a href="#contact" className="block text-gray-600 hover:text-black transition">Contact</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-bold text-black mb-3 text-sm">Connect</p>
            <div className="space-y-2 text-sm">
              <a href="https://github.com/vijay12968" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-black transition">GitHub</a>
              <a href="https://linkedin.com/in/veeraj-thota-9463a1290" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-black transition">LinkedIn</a>
              <a href="mailto:veerajthota42@gmail.com" className="block text-gray-600 hover:text-black transition">Email</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Veeraj Thota. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

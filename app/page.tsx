'use client';

import { Header } from '@/components/header';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const contentSection = document.getElementById('content');
    
    if (!contentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide arrow when content section enters viewport
        setShowArrow(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(contentSection);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header isBackVisible={false} />
      
      {/* Hero Section - Full Page */}
      <div className="min-h-screen flex flex-col items-center justify-center font-mono">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">WELCOME</p>
          <h1 className="text-6xl font-bold">
            Hi, I'm [Your Name]
          </h1>
        </div>
        
        {/* Scroll Down Arrow */}
        {showArrow && (
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#content" className="flex flex-col items-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div id="content" className="min-h-screen py-20 font-mono">
        <div className="space-y-16 max-w-[700px] mx-auto">
          {/* About Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">ABOUT</h2>
            <p className="leading-relaxed">
              Add your professional bio here. Describe your expertise, experience, and what you're passionate about.
            </p>
          </section>

          {/* Action Buttons */}
          <section className="space-y-4">
            <div className="flex gap-4">
              <Link 
                href="/works" 
                className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition"
              >
                VIEW MY WORK
              </Link>
              <a 
                href="#resume" 
                className="px-6 py-3 border border-black text-black font-semibold hover:bg-black hover:text-white transition"
              >
                RESUME
              </a>
            </div>
          </section>

          {/* Contact Section */}
          <section className="space-y-4 border-t pt-12">
            <h2 className="text-xl font-semibold">GET IN TOUCH</h2>
            <p className="leading-relaxed">
              Add your contact information here. Let visitors know how they can reach you.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="mailto:your.email@example.com" className="font-semibold hover:underline">
                EMAIL
              </a>
              <a href="#" className="font-semibold hover:underline">
                TWITTER
              </a>
              <a href="#" className="font-semibold hover:underline">
                GITHUB
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
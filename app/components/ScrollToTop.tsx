"use client";

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-xl
        transition-all duration-300 flex items-center justify-center z-50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      style={{
        background: 'linear-gradient(145deg, #1e3a8a 0%, #3b82f6 45%, #1e40af 100%)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(96, 165, 250, 0.5), inset 0 -1px 0 rgba(0,0,0,0.2)'
      }}
      aria-label="ページトップへ戻る"
    >
      <div
        className="w-0 h-0"
        style={{
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderBottom: '18px solid #ffffff',
        }}
      />
    </button>
  );
}

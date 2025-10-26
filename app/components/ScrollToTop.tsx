"use client";

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // 初期値設定

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
      className={`fixed bottom-5 right-5 w-12 h-12 bg-navy text-white rounded
        shadow-lg transition-all duration-300 hover:bg-navy-light z-50 flex items-center justify-center
        ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      aria-label="ページトップへ戻る"
    >
      <span className="text-xl">▲</span>
    </button>
  );
}

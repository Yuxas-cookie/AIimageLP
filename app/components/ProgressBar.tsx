"use client";

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // 初期値設定

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-1 bg-gray-200 z-40">
      <div
        className="h-full bg-amber-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

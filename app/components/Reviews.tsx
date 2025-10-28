"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const reviewImages = [
  "/images/受講生の声/スクリーンショット 2025-10-28 12.31.39.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.31.54.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.32.23.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.32.49.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.32.59.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.33.16.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.33.22.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.33.28.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.33.37.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.33.42.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.33.51.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.33.56.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.34.26.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.34.29.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.34.33.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.35.08.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.35.11.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.35.14.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.35.21.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.35.25.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.35.28.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.36.16.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.36.20.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.36.26.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.36.29.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.36.34.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.36.38.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.36.44.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.36.46.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.37.07.png",
  "/images/受講生の声/スクリーンショット 2025-10-28 12.37.11.png",
];

export default function Reviews() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle images on mount
    setShuffledImages([...reviewImages].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent px-4" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          講座生の声
        </h2>
        <div className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 px-4">
          <p className="text-lg sm:text-xl font-semibold">実際の公式ラインでの講座生の生の声となっています！</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {shuffledImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              <div className="relative w-full" style={{ paddingBottom: '133%' }}>
                <Image
                  src={image}
                  alt={`受講生の声 ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

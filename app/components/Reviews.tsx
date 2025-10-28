"use client";
import { Component as Masonry } from "@/components/ui/masonry";
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
  const [reviewData, setReviewData] = useState<Array<{id: number; image: string; height: number}>>([]);

  useEffect(() => {
    const loadImageDimensions = async () => {
      // Shuffle the images array for random order
      const shuffledImages = [...reviewImages].sort(() => Math.random() - 0.5);

      const dataWithDimensions = await Promise.all(
        shuffledImages.map((image, index) => {
          return new Promise<{id: number; image: string; height: number}>((resolve) => {
            const img = new Image();
            img.onload = () => {
              // Use actual image aspect ratio
              const aspectRatio = img.height / img.width;
              // Add variation to height (0.85-1.15x) to create more diverse sizes
              const variationFactor = 0.85 + Math.random() * 0.3;
              const estimatedHeight = 400 * aspectRatio * variationFactor;
              resolve({
                id: index,
                image: image,
                height: estimatedHeight,
              });
            };
            img.onerror = () => {
              // If image fails to load, use a default estimated height with variation
              const variationFactor = 0.85 + Math.random() * 0.3;
              resolve({
                id: index,
                image: image,
                height: 500 * variationFactor,
              });
            };
            img.src = image;
          });
        })
      );

      setReviewData(dataWithDimensions);
    };

    loadImageDimensions();
  }, []);

  if (reviewData.length === 0) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent px-4" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            講座生の声
          </h2>
          <div className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 px-4">
            <p className="text-lg sm:text-xl font-semibold">実際の公式ラインでの講座生の生の声となっています！</p>
          </div>
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <p className="text-center text-gray-500 text-sm sm:text-base">読み込み中...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent px-4" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          講座生の声
        </h2>
        <div className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 px-4">
          <p className="text-lg sm:text-xl font-semibold">実際の公式ラインでの講座生の生の声となっています！</p>
        </div>
        <div className="w-full max-w-screen-xl mx-auto">
          <Masonry data={reviewData} />
        </div>
      </div>
    </section>
  );
}

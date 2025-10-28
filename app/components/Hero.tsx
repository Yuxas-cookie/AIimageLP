"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Hero() {
  return (
    <AuroraBackground className="mt-[65px] h-[80vh] lg:h-[90vh]">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 sm:gap-6 items-center justify-center px-4 max-w-6xl mx-auto w-full"
      >
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-center leading-tight tracking-tight bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
          AI画像生成<br className="sm:hidden" />マスター講座
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 dark:text-white/95 text-center font-medium px-2">
          スキルゼロから稼ぐ力をつける実践講座
        </p>

        {/* 3つの特徴 */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-3 sm:mt-4 w-full max-w-4xl">
          <div className="flex-1 flex items-center justify-center gap-2 bg-white/90 dark:bg-navy/90 px-4 py-3 rounded-lg shadow-md backdrop-blur-sm">
            <span className="text-accent text-xl font-bold">✓</span>
            <span className="font-semibold text-base sm:text-base bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white whitespace-nowrap">
              受講生1000人突破
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 bg-white/90 dark:bg-navy/90 px-4 py-3 rounded-lg shadow-md backdrop-blur-sm">
            <span className="text-accent text-xl font-bold">✓</span>
            <span className="font-semibold text-base sm:text-base bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white whitespace-nowrap">
              24時間サポート体制
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 bg-white/90 dark:bg-navy/90 px-4 py-3 rounded-lg shadow-md backdrop-blur-sm">
            <span className="text-accent text-xl font-bold">✓</span>
            <span className="font-semibold text-base sm:text-base bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white whitespace-nowrap">
              最高月400万達成
            </span>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

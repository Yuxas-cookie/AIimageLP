"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Solution() {
  return (
    <div className="py-20 w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent relative z-20 px-4" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
        再現性の高い分野で稼ぐ力を身につけよう！
      </h2>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300 bg-clip-text text-transparent relative z-20 px-4 max-w-6xl mb-2" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
        AI画像生成マスター講座
      </h1>
      <div className="w-full max-w-6xl h-40 relative px-4 mt-2">
        {/* Gradients */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent h-[2px] w-11/12 blur-sm" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent h-px w-11/12" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent h-[5px] w-1/3 blur-sm" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent h-px w-1/3" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FCD34D"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

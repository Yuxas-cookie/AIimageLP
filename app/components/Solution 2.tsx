"use client";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Solution() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="solutionSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.8}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FCD34D"
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="section-container text-center relative z-10">
        <h2 className="text-2xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          再現性の高い分野で稼ぐ力を身につけよう！
        </h2>
        <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300 bg-clip-text text-transparent py-4" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          AI画像生成マスター講座
        </p>
      </div>
    </section>
  );
}

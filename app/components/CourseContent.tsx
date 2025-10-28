"use client"

import Image from "next/image"
import { useState } from "react"

export default function CourseContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Webコンテンツ",
      content: "100項目以上、50時間以上の動画の詳細なコンテンツで、PC初心者の方も1から始めることができます。",
      image: "/images/webコンテンツ.svg"
    },
    {
      title: "課題",
      content: "ステップアップ専用の課題で、学習だけでなく実践を通して着実にスキルを身につけられます",
      image: "/images/課題.svg"
    },
    {
      title: "添削",
      content: "現役で結果を出している講師陣が、直接確認してフィードバックします",
      image: "/images/添削.svg"
    },
    {
      title: "ZOOM質問会",
      content: "週3回以上のZOOM質問会で、講師に直接質問で疑問をすぐに解決できます",
      image: "/images/zoom質問会.svg"
    },
    {
      title: "オフライン作業会・懇親会",
      content: "オフラインでの作業会・懇親会で、講師や仲間と交流し、モチベーションを高められます",
      image: "/images/オフ会.svg"
    },
    {
      title: "サポート",
      content: "そのほかにも質問チャット、個別対応、オープンチャットで充実のサポート体制",
      image: "/images/サポート体制.svg"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="section-container">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent px-4" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          講座内容
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* 左側：ステップリスト */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                  activeIndex === index
                    ? 'bg-white border-navy shadow-lg scale-105'
                    : 'bg-white/50 border-gray-200 hover:border-navy/50 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeIndex === index
                      ? 'bg-gradient-to-br from-navy via-blue-500 to-navy-light text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-base sm:text-lg font-bold mb-2 ${
                      activeIndex === index
                        ? 'bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent'
                        : 'text-gray-700'
                    }`} style={activeIndex === index ? {WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'} : {}}>
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 右側：画像 */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="bg-white rounded-xl shadow-2xl border-2 border-navy/10 overflow-hidden p-6 sm:p-8">
              <div className="relative w-full aspect-square">
                <Image
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  {features[activeIndex].title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

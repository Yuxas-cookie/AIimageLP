"use client"

import Image from "next/image"

export default function CourseContent() {
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

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4 sm:space-y-6">
              {/* 画像 */}
              <div className="bg-white rounded-xl shadow-2xl border-2 border-navy/10 overflow-hidden p-6 sm:p-8">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* 項目 */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-navy p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-navy via-blue-500 to-navy-light text-white">
                    <span className="text-sm sm:text-base font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

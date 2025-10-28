"use client";
import { FeatureSteps } from "@/components/ui/feature-section";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CourseContent() {
  const features = [
    {
      step: "Webコンテンツ",
      title: "Webコンテンツ",
      content: "100項目以上、50時間以上の動画の詳細なコンテンツで、PC初心者の方も1から始めることができます。",
      image: "/images/webコンテンツ.svg"
    },
    {
      step: "課題",
      title: "課題",
      content: "ステップアップ専用の課題で、学習だけでなく実践を通して着実にスキルを身につけられます",
      image: "/images/課題.svg"
    },
    {
      step: "添削",
      title: "添削",
      content: "現役で結果を出している講師陣が、直接確認してフィードバックします",
      image: "/images/添削.svg"
    },
    {
      step: "ZOOM質問会",
      title: "ZOOM質問会",
      content: "週3回以上のZOOM質問会で、講師に直接質問で疑問をすぐに解決できます",
      image: "/images/zoom質問会.svg"
    },
    {
      step: "オフライン作業会・懇親会",
      title: "オフライン作業会・懇親会",
      content: "オフラインでの作業会・懇親会で、講師や仲間と交流し、モチベーションを高められます",
      image: "/images/オフ会.svg"
    },
    {
      step: "個別サポート等",
      title: "個別サポート等",
      content: "そのほかにも質問チャット、個別対応、オープンチャットで充実のサポート体制",
      image: "/images/サポート体制.svg"
    }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const observers = features.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      if (itemRefs.current[index]) {
        observer.observe(itemRefs.current[index]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isMobile, features.length]);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-8 md:py-12">
      {isMobile ? (
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent">
            講座内容
          </h2>
          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  visibleItems[index]
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <div className="w-full max-w-xs mx-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <FeatureSteps
          features={features}
          title="講座内容"
          autoPlayInterval={4000}
        />
      )}
    </section>
  );
}

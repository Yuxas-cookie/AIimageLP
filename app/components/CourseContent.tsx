import { FeatureSteps } from "@/components/ui/feature-section";

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

  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-8 md:py-12">
      <FeatureSteps
        features={features}
        title="講座内容"
        autoPlayInterval={4000}
      />
    </section>
  );
}

import type { CurriculumItem } from '@/app/types';

const curriculumItems: CurriculumItem[] = [
  {
    title: "まずは課題を通して学習",
    description: "動画とテキストコンテンツを元に画像生成の知識を実践しながら覚えて、課題で確認をして行きます。"
  },
  {
    title: "kindleで風景集出版",
    description: "ここでは実際にkindle電子書籍で写真集を出版し、出版プロセスを理解していきます。"
  },
  {
    title: "表紙課題の模写",
    description: "非常に重要な表紙について、売れる表紙の感覚をつかみます"
  },
  {
    title: "モデルを10種×プロンプト6パターン",
    description: "作れる画像の引き出しを広げます。"
  },
  {
    title: "kindleでグラビア本2冊出版",
    description: "ここまでの成果を元に、実際に2冊出版して出版経験をさらに詰みます"
  },
  {
    title: "FANZAに挑戦",
    description: "収益化の本番となるFANZAで1日1冊出しながら、以降の課題を並行して進めてクオリティアップして行きます。"
  },
  {
    title: "FANZAレベルの表紙課題模写",
    description: "FANZAで通用していけるようにさらに表紙レベルをさらに上げて行きます。"
  },
  {
    title: "モデルを30種×プロンプト6パターン",
    description: "さらに生成での実力をつけていきます"
  },
  {
    title: "添削に出しアベレージで80点以上をとる",
    description: "「画風」を最優先に、売れる作品を作るためにPDCAを回します。"
  },
  {
    title: "採点のアベレージが90点を超えるまでは他人の添削結果も週1以上みる",
    description: "客観的な視点、別な視点を取り入れてさらにPDCAを加速させます"
  }
];

export default function Curriculum() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-navy mb-12">
          カリキュラム
        </h2>
        <div className="space-y-6">
          {curriculumItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <h3 className="text-lg font-semibold text-navy mb-2">
                {index + 1}. {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

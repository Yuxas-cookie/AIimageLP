import type { Strength } from '@/app/types';

const strengths: Strength[] = [
  {
    title: "実績",
    items: [
      "総受講生1000人突破",
      "サロンなどではない、高額AI画像生成講座でトップクラス",
      "月10万以上を続々達成中！",
      "さらに最高で月300万まで達成された方も"
    ]
  },
  {
    title: "圧倒的サポート体制",
    items: [
      "・公式ライン・オープンチャット完備\n24時間いつでも質問可能、受講生同士で質問することもできます！",
      "・週3回 オンラインでの質問会\n講師に直接質問・相談することができる！",
      "・オフライン作業会、懇親会\n代表・講師・他の受講生と直接相談、交流ができます！"
    ]
  },
  {
    title: "独自ツール",
    description: "FANZAのプロンプト作成ツール\n何百枚分のプロンプトを考えなくてすむ独自のツールとなっています。これにより出版までのハードルが高いFANZAでも1日1冊の出版でPDCAをどんどん回すことができます！このツールを使えるのは独自ツールなので、本講座のみとなっています"
  }
];

export default function Strengths() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-navy mb-12">
          講座の強み
        </h2>
        <div className="space-y-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-8 border-t-4 border-accent">
              <h3 className="text-2xl font-semibold text-navy mb-6">
                {index + 1}. {strength.title}
              </h3>
              {strength.items && (
                <ul className="space-y-4">
                  {strength.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 whitespace-pre-line">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {strength.description && (
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {strength.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

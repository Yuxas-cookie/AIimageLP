import type { Testimonial } from '@/app/types';

const testimonials: Testimonial[] = [
  {
    name: "ライムさん",
    achievement: "月収10万以上達成",
    text: "スキルなしで稼ぐ力を身につけたいと思い、いくつか副業に挑戦するも失敗してきました。しかし、画像生成AIビジネスで初めて稼げました。苦労していた中で初めて収益を得られた感動は今でも忘れません。今では月収10万円以上が当たり前になり収益UPができました。高い再現性と手厚いサポートで、ビジネスに必要なマインドや人間関係の築き方まで学び成長ができました。"
  },
  {
    name: "はしもとさん",
    achievement: "月収20万以上達成",
    text: "大学院での研究と両立しながら月収20万円を達成しました。バイトでは限界がありましたが、研究が終わった後や授業の合間に作業ができるため、無理なく両立ができて良かったです。ビジネス経験がゼロで最初は不安でしたが初めて良かったと思いました。"
  },
  {
    name: "あそがわさん",
    achievement: "月収5万円→20万円達成",
    text: "2年ほど前から色々な副業を試みるも収益5万円を超えられず、パートで家計を支えていました。稼ぐ基礎やビジネスの本質を学び収益化に成功し、物価高を気にせず子供の習い事を増やすことができました！AI画像生成は目で見て楽しみながら稼げるのでオススメです。真摯に取り組めば結果が出るので楽しく収入UPできました。"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-navy mb-12">
          受講生の実績
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
              {/* プレースホルダー画像 */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200
                border-2 border-dashed border-gray-400 flex items-center justify-center">
                <span className="text-gray-400 text-sm">画像</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                {testimonial.name}
              </h3>
              <div className="text-lg font-semibold text-accent mb-4">
                {testimonial.achievement}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed text-left">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

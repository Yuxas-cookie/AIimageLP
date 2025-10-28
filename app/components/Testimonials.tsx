"use client"

import Image from "next/image"

const testimonials = [
  {
    title: "中村さん",
    category: "共働きから脱サラへ。家族と「自由な時間」を取り戻しました",
    amount: "最高月収400万円達成",
    image: "/images/中村さん.svg",
    description: "本業の収入は月30万円ほど。共働きしなければ家計が回らない状況で、いつも心に余裕がありませんでした。「妻を少しでも楽にさせたい」「子どもと過ごす時間を増やしたい」——そんな気持ちから、このビジネスを始めたんです。最初は右も左もわからず、毎日が手探り。でも諦めずに続けていたら、1年で月収100万円を達成できました。その後、思い切って会社を辞め、今は家族との時間を最優先に働けるように。今では最高月収400万円を達成し、妻も仕事を辞めて夫婦揃ってのびのびと過ごし、趣味のキャンプを人の少ない平日に楽しみ、子どもと焚き火を囲む——そんな生活を手に入れることができました。",
  },
  {
    title: "飯田さん",
    category: "ブラック職場から脱出。AIを活かして「時間もお金も自由に」",
    amount: "6か月で月収100万円達成",
    image: "/images/飯田さん.svg",
    description: "もともと営業職で、毎日残業続き。「どれだけ頑張っても給料が上がらない…」そんな現実に疲れきっていました。そんなときにこの講座を紹介してもらい、思い切って参加しました。最初は不安もありましたが、講師の方のサポートが本当に丁寧で、実践を重ねるうちにAIの面白さにどんどんハマっていきました。2週間で初収益、半年で月収100万円。今では働く時間は減ったのに、収入は3倍以上になりました。「頑張った分だけ成果になる」——そんな働き方にやっと出会えた気がします。",
  },
  {
    title: "大塚さん",
    category: "副業で何度も挫折した私が、AIで「初めて結果を出せた」話",
    amount: "8ヶ月で月収100万円達成",
    image: "/images/大塚さん.svg",
    description: "会社員として働いていましたが、「このまま平凡に終わるのは嫌だ」と思って副業をいくつも試しました。でもどれも上手くいかず、いつも「今回こそは」と始めては挫折の繰り返し。正直、自信を失っていました。そんな中で出会ったのがAIビジネス。「これが最後の挑戦だ」と決めて取り組んだところ、1ヶ月目で初収益、そして8ヶ月後に月収100万円を突破。今ではAIを活かした仕事をしていて、やりがいを感じながら働けています。「自分でもできた」という成功体験が、人生を前向きに変えてくれました。",
  },
  {
    title: "水嶋さん",
    category: "老後の不安から一転。AIを学んで「楽しく稼ぐ」毎日に",
    amount: "月収100万円達成 → 講師活動中",
    image: "/images/水嶋さん.svg",
    description: "フリーランスとして働いていましたが、収入が安定せず、将来を考えると不安ばかりでした。「このままで本当に大丈夫なのかな」——そう思っていたときに、この講座と出会いました。正直、AIなんてまったく触れたことがなく、最初は不安でした。でも学び始めるとどんどん面白くなって、気づけば夢中に。気がついたら月収100万円を突破していて、自分でもびっくりしました。今は講師として受講生に教える立場になり、月に25時間ほどの稼働で安定した収入を得ています。「年齢も経験も関係ない。楽しみながら成長できる」——心からそう感じられる環境です。",
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent px-4" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          実績者の声
        </h2>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                {/* 画像 */}
                <div className="md:w-48 lg:w-56 flex-shrink-0 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center p-6">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="flex-1 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      {testimonial.title}
                    </h3>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 px-4 py-2 rounded-lg border-2 border-amber-400/40 shadow-sm flex-shrink-0">
                      <div className="text-xs font-semibold text-amber-600 mb-1">
                        達成金額
                      </div>
                      <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                        {testimonial.amount}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-gray-600 mb-4">
                    {testimonial.category}
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {testimonial.description}
                  </p>

                  <div className="mt-4 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

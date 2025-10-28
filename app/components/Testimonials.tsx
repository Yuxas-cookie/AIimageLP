"use client"

import { Timeline, TimelineItem } from "@/components/ui/modern-timeline"

const testimonials: TimelineItem[] = [
  {
    title: "中村さん",
    category: "共働きから脱サラへ。家族と「自由な時間」を取り戻しました",
    amount: "最高月収400万円達成",
    image: "/images/中村さん.svg",
    description: "本業の収入は月30万円ほど。共働きしなければ家計が回らない状況で、いつも心に余裕がありませんでした。「妻を少しでも楽にさせたい」「子どもと過ごす時間を増やしたい」——そんな気持ちから、このビジネスを始めたんです。最初は右も左もわからず、毎日が手探り。でも諦めずに続けていたら、1年で月収100万円を達成できました。その後、思い切って会社を辞め、今は家族との時間を最優先に働けるように。今では最高月収400万円を達成し、妻も仕事を辞めて夫婦揃ってのびのびと過ごし、趣味のキャンプを人の少ない平日に楽しみ、子どもと焚き火を囲む——そんな生活を手に入れることができました。",
    status: "completed"
  },
  {
    title: "飯田さん",
    category: "ブラック職場から脱出。AIを活かして「時間もお金も自由に」",
    amount: "6か月で月収100万円達成",
    image: "/images/飯田さん.svg",
    description: "もともと営業職で、毎日残業続き。「どれだけ頑張っても給料が上がらない…」そんな現実に疲れきっていました。そんなときにこの講座を紹介してもらい、思い切って参加しました。最初は不安もありましたが、講師の方のサポートが本当に丁寧で、実践を重ねるうちにAIの面白さにどんどんハマっていきました。2週間で初収益、半年で月収100万円。今では働く時間は減ったのに、収入は3倍以上になりました。「頑張った分だけ成果になる」——そんな働き方にやっと出会えた気がします。",
    status: "completed"
  },
  {
    title: "大塚さん",
    category: "副業で何度も挫折した私が、AIで「初めて結果を出せた」話",
    amount: "8ヶ月で月収100万円達成",
    image: "/images/大塚さん.svg",
    description: "会社員として働いていましたが、「このまま平凡に終わるのは嫌だ」と思って副業をいくつも試しました。でもどれも上手くいかず、いつも「今回こそは」と始めては挫折の繰り返し。正直、自信を失っていました。そんな中で出会ったのがAIビジネス。「これが最後の挑戦だ」と決めて取り組んだところ、1ヶ月目で初収益、そして8ヶ月後に月収100万円を突破。今ではAIを活かした仕事をしていて、やりがいを感じながら働けています。「自分でもできた」という成功体験が、人生を前向きに変えてくれました。",
    status: "completed"
  },
  {
    title: "水嶋さん",
    category: "老後の不安から一転。AIを学んで「楽しく稼ぐ」毎日に",
    amount: "月収100万円達成 → 講師活動中",
    image: "/images/水嶋さん.svg",
    description: "フリーランスとして働いていましたが、収入が安定せず、将来を考えると不安ばかりでした。「このままで本当に大丈夫なのかな」——そう思っていたときに、この講座と出会いました。正直、AIなんてまったく触れたことがなく、最初は不安でした。でも学び始めるとどんどん面白くなって、気づけば夢中に。気がついたら月収100万円を突破していて、自分でもびっくりしました。今は講師として受講生に教える立場になり、月に25時間ほどの稼働で安定した収入を得ています。「年齢も経験も関係ない。楽しみながら成長できる」——心からそう感じられる環境です。",
    status: "completed"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent px-4" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          実績者の声
        </h2>
        <Timeline items={testimonials} />
      </div>
    </section>
  );
}

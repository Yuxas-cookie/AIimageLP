"use client";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function Strengths() {
  const data = [
    {
      title: "実績",
      content: (
        <div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h4 className="font-bold text-lg mb-3 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
              総受講生1000人突破
            </h4>
            <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              サロンなどではない、本格的な高額AI画像生成講座として、総受講生1000人を突破しました。これは高額AI画像生成講座として<span className="font-bold">トップクラス</span>で、今なおその数が増え続けています。
              多くの受講生の方々に選ばれ続けている確かな実績があります。
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "実績",
      content: (
        <div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h4 className="font-bold text-lg mb-3 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
              月10万以上を続々達成
            </h4>
            <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              副業として最初の壁となる0→1を突破し、さらには難しいとされる月10万円以上の収益を続々と受講生の方々が達成しています。初心者の方でも、再現性の高い領域でしっかりとしたサポート体制のもとで着実に成果を出すことができます。
            </p>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-4">
              <p className="font-semibold text-base bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
                最高では月400万円を達成された方も！
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "圧倒的な\nサポート体制",
      content: (
        <div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h4 className="font-bold text-lg mb-3 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
              公式ライン・オープンチャット完備
            </h4>
            <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              いつでも質問可能な環境を整えています。公式ラインでは講師に直接質問ができ、オープンチャットでは受講生同士で情報交換や質問をすることもできます。困ったときにすぐに相談できる環境があるので、挫折することなく学習を続けられます。
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "圧倒的な\nサポート体制",
      content: (
        <div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h4 className="font-bold text-lg mb-3 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
              週3回 オンラインでの質問会
            </h4>
            <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              週3回、定期的にオンラインで質問会を開催しています。講師に直接質問・相談することができるので、テキストでは伝えきれない細かいニュアンスや、個別の状況に応じたアドバイスを受けることができます。リアルタイムでのサポートで、スピーディーに問題を解決できます。
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "圧倒的な\nサポート体制",
      content: (
        <div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h4 className="font-bold text-lg mb-3 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
              個別サポート
            </h4>
            <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              質問会に参加できない時や、公式ラインやオープンチャットのテキストだけでは解決できない複雑な問題にも対応します。個別の状況やお悩みに合わせて、講師が丁寧にサポートいたします。一人ひとりのペースに合わせた柔軟な対応で、安心して学習を進めることができます。
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "圧倒的な\nサポート体制",
      content: (
        <div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h4 className="font-bold text-lg mb-3 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
              オフライン作業会・懇親会
            </h4>
            <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              さらにはオンラインだけでなく、オフラインでの作業会や懇親会も定期的に開催しています。代表・講師・他の受講生と直接会ってより深く相談や交流ができます。同じ目標を持つ仲間とのつながりは、モチベーション維持にも大きく役立ちます。<span className="font-bold">あなたは一人ではありません。</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "圧倒的な\nサポート体制",
      content: (
        <div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border-l-4 border-accent">
            <h4 className="font-bold text-lg mb-3 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-white">
              添削サービス
            </h4>
            <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              結果を出している現役講師陣が、あなたの作品を一つ一つ丁寧に確認してフィードバックします。自分では気づかない改善点や、より効果的な表現方法を具体的にアドバイス。さらに、過去の添削結果や他の受講生の添削結果も確認できるため、様々なパターンから学ぶことができます。プロの視点からの的確な指摘により、独学では得られない成長スピードを実現できます。
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "独自ツール",
      content: (
        <div>
          <div className="relative bg-gradient-to-br from-navy via-blue-900 to-navy-light rounded-xl p-8 shadow-2xl border-2 border-accent overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Badge */}
            <div className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/50 rounded-full px-4 py-1 mb-4">
              <span className="text-accent font-bold text-sm">限定ツール</span>
            </div>

            <div className="relative z-10">
              <h4 className="font-bold text-2xl md:text-3xl mb-4 bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.5))'}}>
                FANZAのプロンプト作成ツール
              </h4>
              <p className="text-gray-100 text-sm md:text-base leading-relaxed mb-4 drop-shadow">
                本講座でしか使えない独自のプロンプト作成ツールを提供しています。通常、FANZA向けの写真集を作成するには何百枚もの画像とそのプロンプトを考える必要がありますが、このツールを使えばその作業を大幅に効率化できます。
              </p>
              <p className="text-gray-100 text-sm md:text-base leading-relaxed mb-6 drop-shadow">
                これにより、出版までのハードルが高いとされるFANZAでも、1日1冊のペースで出版することが可能になります。さらに、添削サービスと組み合わせることで、プロの視点からのフィードバックを素早く反映し、より質の高いPDCAサイクルを回すことができます。短期間で収益化を実現できます。
              </p>
              <div className="bg-gradient-to-r from-accent/20 via-orange-500/20 to-accent/20 backdrop-blur-sm border-2 border-accent rounded-lg p-4 mt-6 shadow-lg">
                <p className="font-bold text-lg text-center bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  このツールを使えるのは本講座のみ！
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="bg-gradient-to-r from-navy via-blue-700 to-navy py-4 sm:py-6 px-4 rounded-lg mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            本講座が選ばれている理由
          </h2>
        </div>
        <div className="flex flex-col items-center mb-6 sm:mb-8 px-4">
          <Image
            src="/images/強み.svg"
            alt="強み"
            width={400}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
          />
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
}

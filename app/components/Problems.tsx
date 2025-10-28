import Image from 'next/image';

const problems = [
  "会社の給与がなかなか上がらない",
  "物価高騰で生活費がほしい。欲しいモノ、買いたいモノが手に入れられない",
  "旅行に行きたいけど高くて行けない",
  "副業はしたいけど、どんな副業をすればよいかわからない",
  "過去に副業にチャレンジしたがうまくいかなかった"
];

export default function Problems() {
  return (
    <section className="section-padding bg-white">
      <div className="content-container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          こんなお悩みはありませんか？
        </h2>

        {/* SVG画像 */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <Image
            src="/images/困る.svg"
            alt="困っている人のイラスト"
            width={200}
            height={200}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
          />
        </div>

        <div className="bg-white border-l-4 border-accent shadow-md p-4 sm:p-6 md:p-8">
          <ul className="space-y-3 sm:space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start pb-3 sm:pb-4 border-b border-gray-100 last:border-b-0">
                <span className="text-accent mr-2 sm:mr-3 font-bold text-base sm:text-lg">●</span>
                <span className="text-gray-700 text-base sm:text-lg md:text-xl">{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8 text-gray-700 leading-loose text-base sm:text-lg md:text-xl text-center">
          <p>
            日本では物価が上昇し続ける一方で、給料はなかなか上がらない状況が続いています。
            <br />
            <br />
            <span className="font-bold text-gray-700">欲しいものを我慢し、旅行も諦め、将来への不安を抱えながら毎日を過ごす・・・</span>
            <br />
            <br />
            <span className="font-semibold bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent">そんな生活、本当に辛いですよね。</span>
          </p>

          <p>
            そして副業を始めようと思っても、何から始めればいいのかわからない。
            <br />
            <br />
            過去にチャレンジしたけど結果が出ずに諦めた経験がある。
            <br />
            <br />
            そんな方も多いのではないでしょうか。
          </p>

          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent">
            でも安心してください。
          </p>
        </div>
      </div>
    </section>
  );
}

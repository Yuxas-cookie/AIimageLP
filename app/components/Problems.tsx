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
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-10">
          こんなお悩みはありませんか？
        </h2>
        <div className="bg-white border-l-4 border-accent shadow-md p-8">
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-b-0">
                <span className="text-accent mr-3 font-bold">●</span>
                <span className="text-gray-700">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

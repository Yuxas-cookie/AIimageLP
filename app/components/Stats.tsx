const stats = [
  {
    number: "70%",
    text: "日本人の約70%が将来にお金の不安を抱えている"
  }
];

export default function Stats() {
  return (
    <>
      {stats.map((stat, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="content-container text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-700 via-orange-500 to-red-700 bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              {stat.number}
            </div>
            <p className="text-base sm:text-lg lg:text-xl font-semibold mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-red-600 via-orange-400 to-red-600 bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              {stat.text}
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8 text-gray-700 leading-loose text-sm sm:text-base md:text-lg">
              <p>
                実は日本人の約70%が、あなたと同じように将来のお金に不安を感じています。
              </p>

              <p>
                つまり、10人中7人があなたと同じ悩みを抱えているのです。
              </p>

              <p>
                副業を始めたいけど何をすればいいかわからない。
                <br />
                <br />
                過去にチャレンジして失敗した経験がある。
              </p>

              <p className="font-semibold bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent">
                そんな方が本当に多いのです。
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

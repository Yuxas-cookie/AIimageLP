const stats = [
  {
    number: "7割",
    text: "日本人の約7割が将来にお金の不安を抱えている"
  },
  {
    number: "93%",
    text: "93%の人間がネットビジネスで稼げていない"
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
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="text-6xl lg:text-7xl font-bold text-accent mb-6">
              {stat.number}
            </div>
            <p className="text-lg lg:text-xl text-gray-700 font-semibold">
              {stat.text}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}

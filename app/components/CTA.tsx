export default function CTA() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent px-4" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          今すぐ始めて、<br className="sm:hidden" />
          新しい収入源を手に入れよう
        </h2>
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            まずは無料相談で、あなたに最適なプランをご提案します
          </p>
          <button className="bg-accent hover:bg-amber-600 text-white font-bold
            py-3 sm:py-4 px-8 sm:px-12 rounded-lg text-base sm:text-lg transition-colors duration-200 shadow-lg w-full sm:w-auto">
            無料相談を申し込む
          </button>
        </div>
        <div className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 px-4">
          ※お申し込み後、担当者より詳細をご連絡いたします
        </div>
      </div>
    </section>
  );
}

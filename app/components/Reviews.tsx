export default function Reviews() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-navy mb-6">
          講座生の声
        </h2>
        <div className="text-center text-gray-600 mb-8">
          <p>実際の公式ラインでの講座生の生の声となっています！</p>
          <p className="text-sm text-gray-500 mt-2">（ここは基本スクショした画像を貼ります）</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* プレースホルダー画像エリア */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="text-gray-400">
              <p className="text-lg mb-2">画像プレースホルダー</p>
              <p className="text-sm">公式ラインのスクリーンショット画像をここに配置</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

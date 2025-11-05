export default function Footer() {
  return (
    <footer className="bg-navy text-white py-6 sm:py-8">
      <div className="section-container">
        <div className="text-center px-4">
          <p className="text-base sm:text-lg font-semibold mb-2">株式会社SKH</p>
          <div className="mb-3">
            <a
              href="/tokushoho"
              className="text-xs sm:text-sm text-white/80 hover:text-white underline transition-colors duration-200"
            >
              特定商取引法に基づく表記
            </a>
          </div>
          <p className="text-xs sm:text-sm text-white/80">
            © 2025 SKH Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

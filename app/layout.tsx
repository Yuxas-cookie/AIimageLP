import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "AI画像生成講座 | 株式会社SKH",
  description: "スキルゼロから月10万円を目指す実践プログラム",
  openGraph: {
    title: "AI画像生成講座 | 株式会社SKH",
    description: "スキルゼロから月10万円を目指す実践プログラム",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfairDisplay.variable} ${notoSerifJP.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

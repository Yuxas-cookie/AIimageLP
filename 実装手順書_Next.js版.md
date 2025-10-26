# AI画像生成講座LP 実装手順書 (Next.js版)

**作成日**: 2025-10-26
**バージョン**: 1.0
**対象者**: 実装担当者
**前提資料**: 要件定義書_Next.js版.md
**技術スタック**: Next.js 15 + TypeScript + Tailwind CSS

---

## 目次

1. [実装の全体フロー](#1-実装の全体フロー)
2. [事前準備](#2-事前準備)
3. [ステップ1: Next.jsプロジェクトの初期化](#3-ステップ1-nextjsプロジェクトの初期化)
4. [ステップ2: Tailwind CSSのカスタマイズ](#4-ステップ2-tailwind-cssのカスタマイズ)
5. [ステップ3: プロジェクト構造の作成](#5-ステップ3-プロジェクト構造の作成)
6. [ステップ4: Layout（ルートレイアウト）の実装](#6-ステップ4-layoutルートレイアウトの実装)
7. [ステップ5: Client Componentsの実装](#7-ステップ5-client-componentsの実装)
8. [ステップ6: Server Componentsの実装](#8-ステップ6-server-componentsの実装)
9. [ステップ7: メインページの組み立て](#9-ステップ7-メインページの組み立て)
10. [ステップ8: 動作確認とテスト](#10-ステップ8-動作確認とテスト)
11. [ステップ9: ビルドとデプロイ準備](#11-ステップ9-ビルドとデプロイ準備)
12. [トラブルシューティング](#12-トラブルシューティング)
13. [デプロイ前チェックリスト](#13-デプロイ前チェックリスト)

---

## 1. 実装の全体フロー

```
事前準備（Node.js確認）
  ↓
Next.jsプロジェクト初期化
  ↓
Tailwind設定カスタマイズ
  ↓
プロジェクト構造作成（componentsディレクトリ等）
  ↓
Layout実装
  ↓
Client Components実装（ProgressBar, ScrollToTop）
  ↓
Server Components実装（全セクション）
  ↓
メインページ（page.tsx）組み立て
  ↓
開発サーバー起動・動作確認
  ↓
ビルド・最適化確認
  ↓
デプロイ準備
```

**推定作業時間**: 4〜6時間

---

## 2. 事前準備

### 2.1 必要な環境

- **Node.js**: 18.17以上（推奨: 20.x LTS）
- **npm**: 9.x以上（Node.jsに同梱）
- **テキストエディタ**: VS Code推奨

### 2.2 Node.jsバージョン確認

```bash
node -v
# v20.x.x 以上であることを確認

npm -v
# 9.x.x 以上であることを確認
```

### 2.3 作業ディレクトリの確認

```bash
cd /Users/hashimotoyasuhiro/Desktop/画像生成LP
ls -la
```

**現在の状態**:
- docs/ ディレクトリ（資料）
- images/ ディレクトリ（空）
- 要件定義書_Next.js版.md
- 実装手順書_Next.js版.md（本ファイル）

---

## 3. ステップ1: Next.jsプロジェクトの初期化

### 3.1 プロジェクト初期化

現在のディレクトリでNext.jsプロジェクトを初期化します。

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

**オプション説明**:
- `.`: 現在のディレクトリに作成
- `--typescript`: TypeScript使用
- `--tailwind`: Tailwind CSS使用
- `--eslint`: ESLint使用
- `--app`: App Router使用
- `--no-src-dir`: srcディレクトリを作らない
- `--import-alias "@/*"`: インポートエイリアス設定

**インタラクティブな質問への回答**:
既存ファイルがある場合、上書き確認が出たら「Yes」を選択。

### 3.2 依存関係のインストール確認

```bash
npm install
```

### 3.3 初期ファイル構成の確認

```bash
ls -la
```

**作成されるファイル**:
```
/画像生成LP/
  ├── app/
  │   ├── favicon.ico
  │   ├── globals.css
  │   ├── layout.tsx
  │   └── page.tsx
  ├── public/
  ├── node_modules/
  ├── .eslintrc.json
  ├── .gitignore
  ├── next.config.ts
  ├── package.json
  ├── postcss.config.mjs
  ├── tailwind.config.ts
  └── tsconfig.json
```

**チェックポイント**:
- [ ] package.jsonが作成されている
- [ ] app/ディレクトリが作成されている
- [ ] tailwind.config.tsが作成されている

### 3.4 開発サーバーの起動テスト

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いて、Next.jsのデフォルトページが表示されることを確認。

確認後、Ctrl+C でサーバーを停止。

---

## 4. ステップ2: Tailwind CSSのカスタマイズ

### 4.1 tailwind.config.ts の編集

`tailwind.config.ts` を以下の内容に置き換え：

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1e3a8a',
          light: '#2563eb',
        },
        accent: '#f59e0b',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Noto Sans JP',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
```

**追加内容**:
- カスタムカラー（navy, accent）
- フォント設定

### 4.2 globals.css の編集

`app/globals.css` を以下の内容に置き換え：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply text-gray-700 bg-white;
  }
}

@layer components {
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .section-padding {
    @apply py-16 lg:py-20;
  }
}
```

**追加内容**:
- スムーススクロール設定
- 共通コンポーネントクラス

**チェックポイント**:
- [ ] tailwind.config.ts が更新されている
- [ ] globals.css が更新されている

---

## 5. ステップ3: プロジェクト構造の作成

### 5.1 componentsディレクトリの作成

```bash
mkdir -p app/components
```

### 5.2 typesディレクトリの作成

```bash
mkdir -p app/types
```

### 5.3 型定義ファイルの作成

`app/types/index.ts` を作成：

```typescript
export interface Testimonial {
  name: string;
  achievement: string;
  text: string;
}

export interface CurriculumItem {
  title: string;
  description: string;
}

export interface Problem {
  text: string;
}

export interface Strength {
  title: string;
  items?: string[];
  description?: string;
}
```

**チェックポイント**:
- [ ] app/components/ ディレクトリが作成されている
- [ ] app/types/index.ts が作成されている

---

## 6. ステップ4: Layout（ルートレイアウト）の実装

### 6.1 app/layout.tsx の編集

`app/layout.tsx` を以下の内容に置き換え：

```typescript
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
```

**追加内容**:
- メタデータ設定
- OGP設定
- 日本語指定（lang="ja"）

**チェックポイント**:
- [ ] メタデータが設定されている
- [ ] htmlタグにlang="ja"が設定されている

---

## 7. ステップ5: Client Componentsの実装

### 7.1 ProgressBar.tsx の作成

`app/components/ProgressBar.tsx` を作成：

```typescript
"use client";

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // 初期値設定

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-[60px] left-0 w-full h-1 bg-gray-200 z-40">
      <div
        className="h-full bg-amber-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
```

### 7.2 ScrollToTop.tsx の作成

`app/components/ScrollToTop.tsx` を作成：

```typescript
"use client";

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // 初期値設定

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 w-12 h-12 bg-navy text-white rounded
        shadow-lg transition-all duration-300 hover:bg-navy-light z-50 flex items-center justify-center
        ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      aria-label="ページトップへ戻る"
    >
      <span className="text-xl">▲</span>
    </button>
  );
}
```

**チェックポイント**:
- [ ] ProgressBar.tsx が作成されている
- [ ] ScrollToTop.tsx が作成されている
- [ ] 両方とも "use client" ディレクティブがある

---

## 8. ステップ6: Server Componentsの実装

### 8.1 Header.tsx の作成

`app/components/Header.tsx` を作成：

```typescript
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-navy shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <h1 className="text-xl font-semibold text-white">株式会社SKH</h1>
      </div>
    </header>
  );
}
```

### 8.2 Hero.tsx の作成

`app/components/Hero.tsx` を作成：

```typescript
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light py-24 lg:py-32 text-center mt-[60px]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          AI画像生成で新しい収入の柱を
        </h2>
        <p className="text-lg lg:text-xl text-white/95">
          スキルゼロから月10万円を目指す実践講座
        </p>
      </div>
    </section>
  );
}
```

### 8.3 Problems.tsx の作成

`app/components/Problems.tsx` を作成：

```typescript
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
```

### 8.4 Empathy.tsx の作成

`app/components/Empathy.tsx` を作成：

```typescript
export default function Empathy() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-navy">
          それはあなただけじゃないです！
        </h2>
      </div>
    </section>
  );
}
```

### 8.5 Stats.tsx の作成

`app/components/Stats.tsx` を作成：

```typescript
const stats = [
  {
    number: "7割",
    text: "日本人の約7割が将来にお金の不安を抱えている"
  },
  {
    number: "93%",
    text: "93%の人間が副業に関心を持っている"
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
```

### 8.6 Testimonials.tsx の作成

`app/components/Testimonials.tsx` を作成：

```typescript
import type { Testimonial } from '@/app/types';

const testimonials: Testimonial[] = [
  {
    name: "ライムさん",
    achievement: "月収10万円以上達成",
    text: "スキルなしで稼ぐ力を身につけたいと思い、いくつか副業に挑戦するも失敗してきました。しかし、画像生成AIビジネスで初めて稼げました。苦労していた中で初めて収益を得られた感動は今でも忘れません。今では月収10万円以上が当たり前になり収益UPができました。高い再現性と手厚いサポートで、ビジネスに必要なマインドや人間関係の築き方まで学び成長ができました。"
  },
  {
    name: "はしもとさん",
    achievement: "月収20万円以上達成",
    text: "大学院での研究と両立しながら月収20万円を達成しました。バイトでは限界がありましたが、研究が終わった後や授業の合間に作業ができるため、無理なく両立ができて良かったです。ビジネス経験がゼロで最初は不安でしたが始めて良かったと思いました。"
  },
  {
    name: "あそがわさん",
    achievement: "月収5万円→20万円達成",
    text: "2年ほど前から色々な副業を試みるも収益5万円を超えられず、パートで家計を支えていました。稼ぐ基礎やビジネスの本質を学び収益化に成功し、物価高を気にせず子供の習い事を増やすことができました！AI画像生成は目で見て楽しみながら稼げるのでオススメです。真摯に取り組めば結果が出るので楽しく収入UPできました。"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-navy mb-12">
          受講生の実績
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
              {/* プレースホルダー画像 */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200
                border-2 border-dashed border-gray-400 flex items-center justify-center">
                <span className="text-gray-400 text-sm">画像</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                {testimonial.name}
              </h3>
              <div className="text-lg font-semibold text-accent mb-4">
                {testimonial.achievement}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed text-left">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 8.7 Solution.tsx の作成

`app/components/Solution.tsx` を作成：

```typescript
export default function Solution() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy to-navy-light">
      <div className="section-container text-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
          あなたも必ずできる！
        </h2>
        <p className="text-lg lg:text-xl text-white/95">
          AI講座で稼ぐ力を手に入れよう！
        </p>
      </div>
    </section>
  );
}
```

### 8.8 Curriculum.tsx の作成

`app/components/Curriculum.tsx` を作成：

```typescript
import type { CurriculumItem } from '@/app/types';

const curriculumItems: CurriculumItem[] = [
  {
    title: "まずは課題を通して学習",
    description: "動画とテキストコンテンツを元に画像生成の知識を実践しながら覚えて、課題で確認をして行きます。"
  },
  {
    title: "kindleで風景集出版",
    description: "ここでは実際にkindle電子書籍で写真集を出版し、出版プロセスを理解していきます。"
  },
  {
    title: "表紙課題の模写",
    description: "非常に重要な表紙について、売れる表紙の感覚をつかみます"
  },
  {
    title: "モデルを10種×プロンプト6パターン",
    description: "作れる画像の引き出しを広げます。"
  },
  {
    title: "kindleでグラビア本2冊出版",
    description: "ここまでの成果を元に、実際に2冊出版して出版経験をさらに詰みます"
  },
  {
    title: "FANZAに挑戦",
    description: "収益化の本番となるFANZAで1日1冊出しながら、以降の課題を並行して進めてクオリティアップして行きます。"
  },
  {
    title: "FANZAレベルの表紙課題模写",
    description: "FANZAで通用していけるようにさらに表紙レベルをさらに上げて行きます。"
  },
  {
    title: "モデルを30種×プロンプト6パターン",
    description: "さらに生成での実力をつけていきます"
  },
  {
    title: "添削に出しアベレージで80点以上をとる",
    description: "「画風」を最優先に、売れる作品を作るためにPDCAを回します。"
  },
  {
    title: "採点のアベレージが90点を超えるまでは他人の添削結果も週1以上みる",
    description: "客観的な視点、別な視点を取り入れてさらにPDCAを加速させます"
  }
];

export default function Curriculum() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-navy mb-12">
          充実のカリキュラム
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {curriculumItems.map((item, index) => (
            <div key={index} className="bg-gray-50 border-l-4 border-green-600 p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 8.9 Strengths.tsx の作成

`app/components/Strengths.tsx` を作成：

```typescript
const strengths = [
  {
    title: "実績",
    items: [
      "総受講生1000人突破",
      "サロンなどではない、高額AI画像生成講座でトップクラス",
      "月10万以上を続々達成中！",
      "さらに最高で月300万まで達成された方も"
    ]
  },
  {
    title: "圧倒的サポート体制",
    items: [
      "公式ライン・オープンチャット完備: 24時間いつでも質問可能、受講生同士で質問することもできます！",
      "週3回 オンラインでの質問会: 講師に直接質問・相談することができる！",
      "オフライン作業会、懇親会: 代表・講師・他の受講生と直接相談、交流ができます！"
    ]
  },
  {
    title: "独自ツール",
    description: "FANZAのプロンプト作成ツール: 何百枚分のプロンプトを考えなくてすむ独自のツールとなっています。これにより出版までのハードルが高いFANZAでも1日1冊の出版でPDCAをどんどん回すことができます！このツールを使えるのは独自ツールなので、本講座のみとなっています"
  }
];

export default function Strengths() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-navy mb-12">
          講座の強み
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              {/* アイコンプレースホルダー */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-lg
                border-2 border-dashed border-gray-400 flex items-center justify-center">
                <span className="text-gray-400 text-xs">アイコン</span>
              </div>
              <h3 className="text-xl font-bold text-center text-navy mb-6">
                {strength.title}
              </h3>
              {strength.items ? (
                <ul className="space-y-3">
                  {strength.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-accent mr-2 font-bold">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-700 leading-relaxed">
                  {strength.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 8.10 Reviews.tsx の作成

`app/components/Reviews.tsx` を作成：

```typescript
export default function Reviews() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-navy mb-6">
          講座生の声
        </h2>
        <p className="text-center text-gray-600 mb-12">
          実際の公式ラインでの講座生の生の声となっています！
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="w-full sm:w-80 h-[500px] bg-gray-200 rounded-lg
                border-2 border-dashed border-gray-400 flex items-center justify-center"
            >
              <span className="text-gray-400">スクリーンショット画像</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 8.11 CTA.tsx の作成

`app/components/CTA.tsx` を作成：

```typescript
export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy to-navy-light text-center">
      <div className="section-container">
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-10">
          まずはお気軽にお問い合わせください
        </h2>
        <a
          href="#"
          className="inline-block px-12 py-4 text-lg font-bold text-white bg-accent
            rounded-lg shadow-xl hover:bg-amber-600 transition-all duration-300
            hover:-translate-y-1 hover:shadow-2xl"
        >
          お問い合わせはこちら
        </a>
      </div>
    </section>
  );
}
```

### 8.12 Footer.tsx の作成

`app/components/Footer.tsx` を作成：

```typescript
export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="section-container">
        <div className="text-center space-y-6">
          {/* 会社情報 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">株式会社SKH</h3>
            <p className="text-sm opacity-90">〒XXX-XXXX 東京都〇〇区〇〇 X-X-X</p>
            <p className="text-sm opacity-90">TEL: 03-XXXX-XXXX</p>
            <p className="text-sm opacity-90">Email: info@skh.co.jp</p>
          </div>

          {/* リンク */}
          <div className="flex justify-center gap-8 text-sm opacity-80">
            <p>プライバシーポリシー</p>
            <p>利用規約</p>
          </div>

          {/* コピーライト */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm opacity-70">
              &copy; 2025 株式会社SKH All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

**チェックポイント**:
- [ ] 全12個のコンポーネントが作成されている
- [ ] Client Componentsには "use client" がある
- [ ] 型定義が適用されている

---

## 9. ステップ7: メインページの組み立て

### 9.1 app/page.tsx の編集

`app/page.tsx` を以下の内容に置き換え：

```typescript
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Empathy from './components/Empathy';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Solution from './components/Solution';
import Curriculum from './components/Curriculum';
import Strengths from './components/Strengths';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <ProgressBar />

      <main>
        <Hero />
        <Problems />
        <Empathy />
        <Stats />
        <Testimonials />
        <Solution />
        <Curriculum />
        <Strengths />
        <Reviews />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
```

**チェックポイント**:
- [ ] すべてのコンポーネントがインポートされている
- [ ] セクションの順序が正しい
- [ ] Header, ProgressBar, ScrollToTopが配置されている

---

## 10. ステップ8: 動作確認とテスト

### 10.1 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開く。

### 10.2 確認項目

#### 基本表示
- [ ] ページが正しく表示される
- [ ] ヘッダーが固定されている
- [ ] 全セクションが表示されている

#### プログレスバー
- [ ] ヘッダー直下に表示されている
- [ ] スクロールするとバーが伸びる
- [ ] 最下部で100%になる
- [ ] オレンジ色（amber-500）で表示されている

#### トップに戻るボタン
- [ ] 最初は表示されていない
- [ ] 300px以上スクロールすると表示される
- [ ] クリックでページトップにスムーズに戻る
- [ ] ホバー時に色が変わる

#### レスポンシブ
開発者ツール（F12）→ デバイスツールバー（Ctrl+Shift+M）で確認

- [ ] スマホ（375px）: 1カラム表示
- [ ] タブレット（768px）: 2カラム表示
- [ ] PC（1024px以上）: 3カラム表示

#### デザイン
- [ ] 配色が正しい（ネイビー、オレンジ）
- [ ] フォントが読みやすい
- [ ] プレースホルダーが適切に表示されている
- [ ] カード型デザインが適用されている

### 10.3 コンソールエラーの確認

開発者ツール（F12）→ Console タブ

- [ ] エラーが表示されていない
- [ ] 警告が最小限

### 10.4 TypeScriptエラーの確認

```bash
npm run build
```

ビルドエラーがないことを確認。

**チェックポイント**:
- [ ] ビルドが成功する
- [ ] TypeScriptエラーがない
- [ ] 警告が最小限

---

## 11. ステップ9: ビルドとデプロイ準備

### 11.1 本番ビルド

```bash
npm run build
```

**成功メッセージ例**:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    XXX kB         XXX kB
└ ○ /_not-found                          XXX kB         XXX kB
```

### 11.2 本番モードでの起動テスト

```bash
npm run start
```

`http://localhost:3000` で動作確認。

### 11.3 ビルド成果物の確認

```bash
ls -la .next/
```

`.next/` ディレクトリにビルド成果物が生成されていることを確認。

### 11.4 パフォーマンス確認（Lighthouse）

1. ブラウザの開発者ツール（F12）を開く
2. 「Lighthouse」タブを選択
3. 「Generate report」をクリック

**目標スコア**:
- Performance: 90点以上
- Accessibility: 90点以上
- Best Practices: 90点以上
- SEO: 90点以上

**チェックポイント**:
- [ ] ビルドが成功している
- [ ] 本番モードで動作する
- [ ] Lighthouseスコアが目標以上

---

## 12. トラブルシューティング

### 12.1 よくある問題

#### 問題1: プログレスバーが表示されない

**原因**: ヘッダーの高さが異なる

**解決方法**:
`ProgressBar.tsx` の `top-[60px]` を実際のヘッダーの高さに調整。

```typescript
// ヘッダーの高さを測定して調整
className="fixed top-[64px] ..." // 例: 64pxに変更
```

#### 問題2: Tailwindのカスタムカラーが効かない

**原因**: tailwind.config.ts の設定ミス

**解決方法**:
1. `tailwind.config.ts` を再確認
2. 開発サーバーを再起動

```bash
# Ctrl+C で停止
npm run dev
```

#### 問題3: "use client" エラー

**原因**: Client Componentで "use client" が抜けている

**解決方法**:
ファイルの先頭に追加：
```typescript
"use client";
```

#### 問題4: 型エラー

**原因**: 型定義の不一致

**解決方法**:
```bash
# TypeScriptの型チェック
npx tsc --noEmit
```

エラー箇所を修正。

#### 問題5: ビルドエラー

**原因**: 依存関係の問題

**解決方法**:
```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

---

## 13. デプロイ前チェックリスト

### 13.1 コード確認
- [ ] すべてのコンポーネントが実装されている
- [ ] TypeScriptエラーがない
- [ ] ESLintエラーが最小限
- [ ] コンソールエラーがない

### 13.2 機能確認
- [ ] プログレスバーが動作する
- [ ] トップに戻るボタンが動作する
- [ ] スムーススクロールが動作する
- [ ] レスポンシブが正しく動作する

### 13.3 デザイン確認
- [ ] 配色が正しい（ネイビー、オレンジ）
- [ ] フォントが読みやすい
- [ ] プレースホルダーが適切
- [ ] カード型レイアウトが適用されている

### 13.4 パフォーマンス確認
- [ ] ビルドが成功する
- [ ] Lighthouse スコア 90点以上
- [ ] 画像が最適化されている（実装時）

### 13.5 SEO確認
- [ ] メタデータが設定されている
- [ ] OGPが設定されている
- [ ] titleタグが適切
- [ ] descriptionが適切

### 13.6 ブラウザ互換性確認
- [ ] Chrome（最新版）で動作
- [ ] Safari（最新版）で動作
- [ ] Edge（最新版）で動作
- [ ] Firefox（最新版）で動作

---

## 14. デプロイ（Vercel推奨）

### 14.1 Gitリポジトリの作成

```bash
git init
git add .
git commit -m "Initial commit: AI画像生成講座LP"
```

GitHubにプッシュ（リポジトリ作成済みの場合）:
```bash
git remote add origin <your-repo-url>
git push -u origin main
```

### 14.2 Vercelへのデプロイ

#### 方法1: Vercel CLI

```bash
# Vercel CLIインストール
npm i -g vercel

# ログイン
vercel login

# デプロイ
vercel

# 本番デプロイ
vercel --prod
```

#### 方法2: Vercel Dashboard

1. https://vercel.com にアクセス
2. GitHubリポジトリと連携
3. プロジェクトをインポート
4. 自動デプロイ開始

### 14.3 デプロイ後の確認

- [ ] デプロイが成功している
- [ ] 本番URLでページが表示される
- [ ] すべての機能が動作する
- [ ] パフォーマンスが良好

---

## 15. 今後の拡張作業

### 15.1 画像の差し替え

実画像を `public/images/` に配置後、`next/image` を使用：

```typescript
import Image from 'next/image';

<Image
  src="/images/testimonial-1.jpg"
  alt="ライムさん"
  width={100}
  height={100}
  className="rounded-full"
/>
```

### 15.2 アニメーション追加（必要に応じて）

Framer Motionのインストール：
```bash
npm install framer-motion
```

### 15.3 フォーム機能の追加

お問い合わせフォームの実装（検討中）

---

## 付録A: 推定作業時間

| 作業内容 | 推定時間 |
|---------|---------|
| Next.jsプロジェクト初期化 | 15分 |
| Tailwind設定カスタマイズ | 15分 |
| プロジェクト構造作成 | 10分 |
| Layout実装 | 15分 |
| Client Components実装 | 30分 |
| Server Components実装 | 2時間 |
| メインページ組み立て | 15分 |
| 動作確認・テスト | 1時間 |
| ビルド・デプロイ準備 | 30分 |
| **合計** | **約5時間** |

---

## 付録B: 便利なコマンド一覧

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番モード起動
npm run start

# ESLintチェック
npm run lint

# TypeScript型チェック
npx tsc --noEmit

# 依存関係の更新確認
npm outdated

# キャッシュクリア
rm -rf .next
```

---

**以上が実装手順書です。**

この手順書に沿って作業を進めれば、Next.js + TypeScript + Tailwind CSSでLPを確実に実装できます。

---

## 変更履歴

| 日付 | バージョン | 変更内容 | 担当者 |
|------|----------|---------|-------|
| 2025-10-26 | 1.0 | Next.js版 初版作成 | - |

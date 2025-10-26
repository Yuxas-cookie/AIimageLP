# AI画像生成講座LP 要件定義書 (Next.js版)

**作成日**: 2025-10-26
**バージョン**: 2.0
**プロジェクト名**: AI画像生成講座 ランディングページ
**最終更新**: 2025-10-26
**技術スタック**: Next.js 15 + TypeScript + Tailwind CSS

---

## 1. プロジェクト概要

### 1.1 プロジェクトの目的
AI画像生成による副業講座を紹介するランディングページ（LP）を作成する。本LPは広告用の直接集客ツールではなく、営業担当者が見込み客（個人）に対して提案・説明を行う際の**営業支援資料**としての役割を持つ。

### 1.2 ターゲットユーザー
- **主要ターゲット**: toC（個人向け）
  - 副業で収入を増やしたい社会人
  - 物価高騰により生活費の不安を抱える方
  - 過去に副業に失敗した経験がある方
  - スキルなしでも始められる副業を探している方

### 1.3 使用シーン
- 営業担当者が見込み客との商談時にタブレット/PCで提示
- メールやLINEでURLを共有し、顧客が自主的に閲覧
- 上司や関係者への提案資料としての確認用途

### 1.4 プロジェクトの制約
- **現時点では方向性確認が目的**のため、以下は仮実装とする：
  - 画像素材（プレースホルダーで対応）
  - CTAのリンク先
  - 会社詳細情報
- 上司確認後、コンテンツの追加・変更が発生する予定

---

## 2. デザイン要件

### 2.1 デザインコンセプト
**「企業提案書スタイル（デザイン案A）」を採用**

- **キーワード**: 信頼性、権威性、ビジネスライク、堅実
- **避けるべき印象**: ポップ、カジュアル、情報商材的、派手

### 2.2 配色設計（Tailwind CSS対応）

| 用途 | カラー | カラーコード | Tailwind Class |
|------|--------|------------|----------------|
| **メインカラー** | ネイビー | `#1e3a8a` | `bg-blue-900`, `text-blue-900` |
| **サブカラー** | ライトブルー | `#2563eb`〜`#3b82f6` | `bg-blue-600`, `bg-blue-500` |
| **アクセントカラー** | オレンジ | `#f59e0b` | `bg-amber-500`, `text-amber-500` |
| **ベースカラー** | ホワイト | `#ffffff` | `bg-white`, `text-white` |
| **テキストカラー** | ダークグレー | `#374151` | `text-gray-700` |
| **背景グレー** | ライトグレー | `#f9fafb` | `bg-gray-50` |

**Tailwind設定でカスタムカラーを追加:**
```javascript
// tailwind.config.ts
colors: {
  navy: '#1e3a8a',
  'navy-light': '#2563eb',
  accent: '#f59e0b',
}
```

### 2.3 タイポグラフィ（Tailwind CSS対応）

| 要素 | Tailwind Class | サイズ | 太さ |
|------|---------------|-------|-----|
| **見出し（大）** | `text-3xl lg:text-4xl` | 28px〜40px | `font-bold` |
| **見出し（中）** | `text-xl lg:text-2xl` | 20px〜24px | `font-semibold` |
| **見出し（小）** | `text-lg` | 18px | `font-semibold` |
| **本文** | `text-base` | 16px | `font-normal` |
| **キャプション** | `text-sm` | 14px | `font-normal` |

**フォント設定:**
```javascript
// tailwind.config.ts
fontFamily: {
  sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans JP', 'sans-serif'],
}
```

### 2.4 レイアウト原則
- **コンテナ幅**: `max-w-7xl` (1280px) または `max-w-6xl` (1152px)
- **パディング**: `px-4 sm:px-6 lg:px-8`
- **セクション間隔**: `py-16 lg:py-20`
- **カード型デザイン**: `rounded-lg shadow-md`
- **視線誘導**: 上から下への自然な流れ

---

## 3. 技術要件

### 3.1 使用技術スタック

#### 3.1.1 フレームワーク・ライブラリ
- **Next.js**: 15.x (最新安定版)
  - App Router使用
  - Server Components優先
  - Client Componentsは必要な箇所のみ使用
- **React**: 19.x
- **TypeScript**: 5.x

#### 3.1.2 スタイリング
- **Tailwind CSS**: 4.x (最新版)
  - JIT (Just-In-Time) モード
  - カスタムカラー・ユーティリティ追加
  - レスポンシブプレフィックス使用

#### 3.1.3 その他
- **ESLint**: コード品質管理
- **Prettier**: コードフォーマット（推奨）

### 3.2 プロジェクト構成

```
/画像生成LP/
  ├── app/
  │   ├── layout.tsx           # ルートレイアウト
  │   ├── page.tsx             # トップページ
  │   ├── globals.css          # グローバルCSS（Tailwind含む）
  │   └── components/
  │       ├── Header.tsx       # ヘッダーコンポーネント
  │       ├── ProgressBar.tsx  # プログレスバー
  │       ├── Hero.tsx         # ヒーローセクション
  │       ├── Problems.tsx     # 問題提起
  │       ├── Stats.tsx        # 統計データ
  │       ├── Testimonials.tsx # 実績者の声
  │       ├── Curriculum.tsx   # カリキュラム
  │       ├── Strengths.tsx    # 講座の強み
  │       ├── Reviews.tsx      # 講座生の声
  │       ├── CTA.tsx          # CTAセクション
  │       ├── Footer.tsx       # フッター
  │       └── ScrollToTop.tsx  # トップに戻るボタン
  ├── public/
  │   └── images/              # 画像ファイル
  ├── docs/                    # 資料
  ├── tailwind.config.ts       # Tailwind設定
  ├── tsconfig.json            # TypeScript設定
  ├── next.config.js           # Next.js設定
  ├── package.json
  └── 要件定義書_Next.js版.md   # 本ファイル
```

### 3.3 コンポーネント設計方針

#### 3.3.1 Server Components vs Client Components

**Server Components (デフォルト):**
- Header
- Hero
- Problems
- Stats
- Testimonials
- Curriculum
- Strengths
- Reviews
- CTA
- Footer

**Client Components ("use client"必須):**
- ProgressBar (スクロールイベント使用)
- ScrollToTop (クリックイベント、スクロールイベント使用)

#### 3.3.2 コンポーネント命名規則
- PascalCase使用
- 1コンポーネント1ファイル
- ファイル名とコンポーネント名を一致させる

#### 3.3.3 Props型定義
```typescript
// 例: Testimonials.tsx
interface Testimonial {
  name: string;
  achievement: string;
  text: string;
  imagePlaceholder?: boolean;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}
```

---

## 4. 機能要件

### 4.1 必須機能

#### 4.1.1 プログレスバー
- **実装**: Client Component
- **配置**: 固定ヘッダーの直下に繋がる形で配置
- **動作**: スクロール量に応じてバーが伸びる（0%〜100%）
- **実装方法**:
  ```typescript
  "use client";
  import { useEffect, useState } from 'react';

  export default function ProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
      const updateProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
      };

      window.addEventListener('scroll', updateProgress);
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

#### 4.1.2 ページトップへ戻るボタン
- **実装**: Client Component
- **配置**: 画面右下に固定
- **表示条件**: 300px以上スクロールしたら表示
- **実装方法**:
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
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 w-12 h-12 bg-blue-900 text-white rounded
          shadow-lg transition-opacity duration-300 hover:bg-blue-800 z-50
          ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        ▲
      </button>
    );
  }
  ```

#### 4.1.3 固定ヘッダー
- **実装**: Server Component
- **配置**: 画面最上部に固定（sticky or fixed）
- **Tailwind実装**:
  ```tsx
  <header className="fixed top-0 left-0 w-full bg-blue-900 shadow-md z-50">
    <div className="max-w-7xl mx-auto px-4 py-5">
      <h1 className="text-xl font-semibold text-white">株式会社SKH</h1>
    </div>
  </header>
  ```

#### 4.1.4 レスポンシブ対応
Tailwindのブレイクポイントを使用:
- `sm:` 640px以上（スマホ横向き〜タブレット）
- `md:` 768px以上（タブレット）
- `lg:` 1024px以上（PC）
- `xl:` 1280px以上（大画面PC）

**実装例:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* スマホ: 1列、タブレット: 2列、PC: 3列 */}
</div>
```

### 4.2 アニメーション方針
**ビジネスライクな印象を保つため、アニメーションは最小限**

✅ **採用するアニメーション（Tailwind）:**
- スムーススクロール: `scroll-smooth`
- ホバー効果: `hover:scale-105 transition-transform`
- フェードイン/アウト: `transition-opacity duration-300`
- プログレスバー: `transition-all duration-100`

❌ **不要なアニメーション:**
- 要素のスライドイン
- パララックス効果
- 複雑なトランジション

---

## 5. コンテンツ構成

### 5.1 全体構成（変更なし）

| # | セクション名 | コンポーネント名 |
|---|------------|----------------|
| - | **ヘッダー** | `Header.tsx` |
| - | **プログレスバー** | `ProgressBar.tsx` |
| 1 | **ヒーローセクション** | `Hero.tsx` |
| 2 | **問題提起** | `Problems.tsx` |
| 3 | **共感・安心** | (Problemsに統合可) |
| 4 | **統計データ** | `Stats.tsx` |
| 5 | **実績者の声** | `Testimonials.tsx` |
| 6 | **解決策** | (Heroに統合可) |
| 7 | **カリキュラム** | `Curriculum.tsx` |
| 8 | **講座の強み** | `Strengths.tsx` |
| 9 | **講座生の声** | `Reviews.tsx` |
| 10 | **CTA** | `CTA.tsx` |
| - | **フッター** | `Footer.tsx` |
| - | **トップに戻る** | `ScrollToTop.tsx` |

### 5.2 各セクションの実装方針

#### Hero.tsx
```tsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-600 py-24 lg:py-32 text-center">
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

#### Problems.tsx
```tsx
const problems = [
  "会社の給与がなかなか上がらない",
  "物価高騰で生活費がほしい...",
  // ...
];

export default function Problems() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-10">
          こんなお悩みはありませんか？
        </h2>
        <div className="bg-white border-l-4 border-amber-500 shadow-md p-8">
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-500 mr-3">●</span>
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

#### Testimonials.tsx（カード型グリッド）
```tsx
export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-12">
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
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {testimonial.name}
              </h3>
              <div className="text-lg font-semibold text-amber-500 mb-4">
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

---

## 6. Next.js特有の機能

### 6.1 メタデータ設定

`app/layout.tsx` でメタデータを設定:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI画像生成講座 | 株式会社SKH',
  description: 'スキルゼロから月10万円を目指す実践プログラム',
  openGraph: {
    title: 'AI画像生成講座',
    description: 'スキルゼロから月10万円を目指す実践プログラム',
    type: 'website',
  },
};
```

### 6.2 画像最適化

Next.jsの `next/image` コンポーネントを使用（実画像追加時）:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-image.jpg"
  alt="AI画像生成"
  width={1200}
  height={600}
  priority
  className="rounded-lg"
/>
```

### 6.3 フォント最適化

`next/font/google` を使用（オプション）:

```typescript
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body>{children}</body>
    </html>
  );
}
```

---

## 7. 開発・ビルド

### 7.1 環境構築

```bash
# プロジェクト初期化
npx create-next-app@latest . --typescript --tailwind --eslint --app

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

### 7.2 開発コマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動（http://localhost:3000） |
| `npm run build` | 本番用ビルド |
| `npm run start` | 本番モードで起動 |
| `npm run lint` | ESLintチェック |

### 7.3 ビルド最適化

Next.js 15の最適化機能を活用:
- 自動コード分割
- 画像最適化
- フォント最適化
- CSS最小化
- Tree Shaking

---

## 8. デプロイ

### 8.1 推奨デプロイ先

1. **Vercel** (推奨)
   - Next.js開発元のホスティング
   - 自動デプロイ、プレビュー環境
   - 無料プランあり

2. **Netlify**
   - Next.js対応
   - 自動デプロイ

3. **その他**
   - AWS Amplify
   - Cloudflare Pages
   - 自社サーバー（Static Export）

### 8.2 デプロイ手順（Vercel）

```bash
# Vercel CLIインストール
npm i -g vercel

# デプロイ
vercel

# 本番デプロイ
vercel --prod
```

---

## 9. Tailwind CSS設定

### 9.1 tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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

### 9.2 globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
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

---

## 10. TypeScript型定義

### 10.1 共通型定義

`app/types/index.ts` に配置:

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

export interface Strength {
  title: string;
  items: string[];
}
```

---

## 11. 確定事項

### 11.1 技術的確定事項
- [x] Next.js 15 + App Router使用
- [x] TypeScript使用
- [x] Tailwind CSS使用
- [x] Server Components優先
- [x] Client Componentsは最小限
- [x] プログレスバー実装（Client Component）
- [x] トップに戻るボタン実装（Client Component）
- [x] レスポンシブ対応必須

### 11.2 デザイン確定事項
- [x] デザイン案A（企業提案書スタイル）採用
- [x] 配色: ネイビー + オレンジ
- [x] アニメーション最小限
- [x] カード型レイアウト
- [x] グリッドシステム使用

### 11.3 機能確定事項
- [x] 全11セクション実装
- [x] 画像プレースホルダー配置
- [x] CTAは最後のみ
- [x] フッター情報は仮実装

---

## 12. 今後の拡張予定

### 12.1 第一段階（今回実装）
- ✅ Next.js + Tailwind CSSでの基本実装
- ✅ 全セクションのコンポーネント化
- ✅ レスポンシブ対応
- ✅ プログレスバー、トップに戻るボタン

### 12.2 第二段階（上司確認後）
- ⏳ 実画像の差し替え（next/image使用）
- ⏳ コンテンツの追加・修正
- ⏳ CTAのリンク先設定
- ⏳ フッター情報の正式版
- ⏳ アニメーション追加（必要に応じて）

### 12.3 第三段階（検討中）
- 🔍 フォーム機能の追加
- 🔍 Google Analytics設定
- 🔍 SEO最適化
- 🔍 OGP画像設定
- 🔍 多言語対応（i18n）

---

## 13. パフォーマンス目標

- **Lighthouse Score**: 90点以上（全カテゴリ）
- **First Contentful Paint (FCP)**: 1.5秒以内
- **Largest Contentful Paint (LCP)**: 2.5秒以内
- **Cumulative Layout Shift (CLS)**: 0.1以下
- **Time to Interactive (TTI)**: 3秒以内

---

## 14. ブラウザ対応

### 14.1 必須対応
- Google Chrome（最新版）
- Safari（最新版）
- Microsoft Edge（最新版）
- Firefox（最新版）
- iOS Safari（最新版）
- Android Chrome（最新版）

### 14.2 最小対応バージョン
- Chrome: 最新2バージョン
- Safari: 最新2バージョン
- Firefox: 最新2バージョン
- Edge: 最新2バージョン

---

## 変更履歴

| 日付 | バージョン | 変更内容 | 担当者 |
|------|----------|---------|-------|
| 2025-10-26 | 1.0 | 初版作成（HTML/CSS/JS版） | - |
| 2025-10-26 | 1.1 | プログレスバー配置明確化、アニメーション方針追加 | - |
| 2025-10-26 | 2.0 | Next.js + TypeScript + Tailwind CSS版に全面改訂 | - |

---

**以上**

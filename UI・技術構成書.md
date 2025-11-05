# AI画像生成講座LP UI・技術構成書

**作成日**: 2025-11-05
**プロジェクト名**: AI画像生成講座 ランディングページ
**目的**: 技術スタック、アーキテクチャ、UI設計の詳細を明確化

---

## 目次

1. [技術スタック概要](#1-技術スタック概要)
2. [プロジェクト構造](#2-プロジェクト構造)
3. [アーキテクチャ設計](#3-アーキテクチャ設計)
4. [UIコンポーネントライブラリ](#4-uiコンポーネントライブラリ)
5. [スタイリング戦略](#5-スタイリング戦略)
6. [アニメーション・エフェクト](#6-アニメーションエフェクト)
7. [レスポンシブデザイン](#7-レスポンシブデザイン)
8. [TypeScript設定](#8-typescript設定)
9. [ビルド・最適化](#9-ビルド最適化)
10. [依存関係詳細](#10-依存関係詳細)
11. [パフォーマンス戦略](#11-パフォーマンス戦略)
12. [開発ワークフロー](#12-開発ワークフロー)

---

## 1. 技術スタック概要

### 1.1 コア技術

| 技術 | バージョン | 用途 | 選定理由 |
|------|----------|------|---------|
| **Next.js** | 15.1.4 | フレームワーク | React SSR/SSG、App Router、画像最適化 |
| **React** | 19.0.0 | UIライブラリ | コンポーネントベース開発、豊富なエコシステム |
| **TypeScript** | 5.x | 型システム | 型安全性、開発体験向上、バグ削減 |
| **Tailwind CSS** | 3.4.1 | CSSフレームワーク | ユーティリティファースト、高速開発 |

### 1.2 UIライブラリ・エフェクト

| ライブラリ | バージョン | 用途 |
|-----------|----------|------|
| **Framer Motion** | 12.23.24 | アニメーション |
| **@tsparticles/react** | 3.0.0 | パーティクルエフェクト |
| **@tsparticles/slim** | 3.9.1 | パーティクルエンジン（軽量版） |
| **@react-spring/web** | 10.0.3 | スプリングアニメーション |
| **react-intersection-observer** | 9.16.0 | スクロール検知 |

### 1.3 ユーティリティ

| ライブラリ | バージョン | 用途 |
|-----------|----------|------|
| **clsx** | 2.1.1 | クラス名結合 |
| **tailwind-merge** | 3.3.1 | Tailwindクラス競合解決 |
| **class-variance-authority** | 0.7.1 | バリアント管理 |
| **lucide-react** | 0.548.0 | アイコンライブラリ |

### 1.4 開発ツール

| ツール | バージョン | 用途 |
|--------|----------|------|
| **ESLint** | 8.x | コード品質チェック |
| **Autoprefixer** | 10.4.20 | CSSベンダープレフィックス |
| **PostCSS** | 8.x | CSS変換 |

### 1.5 技術選定の理由

#### Next.js 15を選んだ理由
- ✅ **App Router**: 最新のルーティングシステム
- ✅ **Server Components**: パフォーマンス最適化
- ✅ **画像最適化**: 自動的な画像最適化
- ✅ **SEO対応**: メタデータAPI
- ✅ **Vercelデプロイ**: シームレスなデプロイ体験

#### Tailwind CSSを選んだ理由
- ✅ **高速開発**: HTMLから離れずにスタイリング
- ✅ **一貫性**: デザインシステムの自動構築
- ✅ **パフォーマンス**: 未使用CSSの自動削除
- ✅ **レスポンシブ**: モバイルファーストのブレイクポイント

#### TypeScriptを選んだ理由
- ✅ **型安全性**: バグの早期発見
- ✅ **開発体験**: インテリセンス、自動補完
- ✅ **リファクタリング**: 安全な変更

---

## 2. プロジェクト構造

### 2.1 ディレクトリ構成

```
/画像生成LP/
├── app/                          # Next.js App Router
│   ├── components/              # ページ固有コンポーネント (15個)
│   │   ├── Header.tsx          # ヘッダー (9行)
│   │   ├── ProgressBar.tsx     # プログレスバー (31行)
│   │   ├── Hero.tsx            # ヒーロー (49行)
│   │   ├── Problems.tsx        # 問題提起 (69行)
│   │   ├── Empathy.tsx         # 共感 (11行)
│   │   ├── Stats.tsx           # 統計 (49行)
│   │   ├── Transition.tsx      # 移行 (14行)
│   │   ├── Solution.tsx        # 解決策 (36行)
│   │   ├── Testimonials.tsx    # 実績者の声 (94行)
│   │   ├── CourseContent.tsx   # 講座内容 (144行)
│   │   ├── Strengths.tsx       # 講座の強み (175行)
│   │   ├── Reviews.tsx         # 講座生の声 (145行)
│   │   ├── CTA.tsx             # CTA (24行)
│   │   ├── Footer.tsx          # フッター (14行)
│   │   └── ScrollToTop.tsx     # トップに戻る (31行)
│   │
│   ├── types/                   # 型定義
│   │   └── index.ts
│   │
│   ├── layout.tsx               # ルートレイアウト
│   ├── page.tsx                 # トップページ
│   └── globals.css              # グローバルCSS
│
├── components/                   # 共有コンポーネント
│   └── ui/                      # UIコンポーネントライブラリ (9個、1439行)
│       ├── aurora-background.tsx    # オーロラ背景
│       ├── sparkles.tsx            # パーティクルエフェクト
│       ├── timeline.tsx            # タイムライン
│       ├── feature-section.tsx     # 機能セクション
│       ├── masonry.tsx             # メイソリーレイアウト
│       ├── modern-timeline.tsx     # モダンタイムライン
│       ├── parallax-scroll.tsx     # パララックススクロール
│       ├── card.tsx                # カード
│       └── badge.tsx               # バッジ
│
├── lib/                          # ユーティリティ
│   └── utils.ts                 # クラス名マージ関数
│
├── public/                       # 静的ファイル
│   └── images/                  # 画像アセット
│       ├── *.svg                # SVG画像 (14個)
│       └── 受講生の声/          # レビュー画像 (31個)
│
├── tailwind.config.ts           # Tailwind設定
├── tsconfig.json                # TypeScript設定
├── next.config.ts               # Next.js設定
├── postcss.config.mjs           # PostCSS設定
├── package.json                 # 依存関係
└── .eslintrc.json              # ESLint設定
```

### 2.2 コード規模

| カテゴリ | ファイル数 | 総行数 |
|---------|-----------|--------|
| **ページコンポーネント** | 15個 | 1,063行 |
| **UIコンポーネント** | 9個 | 1,439行 |
| **設定ファイル** | 5個 | - |
| **型定義** | 1個 | - |

### 2.3 アセット規模

| 種類 | 数量 |
|------|------|
| **SVG画像** | 14個 |
| **PNG画像** | 31個 (受講生の声) |

---

## 3. アーキテクチャ設計

### 3.1 Next.js App Router構成

#### レンダリング戦略

```
┌─────────────────────────────────────┐
│   app/layout.tsx (Root Layout)      │
│   ・メタデータ設定                   │
│   ・フォント読み込み                 │
│   ・グローバルCSS                    │
└─────────────────────────────────────┘
              │
              ↓
┌─────────────────────────────────────┐
│   app/page.tsx (Home Page)          │
│   ・全セクションのインポート          │
│   ・Server Component (デフォルト)    │
└─────────────────────────────────────┘
```

### 3.2 Server Components vs Client Components

#### Server Components (デフォルト)

静的コンテンツ、SEOに有利、サーバーでレンダリング

| コンポーネント | 理由 |
|--------------|------|
| Header | 固定コンテンツ |
| Problems | 静的リスト |
| Empathy | 静的テキスト |
| Stats | 静的データ |
| Transition | 静的テキスト |
| Testimonials | 静的データ（ただし"use client"使用） |
| CTA | 静的コンテンツ（ボタンはクライアント側で処理） |
| Footer | 固定コンテンツ |

#### Client Components ("use client"指定)

インタラクティブ、状態管理、ブラウザAPIを使用

| コンポーネント | 理由 | 使用機能 |
|--------------|------|---------|
| **ProgressBar** | スクロールイベント | `window.scrollY`, `useState`, `useEffect` |
| **ScrollToTop** | スクロール検知、クリック | `window.scrollY`, `window.scrollTo`, `useState` |
| **Hero** | アニメーション | Framer Motion, Aurora背景 |
| **Solution** | パーティクル | tsparticles, Sparkles |
| **Testimonials** | アニメーション | Framer Motion |
| **CourseContent** | レスポンシブ切り替え、スクロール | IntersectionObserver, `useState` |
| **Strengths** | スクロールアニメーション | Framer Motion, Timeline |
| **Reviews** | 動的レイアウト、画像読み込み | Masonry, `useState`, `useEffect` |

### 3.3 データフロー

```
静的データ (コンポーネント内定義)
    ↓
Props経由でのデータ渡し
    ↓
レンダリング (Server/Client)
    ↓
インタラクション (Client Componentのみ)
```

現在の実装では、すべてのデータはコンポーネント内にハードコーディングされています。
外部API、CMS、データベース連携は未実装です。

---

## 4. UIコンポーネントライブラリ

### 4.1 カスタムUIコンポーネント一覧

本プロジェクトでは、**9個のカスタムUIコンポーネント**（合計1,439行）を実装しています。

#### ① AuroraBackground

**ファイル**: `components/ui/aurora-background.tsx`

**用途**: ヒーローセクションの背景エフェクト

**機能**:
- グラデーション背景の動的アニメーション
- ライト/ダークモード対応
- ラジアルグラデーションマスク

**技術**:
```typescript
- CSS変数を使用した複雑なグラデーション
- Tailwind CSSアニメーション (animate-aurora)
- blur、invert、mix-blend-differenceフィルター
```

**使用例**:
```tsx
<AuroraBackground>
  <h1>AI画像生成マスター講座</h1>
</AuroraBackground>
```

**特徴**:
- 🎨 **視覚的インパクト**: 動的な光のエフェクト
- ⚡ **パフォーマンス**: CSS transformのみ使用、GPU高速化
- 🌓 **ダークモード対応**: 自動切り替え

---

#### ② SparklesCore

**ファイル**: `components/ui/sparkles.tsx`

**用途**: Solutionセクションのパーティクルエフェクト

**機能**:
- 動的なパーティクル生成
- カスタマイズ可能な色、サイズ、密度
- スムーズなフェードイン

**技術**:
```typescript
- @tsparticles/react
- @tsparticles/slim (軽量版エンジン)
- Framer Motion (フェードイン)
```

**使用例**:
```tsx
<SparklesCore
  background="transparent"
  minSize={0.4}
  maxSize={1}
  particleDensity={1200}
  particleColor="#FCD34D"
/>
```

**パラメータ**:
| パラメータ | 型 | デフォルト | 説明 |
|-----------|---|-----------|------|
| background | string | - | 背景色 |
| minSize | number | - | 最小パーティクルサイズ |
| maxSize | number | - | 最大パーティクルサイズ |
| particleDensity | number | - | パーティクル密度 |
| particleColor | string | - | パーティクル色 |

---

#### ③ Timeline

**ファイル**: `components/ui/timeline.tsx`

**用途**: Strengthsセクションのタイムライン表示

**機能**:
- スクロール連動のプログレス表示
- グループ化されたタイムライン項目
- スティッキーヘッダー
- レスポンシブ対応（デスクトップ/モバイル）

**技術**:
```typescript
- Framer Motion (スクロール連動)
- useScroll, useTransform
- IntersectionObserver
- MutationObserver
```

**データ構造**:
```typescript
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
```

**特徴**:
- 📊 **視覚的な進行度**: スクロールに応じてラインが伸びる
- 📱 **レスポンシブ**: デスクトップとモバイルで異なるレイアウト
- 🎯 **グループ化**: 同じタイトルの項目をグループ化

---

#### ④ FeatureSteps

**ファイル**: `components/ui/feature-section.tsx`

**用途**: CourseContentセクションの機能紹介

**機能**:
- スクロールベースのステップ切り替え
- 自動再生機能
- 画像とテキストの連動表示
- レスポンシブ対応

**技術**:
```typescript
- Framer Motion (トランジション)
- スクロール進行度計算
- 動的ステップ切り替え
- next/image
```

**データ構造**:
```typescript
interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}
```

**使用例**:
```tsx
<FeatureSteps
  features={features}
  title="講座内容"
  autoPlayInterval={4000}
/>
```

**パラメータ**:
| パラメータ | 型 | デフォルト | 説明 |
|-----------|---|-----------|------|
| features | Feature[] | - | 機能リスト |
| title | string | "How to get Started" | タイトル |
| autoPlayInterval | number | 3000 | 自動切り替え間隔(ms) |
| imageHeight | string | "h-[400px]" | 画像高さ |

**レスポンシブ動作**:
- **デスクトップ (≥768px)**: スクロール連動の自動切り替え
- **モバイル (<768px)**: CourseContentコンポーネント側で垂直スクロール表示

---

#### ⑤ Masonry

**ファイル**: `components/ui/masonry.tsx`

**用途**: Reviewsセクションのメイソリーレイアウト

**機能**:
- Pinterest風のレイアウト
- 動的カラム数調整（2〜3列）
- スプリングアニメーション
- 画像クリックモーダル対応

**技術**:
```typescript
- @react-spring/web (useTransition)
- 動的グリッド計算
- レスポンシブカラム
```

**データ構造**:
```typescript
interface MasonryItem {
  id: string | number;
  height: number;
  image: string;
}
```

**アルゴリズム**:
```
1. 各カラムの高さを追跡
2. 新しいアイテムを最も短いカラムに配置
3. X座標 = カラム幅 × カラムインデックス
4. Y座標 = 現在のカラム高さ
5. カラム高さを更新
```

**レスポンシブカラム**:
- **デスクトップ (≥1024px)**: 3列
- **タブレット/モバイル (<1024px)**: 2列

---

#### ⑥ Modern Timeline

**ファイル**: `components/ui/modern-timeline.tsx`

**用途**: 予備のタイムラインコンポーネント（現在未使用）

**機能**:
- よりモダンなタイムラインUI
- 画像表示機能
- スクロールアニメーション

---

#### ⑦ Parallax Scroll

**ファイル**: `components/ui/parallax-scroll.tsx`

**用途**: 予備のパララックススクロール（現在未使用）

**機能**:
- 視差効果
- 画像グリッド表示

---

#### ⑧ Card

**ファイル**: `components/ui/card.tsx`

**用途**: カード型UIコンポーネント

**機能**:
- 再利用可能なカードコンポーネント
- ヘッダー、コンテンツ、フッター、タイトル、説明のサブコンポーネント

---

#### ⑨ Badge

**ファイル**: `components/ui/badge.tsx`

**用途**: バッジ・タグ表示

**機能**:
- class-variance-authorityを使用したバリアント管理
- カスタマイズ可能なスタイル

---

### 4.2 UIコンポーネント使用マップ

| UIコンポーネント | 使用箇所 | 使用目的 |
|----------------|---------|---------|
| **AuroraBackground** | Hero | 背景エフェクト、視覚的インパクト |
| **SparklesCore** | Solution | パーティクルエフェクト、特別感 |
| **Timeline** | Strengths | 8つの強みを時系列表示 |
| **FeatureSteps** | CourseContent (デスクトップ) | 6つの学習要素をステップ表示 |
| **Masonry** | Reviews | 31件の画像をメイソリー配置 |
| **Card** | - | 予備（将来的に使用可能） |
| **Badge** | - | 予備（将来的に使用可能） |
| **Modern Timeline** | - | 予備（将来的に使用可能） |
| **Parallax Scroll** | - | 予備（将来的に使用可能） |

### 4.3 UIコンポーネントの設計思想

#### 再利用性
- ✅ プロパティ経由でのカスタマイズ
- ✅ 型安全なインターフェース
- ✅ 汎用的なデータ構造

#### パフォーマンス
- ✅ メモ化（useMemo, useCallback）
- ✅ 効率的なレンダリング
- ✅ GPU高速化（transform, opacity）

#### アクセシビリティ
- ✅ セマンティックHTML
- ✅ ARIA属性（一部）
- ⚠️ キーボードナビゲーション（改善余地あり）

---

## 5. スタイリング戦略

### 5.1 Tailwind CSS設定

#### カスタムカラー

**tailwind.config.ts**:
```typescript
colors: {
  navy: {
    DEFAULT: '#1e3a8a',  // メインカラー
    light: '#2563eb',    // サブカラー
  },
  accent: '#f59e0b',     // アクセントカラー（オレンジ）
  success: {
    DEFAULT: 'hsl(var(--success))',
    foreground: 'hsl(var(--success-foreground))',
  },
  warning: {
    DEFAULT: 'hsl(var(--warning))',
    foreground: 'hsl(var(--warning-foreground))',
  },
}
```

#### カスタムフォント

```typescript
fontFamily: {
  sans: ['var(--font-noto-serif-jp)', 'var(--font-playfair-display)', 'serif'],
  playfair: ['var(--font-playfair-display)', 'serif'],
  jp: ['var(--font-noto-serif-jp)', 'serif'],
}
```

**使用フォント**:
- **Playfair Display**: 英字見出し（優雅、高級感）
- **Noto Serif JP**: 日本語本文・見出し（読みやすさ）

#### カスタムアニメーション

```typescript
animation: {
  aurora: "aurora 60s linear infinite",
  shimmer: "shimmer 2s linear infinite",
}

keyframes: {
  aurora: {
    from: { backgroundPosition: "50% 50%, 50% 50%" },
    to: { backgroundPosition: "350% 50%, 350% 50%" },
  },
  shimmer: {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(100%)" },
  },
}
```

#### プラグイン

```typescript
plugins: [addVariablesForColors]
```

**addVariablesForColors**:
- すべてのTailwindカラーをCSS変数として追加
- 例: `var(--blue-500)`, `var(--gray-200)`

### 5.2 グローバルCSS (globals.css)

#### CSS変数定義

```css
@layer base {
  :root {
    --success: 142 71% 45%;
    --success-foreground: 0 0% 98%;
    --warning: 38 92% 50%;
    --warning-foreground: 0 0% 15%;
  }

  .dark {
    --success: 142 76% 36%;
    --success-foreground: 0 0% 98%;
    --warning: 48 96% 89%;
    --warning-foreground: 0 0% 15%;
  }

  html {
    @apply scroll-smooth;
  }

  body {
    @apply text-gray-700 bg-white;
  }
}
```

#### カスタムコンポーネントクラス

```css
@layer components {
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full;
  }

  .section-padding {
    @apply py-12 sm:py-16 lg:py-20;
  }

  .content-container {
    @apply max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full;
  }
}
```

**使用例**:
```tsx
<section className="section-padding bg-white">
  <div className="section-container">
    {/* コンテンツ */}
  </div>
</section>
```

### 5.3 スタイリングパターン

#### グラデーションテキスト

頻繁に使用されるパターン:
```tsx
<h2 className="bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent">
  見出しテキスト
</h2>
```

WebKitブラウザ対応:
```tsx
<h2
  className="..."
  style={{
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
```

#### カード型デザイン

```tsx
<div className="bg-white rounded-lg shadow-lg p-6">
  {/* カードコンテンツ */}
</div>
```

#### ホバーエフェクト

```tsx
<button className="transition-colors duration-200 hover:bg-amber-600">
  ボタン
</button>
```

### 5.4 ダークモード対応

現在の実装では、一部のUIコンポーネント（AuroraBackground, Timeline）でダークモード対応していますが、
ページ全体のダークモード切り替え機能は未実装です。

**対応済み**:
```tsx
className="dark:bg-neutral-900"
```

**今後の実装**:
- next-themesの導入
- ダークモード切り替えボタン
- ユーザー設定の永続化

---

## 6. アニメーション・エフェクト

### 6.1 アニメーションライブラリ

#### Framer Motion

**用途**: 宣言的アニメーション、スクロール連動

**主な使用箇所**:
| コンポーネント | アニメーション | コード例 |
|--------------|-------------|---------|
| Hero | フェードイン + スライドアップ | `initial={{opacity: 0, y: 40}}` `whileInView={{opacity: 1, y: 0}}` |
| CourseContent | スクロールフェードイン | `initial={{opacity: 0, y: 30}}` `animate={{opacity: 1, y: 0}}` |
| Timeline | スクロール進行度 | `useScroll`, `useTransform` |
| FeatureSteps | ステップトランジション | `AnimatePresence`, `motion.div` |

**主要API**:
```typescript
- motion.div: アニメーション可能なdiv
- useScroll: スクロール進行度
- useTransform: 値の変換
- AnimatePresence: マウント/アンマウント時のアニメーション
```

#### @tsparticles

**用途**: パーティクルエフェクト

**使用箇所**: Solution

**設定**:
```typescript
{
  background: "transparent",
  minSize: 0.4,
  maxSize: 1,
  particleDensity: 1200,
  particleColor: "#FCD34D",  // 金色
}
```

#### @react-spring

**用途**: スプリングベースのアニメーション

**使用箇所**: Masonry

**特徴**:
- 物理ベースのアニメーション
- スムーズな移動
- 自然な減衰

### 6.2 アニメーション戦略

#### 段階的な情報開示

```
ページ読み込み
  ↓
ヒーローセクションのフェードイン (0.3秒遅延)
  ↓
スクロール
  ↓
各セクションのフェードイン（スクロール連動）
  ↓
インタラクション（ホバー、クリック）
```

#### パフォーマンス最適化

✅ **GPU高速化プロパティのみ使用**:
- `transform` (translate, scale, rotate)
- `opacity`

❌ **避けるプロパティ**:
- `width`, `height` (レイアウト変更)
- `top`, `left` (レイアウト変更)
- `background-position` (一部例外: Aurora)

#### アニメーション設定

| 用途 | duration | easing |
|------|----------|--------|
| フェードイン | 0.6〜0.8秒 | easeOut |
| ホバー | 0.2秒 | linear |
| スクロール連動 | - | linear |
| ステップ切り替え | 0.5秒 | easeInOut |

### 6.3 スクロールエフェクト

#### プログレスバー

```typescript
const scrollProgress = (scrollTop / docHeight) * 100;
```

#### スクロールトゥトップ

```typescript
setIsVisible(window.scrollY > 300);
```

#### Timeline

```typescript
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start center", "end end"],
});

const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
```

#### FeatureSteps

```typescript
const scrollProgress = Math.max(0, Math.min(1,
  (viewportHeight / 2 - containerTop) / (containerHeight - viewportHeight / 2)
));

const newStep = Math.floor(scrollProgress * features.length);
```

---

## 7. レスポンシブデザイン

### 7.1 ブレイクポイント

Tailwindデフォルトのブレイクポイントを使用:

| プレフィックス | 最小幅 | デバイス |
|-------------|--------|---------|
| `sm:` | 640px | スマホ横向き、小型タブレット |
| `md:` | 768px | タブレット |
| `lg:` | 1024px | デスクトップ |
| `xl:` | 1280px | 大画面デスクトップ |
| `2xl:` | 1536px | 超大画面 |

### 7.2 レスポンシブ戦略

#### モバイルファースト

基本スタイルはモバイル向け、大画面向けに上書き:

```tsx
<div className="text-base sm:text-lg md:text-xl lg:text-2xl">
  {/* モバイル: 16px, タブレット: 18px, デスクトップ: 20px, 大画面: 24px */}
</div>
```

#### グリッドシステム

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* モバイル: 1列, タブレット: 2列, デスクトップ: 3列 */}
</div>
```

#### コンテナ幅

```tsx
// section-container
max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12

// content-container
max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto
```

#### セクション間隔

```tsx
// section-padding
py-12 sm:py-16 lg:py-20
```

### 7.3 コンポーネント別レスポンシブ対応

#### Hero

| デバイス | フォントサイズ | 特徴ボックス |
|---------|-------------|------------|
| モバイル | 5xl (48px) | 縦並び |
| タブレット | 6xl (60px) | 横並び |
| デスクトップ | 8xl (96px) | 横並び |
| 超大画面 | 9xl (128px) | 横並び |

```tsx
<h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
  AI画像生成マスター講座
</h2>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
  {/* 3つの特徴 */}
</div>
```

#### CourseContent

| デバイス | 表示方法 |
|---------|---------|
| モバイル (<768px) | 縦スクロール、フェードイン |
| デスクトップ (≥768px) | FeatureSteps（スクロール連動） |

```tsx
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  setIsMobile(window.innerWidth < 768);
}, []);

return isMobile ? (
  <MobileLayout />
) : (
  <FeatureSteps />
);
```

#### Reviews (Masonry)

| デバイス | カラム数 |
|---------|---------|
| モバイル (<1024px) | 2列 |
| デスクトップ (≥1024px) | 3列 |

```tsx
useEffect(() => {
  const updateColumns = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setColumns(3);
    } else {
      setColumns(2);
    }
  };
  updateColumns();
}, []);
```

#### Timeline

| デバイス | レイアウト |
|---------|----------|
| モバイル | シンプルなタイムライン |
| デスクトップ | スティッキーヘッダー、縦ライン |

```tsx
<div className="hidden md:flex">
  {/* デスクトップ専用UI */}
</div>

<div className="flex md:hidden">
  {/* モバイル専用UI */}
</div>
```

### 7.4 画像のレスポンシブ対応

#### next/image使用

```tsx
<Image
  src="/images/困る.svg"
  alt="困っている人"
  width={200}
  height={200}
  className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
/>
```

- 自動的に最適なサイズの画像を配信
- WebP/AVIF対応
- 遅延読み込み

### 7.5 タッチデバイス対応

#### タップ領域の拡大

```tsx
<button className="py-3 sm:py-4 px-8 sm:px-12">
  {/* モバイル: 縦12px、横32px / デスクトップ: 縦16px、横48px */}
</button>
```

#### ホバーの条件付き適用

```tsx
<div className="hover:shadow-xl transition-shadow">
  {/* デスクトップではホバーエフェクト、モバイルでは無効 */}
</div>
```

**改善案**:
```tsx
<div className="md:hover:shadow-xl transition-shadow">
  {/* mdブレイクポイント以上でのみホバー適用 */}
</div>
```

---

## 8. TypeScript設定

### 8.1 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",              // ES2017にコンパイル
    "lib": ["dom", "dom.iterable", "esnext"],  // 使用可能なライブラリ
    "allowJs": true,                 // JSファイルも許可
    "skipLibCheck": true,            // 型定義ファイルのチェックスキップ
    "strict": true,                  // 厳格な型チェック
    "noEmit": true,                  // 出力なし（Next.jsがビルド）
    "esModuleInterop": true,         // CommonJSとの相互運用
    "module": "esnext",              // ESモジュール
    "moduleResolution": "bundler",   // バンドラー解決
    "resolveJsonModule": true,       // JSONインポート許可
    "isolatedModules": true,         // 単一ファイルトランスパイル
    "jsx": "preserve",               // JSX保持（Next.jsが処理）
    "incremental": true,             // インクリメンタルコンパイル
    "plugins": [
      { "name": "next" }             // Next.jsプラグイン
    ],
    "paths": {
      "@/*": ["./*"]                 // パスエイリアス
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 8.2 型定義

#### app/types/index.ts

現在は基本的な型のみ定義されています（詳細は不明）。

**推奨される型定義**:

```typescript
// 実績者の声
export interface Testimonial {
  title: string;
  category: string;
  amount: string;
  image: string;
  description: string;
}

// 講座内容
export interface Feature {
  step: string;
  title: string;
  content: string;
  image: string;
}

// タイムライン
export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// メイソリー
export interface MasonryItem {
  id: string | number;
  height: number;
  image: string;
}
```

### 8.3 パスエイリアス

```typescript
import { cn } from "@/lib/utils";
import { Hero } from "@/app/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
```

`@/` = プロジェクトルート

### 8.4 型安全性の実践

#### Props型定義

```typescript
interface HeroProps {
  className?: string;
  children: React.ReactNode;
}

export default function Hero({ className, children }: HeroProps) {
  // ...
}
```

#### イベントハンドラ

```typescript
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // ...
};
```

#### 状態管理

```typescript
const [isVisible, setIsVisible] = useState<boolean>(false);
const [currentFeature, setCurrentFeature] = useState<number>(0);
```

---

## 9. ビルド・最適化

### 9.1 Next.js設定 (next.config.ts)

現在は最小限の設定:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### 9.2 ビルドプロセス

```bash
npm run build
```

**実行内容**:
1. TypeScriptコンパイル
2. ESLintチェック
3. Tailwind CSSのパージ（未使用スタイルの削除）
4. 静的ページ生成
5. コード分割
6. 最適化

**ビルド結果**:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    123 kB          228 kB
└ ○ /_not-found                          982 B           106 kB
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-7e97afd31c46d897.js  53 kB
  ├ chunks/517-0d38609b3deab35c.js       50.3 kB
  └ other shared chunks (total)          1.86 kB
```

### 9.3 最適化機能

#### 自動コード分割

Next.jsが各ルートごとに自動的にコード分割:
- ページごとのバンドル
- 動的インポート対応
- 共有チャンクの抽出

#### 画像最適化

next/imageによる自動最適化:
- WebP/AVIF変換
- レスポンシブ画像
- 遅延読み込み
- プレースホルダー

```tsx
<Image
  src="/images/hero.svg"
  alt="Hero"
  width={200}
  height={200}
  priority  // LCP対策
/>
```

#### フォント最適化

Google Fontsの自動最適化:
```typescript
import { Playfair_Display, Noto_Serif_JP } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",  // FOUT回避
});
```

- セルフホスティング
- フォントファイルの最適化
- フォント読み込み戦略

#### CSS最適化

- Tailwind CSSのパージ
- 未使用スタイルの自動削除
- CSS最小化
- Critical CSS抽出

### 9.4 パフォーマンス指標

**現在のビルド結果**:
- トップページ: 123 kB (圧縮前)
- First Load JS: 228 kB

**Lighthouse目標** (要件定義書より):
- Performance: 90点以上
- FCP: 1.5秒以内
- LCP: 2.5秒以内
- CLS: 0.1以下
- TTI: 3秒以内

### 9.5 最適化の推奨事項

#### 実装済み
- ✅ 静的生成 (Static Generation)
- ✅ 画像最適化 (next/image)
- ✅ フォント最適化 (next/font)
- ✅ コード分割

#### 未実装・改善余地
- ⚠️ 動的インポート（大きなライブラリの遅延読み込み）
- ⚠️ ISR (Incremental Static Regeneration)
- ⚠️ CDN配信
- ⚠️ サービスワーカー
- ⚠️ プリフェッチ最適化

---

## 10. 依存関係詳細

### 10.1 dependencies (本番環境)

| パッケージ | バージョン | サイズ | 用途 | 必須度 |
|-----------|----------|-------|------|--------|
| **next** | 15.1.4 | 大 | フレームワーク | ★★★ |
| **react** | 19.0.0 | 大 | UIライブラリ | ★★★ |
| **react-dom** | 19.0.0 | 大 | DOMレンダリング | ★★★ |
| **framer-motion** | 12.23.24 | 大 | アニメーション | ★★★ |
| **@tsparticles/react** | 3.0.0 | 中 | パーティクル | ★★☆ |
| **@tsparticles/engine** | 3.9.1 | 中 | パーティクルエンジン | ★★☆ |
| **@tsparticles/slim** | 3.9.1 | 中 | 軽量エンジン | ★★☆ |
| **@react-spring/web** | 10.0.3 | 中 | スプリングアニメ | ★☆☆ |
| **react-intersection-observer** | 9.16.0 | 小 | スクロール検知 | ★★☆ |
| **lucide-react** | 0.548.0 | 中 | アイコン | ★☆☆ |
| **clsx** | 2.1.1 | 極小 | クラス名結合 | ★★★ |
| **tailwind-merge** | 3.3.1 | 小 | Tailwindマージ | ★★★ |
| **class-variance-authority** | 0.7.1 | 小 | バリアント管理 | ★☆☆ |

**総依存関係**: 13個

### 10.2 devDependencies (開発環境のみ)

| パッケージ | バージョン | 用途 |
|-----------|----------|------|
| **@types/node** | 20 | Node.js型定義 |
| **@types/react** | 19 | React型定義 |
| **@types/react-dom** | 19 | React DOM型定義 |
| **typescript** | 5 | TypeScript本体 |
| **tailwindcss** | 3.4.1 | CSSフレームワーク |
| **autoprefixer** | 10.4.20 | CSSベンダープレフィックス |
| **postcss** | 8 | CSS変換 |
| **eslint** | 8 | コード品質 |
| **eslint-config-next** | 15.1.4 | Next.js用ESLint |

**総devDependencies**: 9個

### 10.3 依存関係の最適化

#### バンドルサイズ削減策

**現在**:
- @tsparticles/slim使用（フル版より軽量）
- lucide-react（tree-shakable）

**改善案**:
- 動的インポート導入
  ```tsx
  const Sparkles = dynamic(() => import('@/components/ui/sparkles'));
  ```
- 未使用ライブラリの削除
  - @react-spring/web（Masonryのみ使用、代替可能）
  - class-variance-authority（現在未使用）

#### セキュリティ更新

```bash
npm audit
npm audit fix
```

定期的な依存関係の更新が推奨されます。

---

## 11. パフォーマンス戦略

### 11.1 レンダリング最適化

#### Server Components優先

```tsx
// Server Component (デフォルト)
export default function Header() {
  return <header>...</header>;
}
```

**メリット**:
- JavaScriptバンドルサイズ削減
- サーバーサイドレンダリング
- SEO向上

#### Client Components最小化

```tsx
// Client Component (必要な場合のみ)
"use client";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  // ...
}
```

**使用基準**:
- ブラウザAPIが必要（window, document）
- 状態管理が必要
- インタラクティブな機能

### 11.2 画像最適化

#### next/image使用

```tsx
<Image
  src="/images/hero.svg"
  alt="Hero"
  width={200}
  height={200}
  priority  // ファーストビュー画像
/>
```

**最適化内容**:
- 自動フォーマット変換（WebP, AVIF）
- レスポンシブ画像
- 遅延読み込み
- サイズ最適化

#### SVG画像の活用

現在14個のSVG画像を使用:
- スケーラブル（高解像度対応）
- 軽量
- アニメーション可能

### 11.3 コード最適化

#### メモ化

```tsx
const gridItems = useMemo(() => {
  // 重い計算
}, [dependencies]);
```

使用箇所:
- Masonry: グリッドアイテム計算

#### 効率的なレンダリング

```tsx
// 良い例
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}

// 悪い例
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}
```

### 11.4 ネットワーク最適化

#### 静的生成

```bash
npm run build
# すべてのページを静的HTML生成
```

#### CDN配信（推奨）

Vercelデプロイ時:
- 自動的にエッジネットワークで配信
- 世界中のCDNノード
- 高速なコンテンツ配信

### 11.5 ランタイムパフォーマンス

#### GPU高速化

アニメーションはtransform/opacityのみ使用:
```css
transform: translateY(0);
opacity: 1;
transition: all 0.3s ease;
```

#### リフロー/リペイント削減

- レイアウトプロパティの変更を避ける
- CSSアニメーション優先
- JavaScriptアニメーションの最小化

---

## 12. 開発ワークフロー

### 12.1 開発コマンド

```bash
# 開発サーバー起動
npm run dev
# http://localhost:3000

# 本番ビルド
npm run build

# 本番モード起動
npm run start

# ESLintチェック
npm run lint
```

### 12.2 開発環境

#### 推奨エディタ

**VS Code** + 拡張機能:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

#### ホットリロード

Next.jsの高速リフレッシュ:
- ファイル保存で自動リロード
- 状態保持
- エラー表示

### 12.3 コーディング規約

#### コンポーネント命名

- PascalCase
- 1ファイル1コンポーネント
- ファイル名=コンポーネント名

```tsx
// Hero.tsx
export default function Hero() { ... }
```

#### ディレクトリ構成

```
app/components/    → ページ固有コンポーネント
components/ui/     → 再利用可能UIコンポーネント
lib/               → ユーティリティ関数
```

#### インポート順序

```tsx
// 1. 外部ライブラリ
import React from 'react';
import { motion } from 'framer-motion';

// 2. 内部コンポーネント
import { AuroraBackground } from '@/components/ui/aurora-background';

// 3. ユーティリティ
import { cn } from '@/lib/utils';

// 4. 型定義
import type { HeroProps } from '@/app/types';
```

### 12.4 Git管理

#### ブランチ戦略

現在は`main`ブランチのみ:
```bash
git status
# On branch main
```

**推奨戦略**:
- `main`: 本番環境
- `develop`: 開発環境
- `feature/*`: 機能開発
- `bugfix/*`: バグ修正

#### コミットメッセージ

現在のコミット例:
```
ヒーローセクションの3つの特徴ボックスを均等に整列
ヒーローセクションのレスポンシブ調整
TypeScriptビルドエラーを修正
モバイル版の改善とインタラクティブ機能の追加
```

**推奨フォーマット**:
```
feat: 新機能追加
fix: バグ修正
style: スタイル変更
refactor: リファクタリング
docs: ドキュメント変更
```

---

## 13. セキュリティ・品質

### 13.1 セキュリティ対策

#### 実装済み
- ✅ TypeScriptによる型安全性
- ✅ ESLintによるコード品質チェック
- ✅ Next.jsのセキュリティ機能（XSS対策等）

#### 未実装・推奨
- ⚠️ CSP (Content Security Policy)
- ⚠️ HTTPS強制
- ⚠️ 環境変数の適切な管理
- ⚠️ 定期的な依存関係の脆弱性チェック

### 13.2 アクセシビリティ

#### 実装済み
- ✅ セマンティックHTML
- ✅ alt属性（画像）
- ✅ aria-label（一部）

#### 改善余地
- ⚠️ キーボードナビゲーション
- ⚠️ フォーカス管理
- ⚠️ スクリーンリーダー対応
- ⚠️ カラーコントラスト比の検証

### 13.3 ESLint警告

**現在の警告**:
```
./app/components/CourseContent.tsx
89:6  Warning: React Hook useEffect has a missing dependency: 'features'.

./components/ui/masonry.tsx
105:41  Warning: The ref value 'containerRef.current' will likely have changed...

./components/ui/modern-timeline.tsx
133:27  Warning: Using `<img>` could result in slower LCP and higher bandwidth.
```

**対応**:
- useEffect依存配列の修正
- ref処理の改善
- `<img>`を`<Image />`に変更

---

## 14. デプロイ

### 14.1 推奨デプロイ先

#### 1. Vercel（最推奨）

**メリット**:
- Next.js開発元
- 自動デプロイ
- プレビュー環境
- 無料プランあり
- エッジネットワーク
- 画像最適化

**デプロイ手順**:
```bash
# Vercel CLIインストール
npm i -g vercel

# デプロイ
vercel

# 本番デプロイ
vercel --prod
```

#### 2. Netlify

**メリット**:
- Next.js対応
- 無料プランあり
- 自動デプロイ

#### 3. その他

- AWS Amplify
- Cloudflare Pages
- 自社サーバー（Static Export）

### 14.2 環境変数

現在は環境変数を使用していませんが、将来的に必要になる可能性:

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 14.3 ビルド前チェックリスト

- [ ] `npm run build` 成功
- [ ] `npm run lint` 警告なし
- [ ] 画像の最適化
- [ ] メタデータの設定確認
- [ ] リンク先の確認
- [ ] レスポンシブ動作確認
- [ ] ブラウザ互換性確認

---

## 15. 今後の技術的改善提案

### 15.1 パフォーマンス

- [ ] 動的インポート導入（Sparkles、Masonryなど）
- [ ] バンドルサイズ分析（`@next/bundle-analyzer`）
- [ ] 画像の最適化（WebPへの完全移行）
- [ ] Service Worker導入（オフライン対応）

### 15.2 開発体験

- [ ] Prettier導入（コードフォーマット自動化）
- [ ] Husky + lint-staged（pre-commitフック）
- [ ] Storybook導入（コンポーネントカタログ）
- [ ] テスト追加（Jest + React Testing Library）

### 15.3 機能

- [ ] ダークモード完全対応
- [ ] アニメーション無効化オプション（アクセシビリティ）
- [ ] 国際化対応（i18n）
- [ ] CMS連携（Contentful, Strapi等）
- [ ] フォーム機能（無料相談申し込み）
- [ ] Google Analytics統合

### 15.4 コード品質

- [ ] ESLint警告の解消
- [ ] 型定義の強化
- [ ] コンポーネントのリファクタリング（重複削除）
- [ ] ユニットテスト追加

---

## まとめ

本プロジェクトは、**Next.js 15 + React 19 + TypeScript + Tailwind CSS**をベースとした
モダンな技術スタックで構築されています。

### 技術的強み

✅ **最新技術の採用**
- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 3

✅ **高品質なUI/UX**
- 9個のカスタムUIコンポーネント（1,439行）
- Framer Motionによる滑らかなアニメーション
- レスポンシブ対応

✅ **パフォーマンス最適化**
- Server Components優先
- 画像最適化（next/image）
- 静的生成（Static Generation）
- コード分割

✅ **開発体験**
- TypeScriptによる型安全性
- ESLintによるコード品質
- ホットリロード

### 現在の課題

⚠️ **ESLint警告**: 3件の警告あり（対応推奨）
⚠️ **未使用コンポーネント**: 3個のUIコンポーネントが未使用
⚠️ **テスト未実装**: ユニットテスト、E2Eテストなし
⚠️ **アクセシビリティ**: 改善余地あり

### 今後の方向性

本LPは営業支援資料としての役割を果たすために、**信頼性・視覚的インパクト・パフォーマンス**
のバランスを重視して設計されています。

今後は、上記の改善提案を実施することで、さらに高品質なWebアプリケーションへと
進化させることができます。

---

**作成者**: Claude Code
**最終更新**: 2025-11-05
**ドキュメントバージョン**: 1.0

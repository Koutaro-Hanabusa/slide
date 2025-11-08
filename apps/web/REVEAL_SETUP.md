# Reveal.js React Implementation

Reveal.js を React + Next.js + TypeScript で実装したスライドプレゼンテーションアプリケーション。

## インストールしたパッケージ

```bash
bun add reveal.js @types/reveal.js
```

- **reveal.js**: v5.2.1 - プレゼンテーションフレームワーク
- **@types/reveal.js**: v5.2.1 - TypeScript型定義

## ファイル構成

```
apps/web/src/
├── components/
│   ├── reveal-slide.tsx        # メインのReveal.jsラッパーコンポーネント
│   └── slide-section.tsx       # スライドセクション用のヘルパーコンポーネント
├── app/
│   ├── page.tsx                # ホームページ（スライドへのリンク）
│   └── slide/
│       ├── layout.tsx          # スライドページ専用レイアウト
│       ├── page.tsx            # 基本的なスライド例
│       └── advanced/
│           └── page.tsx        # 高度なスライド例
```

## 主要コンポーネント

### RevealSlide コンポーネント

Reveal.js インスタンスを管理するメインコンポーネント。

**特徴:**
- useRef を使用したインスタンス管理
- React Strict Mode での二重初期化防止
- コンポーネントアンマウント時の自動クリーンアップ
- カスタマイズ可能な設定オプション

**使用例:**
```tsx
import { RevealSlide } from "@/components/reveal-slide";

export default function SlidePage() {
  return (
    <RevealSlide>
      <section>
        <h1>スライドタイトル</h1>
      </section>
    </RevealSlide>
  );
}
```

### SlideSection コンポーネント

スライドセクションを型安全に作成するためのヘルパーコンポーネント。

**プロパティ:**
- `background`: 背景色（例: "#4d7e65"）
- `backgroundImage`: 背景画像URL
- `backgroundOpacity`: 背景の透明度（0-1）
- `transition`: トランジション効果
- `className`: 追加のCSSクラス

**使用例:**
```tsx
import { SlideSection } from "@/components/slide-section";

<SlideSection
  background="#1a1a1a"
  transition="zoom"
>
  <h2>カスタマイズされたスライド</h2>
</SlideSection>
```

## 実装のポイント

### 1. React Strict Mode 対応

```tsx
const deckRef = useRef<Reveal.Api | null>(null);

useEffect(() => {
  // 二重初期化を防止
  if (deckRef.current) return;

  const deck = new Reveal(deckDivRef.current!, config);
  deck.initialize().then(() => {
    deckRef.current = deck;
  });

  return () => {
    deck.destroy();
    deckRef.current = null;
  };
}, []);
```

### 2. CSS のインポート

```tsx
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
```

### 3. フルスクリーンレイアウト

```tsx
// app/slide/layout.tsx
<div className="relative h-screen w-screen overflow-hidden">
  {children}
</div>
```

## スライド機能

### 基本機能
- キーボードナビゲーション（矢印キー、Space）
- プログレスバー
- スライド番号表示
- オーバービューモード（ESCキー）
- フルスクリーンモード（Fキー）

### トランジション効果
- none
- fade
- slide
- convex
- concave
- zoom

### フラグメント（段階的表示）
```tsx
<p className="fragment">段階的に表示される</p>
<p className="fragment fade-up">下からフェードイン</p>
<p className="fragment fade-left">左からフェードイン</p>
```

### 縦方向のスライド
```tsx
<section>
  <section>親スライド</section>
  <section>子スライド1</section>
  <section>子スライド2</section>
</section>
```

### 背景のカスタマイズ
```tsx
<section data-background="#4d7e65">
  背景色付きスライド
</section>

<section
  data-background="url.jpg"
  data-background-opacity="0.3"
>
  背景画像付きスライド
</section>
```

## カスタマイズ設定

RevealSlide コンポーネントの初期化設定を変更することで、さまざまなカスタマイズが可能です。

```tsx
const deck = new Reveal(deckDivRef.current!, {
  // 基本設定
  transition: "slide",
  backgroundTransition: "fade",
  center: true,
  controls: true,
  progress: true,
  slideNumber: true,

  // サイズ設定
  width: 960,
  height: 700,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2.0,

  // ナビゲーション
  keyboard: true,
  overview: true,
  touch: true,
  loop: false,

  // その他
  hash: true,
  fragments: true,
  mouseWheel: false,
  autoSlide: 0,
});
```

## 開発とビルド

### 開発サーバー起動
```bash
bun dev
```

### アクセス
- ホーム: http://localhost:3001
- 基本スライド: http://localhost:3001/slide
- 高度なスライド: http://localhost:3001/slide/advanced

### 型チェック
```bash
bunx tsc --noEmit
```

### プロダクションビルド
```bash
bun build
```

## 注意点

1. **CSS のインポート順序**
   - reveal.css を先にインポート
   - テーマCSS を後にインポート

2. **Next.js App Router**
   - "use client" ディレクティブが必要
   - useEffect でクライアントサイドでのみ初期化

3. **メモリリーク防止**
   - コンポーネントアンマウント時に必ず destroy() を呼び出す
   - ref の適切な管理

4. **TypeScript**
   - Reveal.Api 型を使用してインスタンスを型付け
   - data-* 属性は Record<string, string | number> で管理

## パフォーマンス最適化

- コード分割: 各スライドページは個別にロード
- 遅延ロード: 画像やメディアは必要時にロード
- CSS最適化: Tailwind CSSのPurge機能を活用
- バンドルサイズ: Reveal.js本体 + テーマで約200KB

## トラブルシューティング

### スライドが二重に初期化される
→ deckRef.current のチェックを確認

### スタイルが適用されない
→ CSS のインポート順序を確認

### ナビゲーションが効かない
→ keyboard, touch 設定を確認

### フラグメントが動作しない
→ fragments: true 設定を確認

## 参考リンク

- [Reveal.js 公式ドキュメント](https://revealjs.com/)
- [Reveal.js React Integration](https://revealjs.com/react/)
- [Next.js ドキュメント](https://nextjs.org/docs)

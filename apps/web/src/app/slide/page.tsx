"use client";

import { RevealSlide } from "@/components/reveal-slide";

export default function SlidePage() {
	return (
		<RevealSlide>
			{/* Slide 1: タイトル */}
			<section>
				<h1>Reveal.js with React</h1>
				<h3>Modern Presentation Framework</h3>
				<p>
					<small>Press Space or Arrow keys to navigate</small>
				</p>
			</section>

			{/* Slide 2: 主な機能 */}
			<section>
				<h2>主な機能</h2>
				<ul>
					<li>レスポンシブデザイン</li>
					<li>タッチサポート</li>
					<li>スライド遷移アニメーション</li>
					<li>キーボードナビゲーション</li>
					<li>プログレスバー</li>
				</ul>
			</section>

			{/* Slide 3: 縦方向のスライド */}
			<section>
				<section>
					<h2>縦方向のスライド</h2>
					<p>下矢印キーで次のスライドへ ↓</p>
				</section>
				<section>
					<h2>ネストされたスライド 1</h2>
					<p>これは縦方向のスライドの例です</p>
				</section>
				<section>
					<h2>ネストされたスライド 2</h2>
					<p>右矢印キーで次のセクションへ →</p>
				</section>
			</section>

			{/* Slide 4: コードハイライト */}
			<section>
				<h2>Code Example</h2>
				<pre>
					<code data-trim data-noescape>
						{`function example() {
  const message = "Hello, Reveal.js!";
  console.log(message);
  return message;
}`}
					</code>
				</pre>
			</section>

			{/* Slide 5: フラグメント */}
			<section>
				<h2>フラグメント（段階的表示）</h2>
				<p className="fragment">最初に表示される</p>
				<p className="fragment">次に表示される</p>
				<p className="fragment">最後に表示される</p>
			</section>

			{/* Slide 6: 背景色の変更 */}
			<section data-background="#4d7e65">
				<h2>背景色のカスタマイズ</h2>
				<p>data-background 属性で背景色を変更できます</p>
			</section>

			{/* Slide 7: 画像背景 */}
			<section
				data-background="https://picsum.photos/1920/1080"
				data-background-opacity="0.3"
			>
				<h2>画像背景</h2>
				<p>背景に画像を設定できます</p>
			</section>

			{/* Slide 8: トランジション効果 */}
			<section data-transition="zoom">
				<h2>カスタムトランジション</h2>
				<p>このスライドはズームトランジションを使用しています</p>
			</section>

			{/* Slide 9: まとめ */}
			<section>
				<h2>まとめ</h2>
				<p>Reveal.js + React で美しいプレゼンテーションを作成できます</p>
				<ul>
					<li>豊富なカスタマイズオプション</li>
					<li>Reactコンポーネントとの統合</li>
					<li>モダンなWeb技術</li>
				</ul>
			</section>

			{/* Slide 10: ありがとうございました */}
			<section>
				<h1>ありがとうございました！</h1>
				<p>
					<a href="https://revealjs.com/">Reveal.js Documentation</a>
				</p>
			</section>
		</RevealSlide>
	);
}

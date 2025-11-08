"use client";

import { RevealSlide } from "@/components/reveal-slide";
import { SlideSection } from "@/components/slide-section";

export default function AdvancedSlidePage() {
	return (
		<RevealSlide>
			{/* Slide 1: タイトル */}
			<SlideSection background="#1a1a1a">
				<h1 className="text-6xl font-bold mb-4">Advanced Reveal.js</h1>
				<h3 className="text-2xl text-gray-300">
					React Components Integration
				</h3>
				<p className="mt-8 text-sm text-gray-400">
					Press Space or Arrow keys to navigate
				</p>
			</SlideSection>

			{/* Slide 2: React コンポーネントの統合 */}
			<SlideSection>
				<h2 className="text-4xl font-bold mb-6">React Integration</h2>
				<div className="grid grid-cols-2 gap-8 mt-8">
					<div className="p-6 bg-blue-500/10 rounded-lg border border-blue-500/20">
						<h3 className="text-xl font-semibold mb-3">Component Based</h3>
						<p className="text-sm text-gray-300">
							Reactコンポーネントとして再利用可能
						</p>
					</div>
					<div className="p-6 bg-green-500/10 rounded-lg border border-green-500/20">
						<h3 className="text-xl font-semibold mb-3">TypeScript Support</h3>
						<p className="text-sm text-gray-300">
							型安全性を保証
						</p>
					</div>
				</div>
			</SlideSection>

			{/* Slide 3: アニメーション効果 */}
			<SlideSection transition="zoom">
				<h2 className="text-4xl font-bold mb-6">Transition Effects</h2>
				<div className="space-y-4">
					<p className="fragment fade-in">Fade In</p>
					<p className="fragment fade-up">Fade Up</p>
					<p className="fragment fade-down">Fade Down</p>
					<p className="fragment fade-left">Fade Left</p>
					<p className="fragment fade-right">Fade Right</p>
				</div>
			</SlideSection>

			{/* Slide 4: データビジュアライゼーション例 */}
			<SlideSection background="#2d3748">
				<h2 className="text-4xl font-bold mb-8">Data Visualization</h2>
				<div className="flex justify-around items-end h-64 p-8">
					<div className="fragment">
						<div className="w-20 bg-blue-500 rounded-t" style={{ height: "120px" }}></div>
						<p className="mt-2 text-sm">Q1</p>
					</div>
					<div className="fragment">
						<div className="w-20 bg-green-500 rounded-t" style={{ height: "180px" }}></div>
						<p className="mt-2 text-sm">Q2</p>
					</div>
					<div className="fragment">
						<div className="w-20 bg-yellow-500 rounded-t" style={{ height: "150px" }}></div>
						<p className="mt-2 text-sm">Q3</p>
					</div>
					<div className="fragment">
						<div className="w-20 bg-red-500 rounded-t" style={{ height: "200px" }}></div>
						<p className="mt-2 text-sm">Q4</p>
					</div>
				</div>
			</SlideSection>

			{/* Slide 5: レスポンシブデザイン */}
			<SlideSection>
				<h2 className="text-4xl font-bold mb-6">Responsive Design</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
					<div className="fragment p-6 bg-purple-500/10 rounded-lg border border-purple-500/20">
						<div className="text-4xl mb-3">📱</div>
						<h3 className="text-xl font-semibold">Mobile</h3>
						<p className="text-sm text-gray-300 mt-2">
							スマートフォン対応
						</p>
					</div>
					<div className="fragment p-6 bg-pink-500/10 rounded-lg border border-pink-500/20">
						<div className="text-4xl mb-3">💻</div>
						<h3 className="text-xl font-semibold">Tablet</h3>
						<p className="text-sm text-gray-300 mt-2">
							タブレット対応
						</p>
					</div>
					<div className="fragment p-6 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
						<div className="text-4xl mb-3">🖥️</div>
						<h3 className="text-xl font-semibold">Desktop</h3>
						<p className="text-sm text-gray-300 mt-2">
							デスクトップ対応
						</p>
					</div>
				</div>
			</SlideSection>

			{/* Slide 6: カスタムスタイリング */}
			<SlideSection
				backgroundImage="https://picsum.photos/1920/1080?blur=10"
				backgroundOpacity={0.2}
			>
				<div className="bg-black/60 p-12 rounded-2xl backdrop-blur-sm">
					<h2 className="text-4xl font-bold mb-6">Custom Styling</h2>
					<p className="text-xl text-gray-200">
						Tailwind CSSと組み合わせて自由にスタイリング
					</p>
					<ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
						<li className="fragment">✓ ユーティリティファーストCSS</li>
						<li className="fragment">✓ レスポンシブデザイン</li>
						<li className="fragment">✓ ダークモード対応</li>
						<li className="fragment">✓ カスタムアニメーション</li>
					</ul>
				</div>
			</SlideSection>

			{/* Slide 7: Next.js統合のメリット */}
			<SlideSection background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
				<h2 className="text-4xl font-bold mb-8">Next.js Integration</h2>
				<div className="grid grid-cols-2 gap-6">
					<div className="fragment text-left p-6 bg-white/10 rounded-lg backdrop-blur-sm">
						<h3 className="text-2xl font-bold mb-3">🚀 Performance</h3>
						<p className="text-sm">最適化されたビルド</p>
					</div>
					<div className="fragment text-left p-6 bg-white/10 rounded-lg backdrop-blur-sm">
						<h3 className="text-2xl font-bold mb-3">📦 Bundle</h3>
						<p className="text-sm">自動コード分割</p>
					</div>
					<div className="fragment text-left p-6 bg-white/10 rounded-lg backdrop-blur-sm">
						<h3 className="text-2xl font-bold mb-3">🔧 TypeScript</h3>
						<p className="text-sm">完全な型サポート</p>
					</div>
					<div className="fragment text-left p-6 bg-white/10 rounded-lg backdrop-blur-sm">
						<h3 className="text-2xl font-bold mb-3">⚡ Hot Reload</h3>
						<p className="text-sm">高速な開発体験</p>
					</div>
				</div>
			</SlideSection>

			{/* Slide 8: まとめ */}
			<SlideSection transition="concave">
				<h1 className="text-5xl font-bold mb-6">まとめ</h1>
				<div className="max-w-3xl mx-auto text-left space-y-4">
					<p className="fragment text-xl">
						✓ Reveal.js + React で強力なプレゼンテーション
					</p>
					<p className="fragment text-xl">
						✓ TypeScriptによる型安全性
					</p>
					<p className="fragment text-xl">
						✓ Next.jsの最適化とパフォーマンス
					</p>
					<p className="fragment text-xl">
						✓ Tailwind CSSで柔軟なデザイン
					</p>
				</div>
			</SlideSection>

			{/* Slide 9: ありがとうございました */}
			<SlideSection background="#0f172a">
				<h1 className="text-6xl font-bold mb-8">Thank You!</h1>
				<div className="space-y-4 text-gray-300">
					<p className="text-xl">質問はありますか？</p>
					<div className="flex gap-6 justify-center mt-8">
						<a
							href="https://revealjs.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
						>
							Reveal.js Docs
						</a>
						<a
							href="/"
							className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
						>
							ホームに戻る
						</a>
					</div>
				</div>
			</SlideSection>
		</RevealSlide>
	);
}

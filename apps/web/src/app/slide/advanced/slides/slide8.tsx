import { SlideSection } from "@/components/slide-section";

export function Slide8() {
	return (
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
	);
}

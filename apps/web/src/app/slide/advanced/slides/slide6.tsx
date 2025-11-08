import { SlideSection } from "@/components/slide-section";

export function Slide6() {
	return (
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
	);
}

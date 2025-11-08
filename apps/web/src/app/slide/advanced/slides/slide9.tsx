import { SlideSection } from "@/components/slide-section";

export function Slide9() {
	return (
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
	);
}

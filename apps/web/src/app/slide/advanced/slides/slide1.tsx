import { SlideSection } from "@/components/slide-section";

export function Slide1() {
	return (
		<SlideSection background="#1a1a1a">
			<h1 className="text-6xl font-bold mb-4">Advanced Reveal.js</h1>
			<h3 className="text-2xl text-gray-300">
				React Components Integration
			</h3>
			<p className="mt-8 text-sm text-gray-400">
				Press Space or Arrow keys to navigate
			</p>
		</SlideSection>
	);
}

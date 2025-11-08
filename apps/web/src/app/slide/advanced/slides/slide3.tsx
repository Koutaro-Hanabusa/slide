import { SlideSection } from "@/components/slide-section";

export function Slide3() {
	return (
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
	);
}

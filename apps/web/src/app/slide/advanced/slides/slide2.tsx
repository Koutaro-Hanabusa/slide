import { SlideSection } from "@/components/slide-section";

export function Slide2() {
	return (
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
	);
}

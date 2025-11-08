import { SlideSection } from "@/components/slide-section";

export function Slide5() {
	return (
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
	);
}

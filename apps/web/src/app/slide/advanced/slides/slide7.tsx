import { SlideSection } from "@/components/slide-section";

export function Slide7() {
	return (
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
	);
}

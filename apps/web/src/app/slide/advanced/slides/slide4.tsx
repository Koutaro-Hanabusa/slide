import { SlideSection } from "@/components/slide-section";

export function Slide4() {
	return (
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
	);
}

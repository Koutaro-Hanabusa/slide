"use client";

import { RevealSlide } from "@/components/reveal-slide";
import { SlideSection } from "@/components/slide-section";

/**
 * React Reveal.js Example Slide
 *
 * This component demonstrates all key features of Reveal.js integrated with React:
 * - Basic slides and nested slides (vertical navigation)
 * - Fragment animations (step-by-step content reveal)
 * - Custom backgrounds (colors, gradients, images)
 * - Transition effects
 * - Code highlighting
 * - React component integration
 * - TypeScript support
 */
export default function ReactExampleSlidePage() {
	return (
		<RevealSlide>
			{/* ===== SLIDE 1: Title Slide ===== */}
			<SlideSection background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
				<h1 className="text-6xl font-bold mb-6">Reveal.js React Example</h1>
				<h2 className="text-3xl text-gray-200 mb-8">
					Complete Feature Demonstration
				</h2>
				<p className="text-lg text-gray-300">
					Press <kbd className="px-2 py-1 bg-white/20 rounded">Space</kbd> or{" "}
					<kbd className="px-2 py-1 bg-white/20 rounded">Arrow keys</kbd> to
					navigate
				</p>
			</SlideSection>

			{/* ===== SLIDE 2: Fragments (Step-by-step Reveal) ===== */}
			<SlideSection>
				<h2 className="text-4xl font-bold mb-8">Fragment Animations</h2>
				<p className="text-xl mb-6">
					Content can appear step-by-step when you press Space
				</p>
				<div className="space-y-4 text-left max-w-2xl mx-auto">
					<div className="fragment fade-in p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
						<strong>Fade In:</strong> This appears first with fade effect
					</div>
					<div className="fragment fade-up p-4 bg-green-500/10 rounded-lg border border-green-500/30">
						<strong>Fade Up:</strong> This slides up from bottom
					</div>
					<div className="fragment fade-down p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
						<strong>Fade Down:</strong> This slides down from top
					</div>
					<div className="fragment highlight-red p-4 bg-red-500/10 rounded-lg border border-red-500/30">
						<strong>Highlight:</strong> This gets highlighted in red
					</div>
				</div>
			</SlideSection>

			{/* ===== SLIDE 3: Vertical Slides (Nested) ===== */}
			<section>
				{/* Main slide */}
				<section>
					<h2 className="text-4xl font-bold mb-6">Vertical Slides</h2>
					<p className="text-xl mb-8">
						Slides can be nested vertically for sub-topics
					</p>
					<div className="mt-8">
						<p className="text-2xl">
							Press <span className="text-blue-400">Down Arrow ↓</span> to go
							deeper
						</p>
						<p className="text-lg text-gray-400 mt-4">
							(or Right Arrow → to skip to next section)
						</p>
					</div>
				</section>

				{/* Nested slide 1 */}
				<section data-background="#1e3a5f">
					<h3 className="text-3xl font-bold mb-4">Nested Slide 1</h3>
					<p className="text-lg">
						This is a vertically nested slide - great for details!
					</p>
					<p className="mt-6 text-gray-300">Continue pressing Down ↓</p>
				</section>

				{/* Nested slide 2 */}
				<section data-background="#2d5a3f">
					<h3 className="text-3xl font-bold mb-4">Nested Slide 2</h3>
					<p className="text-lg">Even more details can go here</p>
					<p className="mt-6 text-gray-300">
						Press Up ↑ to go back, or Right → for next section
					</p>
				</section>
			</section>

			{/* ===== SLIDE 4: Code Highlighting ===== */}
			<SlideSection>
				<h2 className="text-4xl font-bold mb-6">Code Highlighting</h2>
				<div className="text-left max-w-3xl mx-auto">
					<pre className="fragment">
						<code className="language-typescript" data-trim data-noescape>
							{`// React Component with TypeScript
import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
						</code>
					</pre>
				</div>
			</SlideSection>

			{/* ===== SLIDE 5: Background Colors ===== */}
			<SlideSection background="#ff6b6b">
				<h2 className="text-4xl font-bold mb-6">Custom Background Colors</h2>
				<p className="text-xl mb-4">
					Each slide can have its own background color
				</p>
				<div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
					<code className="text-sm">
						data-background="#ff6b6b"
					</code>
				</div>
			</SlideSection>

			{/* ===== SLIDE 6: Background Gradients ===== */}
			<SlideSection background="linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)">
				<h2 className="text-4xl font-bold mb-6">Gradient Backgrounds</h2>
				<p className="text-xl">CSS gradients are fully supported</p>
				<div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm mt-6">
					<code className="text-sm">
						background="linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)"
					</code>
				</div>
			</SlideSection>

			{/* ===== SLIDE 7: Background Images ===== */}
			<SlideSection
				backgroundImage="https://picsum.photos/1920/1080?random=1"
				backgroundOpacity={0.3}
			>
				<div className="bg-black/60 p-12 rounded-2xl backdrop-blur-md">
					<h2 className="text-4xl font-bold mb-6">Background Images</h2>
					<p className="text-xl">
						Images with adjustable opacity for better readability
					</p>
					<div className="mt-6 text-left max-w-xl mx-auto">
						<code className="text-sm bg-gray-800/80 p-4 rounded block">
							backgroundImage="url" <br />
							backgroundOpacity=&#123;0.3&#125;
						</code>
					</div>
				</div>
			</SlideSection>

			{/* ===== SLIDE 8: Transition Effects ===== */}
			<SlideSection transition="zoom">
				<h2 className="text-4xl font-bold mb-6">Zoom Transition</h2>
				<p className="text-xl mb-8">
					This slide uses a zoom transition effect
				</p>
				<div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
					<div className="fragment p-4 bg-purple-500/20 rounded">
						<p className="font-semibold">slide</p>
					</div>
					<div className="fragment p-4 bg-blue-500/20 rounded">
						<p className="font-semibold">fade</p>
					</div>
					<div className="fragment p-4 bg-green-500/20 rounded">
						<p className="font-semibold">zoom</p>
					</div>
					<div className="fragment p-4 bg-yellow-500/20 rounded">
						<p className="font-semibold">convex</p>
					</div>
					<div className="fragment p-4 bg-orange-500/20 rounded">
						<p className="font-semibold">concave</p>
					</div>
					<div className="fragment p-4 bg-red-500/20 rounded">
						<p className="font-semibold">none</p>
					</div>
				</div>
			</SlideSection>

			{/* ===== SLIDE 9: React Component Integration ===== */}
			<SlideSection transition="convex">
				<h2 className="text-4xl font-bold mb-8">React Component Integration</h2>
				<div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
					<InteractiveCard
						title="TypeScript Support"
						icon="🎯"
						color="blue"
					/>
					<InteractiveCard title="Component Reusability" icon="🔄" color="green" />
					<InteractiveCard title="State Management" icon="📦" color="purple" />
					<InteractiveCard title="Modern React Hooks" icon="🪝" color="pink" />
				</div>
			</SlideSection>

			{/* ===== SLIDE 10: Data Visualization Example ===== */}
			<SlideSection background="#1a1a2e">
				<h2 className="text-4xl font-bold mb-8">Data Visualization</h2>
				<p className="text-lg mb-6 text-gray-300">
					Build interactive charts with React components
				</p>
				<div className="flex justify-around items-end h-64 max-w-3xl mx-auto">
					<BarChart height={120} label="Jan" color="bg-blue-500" />
					<BarChart height={180} label="Feb" color="bg-green-500" />
					<BarChart height={150} label="Mar" color="bg-yellow-500" />
					<BarChart height={220} label="Apr" color="bg-purple-500" />
					<BarChart height={190} label="May" color="bg-pink-500" />
					<BarChart height={240} label="Jun" color="bg-red-500" />
				</div>
			</SlideSection>

			{/* ===== SLIDE 11: Responsive Design ===== */}
			<SlideSection>
				<h2 className="text-4xl font-bold mb-8">Responsive Design</h2>
				<p className="text-xl mb-6">
					Works perfectly on all devices and screen sizes
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
					<DeviceCard device="Mobile" icon="📱" size="< 768px" />
					<DeviceCard device="Tablet" icon="💻" size="768px - 1024px" />
					<DeviceCard device="Desktop" icon="🖥️" size="> 1024px" />
				</div>
			</SlideSection>

			{/* ===== SLIDE 12: Best Practices ===== */}
			<SlideSection background="#0f172a">
				<h2 className="text-4xl font-bold mb-8">Best Practices</h2>
				<div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
					<div className="fragment p-6 bg-blue-500/10 rounded-lg border border-blue-500/30">
						<h3 className="text-xl font-bold mb-3">✓ Use Fragments</h3>
						<p className="text-sm text-gray-300">
							Reveal content progressively for better engagement
						</p>
					</div>
					<div className="fragment p-6 bg-green-500/10 rounded-lg border border-green-500/30">
						<h3 className="text-xl font-bold mb-3">✓ Vertical Slides</h3>
						<p className="text-sm text-gray-300">
							Organize related content in vertical stacks
						</p>
					</div>
					<div className="fragment p-6 bg-purple-500/10 rounded-lg border border-purple-500/30">
						<h3 className="text-xl font-bold mb-3">✓ Visual Hierarchy</h3>
						<p className="text-sm text-gray-300">
							Use backgrounds and colors strategically
						</p>
					</div>
					<div className="fragment p-6 bg-pink-500/10 rounded-lg border border-pink-500/30">
						<h3 className="text-xl font-bold mb-3">✓ React Components</h3>
						<p className="text-sm text-gray-300">
							Build reusable slide components
						</p>
					</div>
				</div>
			</SlideSection>

			{/* ===== SLIDE 13: Key Features Summary ===== */}
			<SlideSection transition="concave">
				<h2 className="text-4xl font-bold mb-8">Key Features Summary</h2>
				<div className="max-w-3xl mx-auto text-left space-y-4">
					<FeatureItem
						emoji="🎨"
						title="Rich Styling"
						description="Custom backgrounds, gradients, and themes"
					/>
					<FeatureItem
						emoji="🎬"
						title="Animations"
						description="Smooth transitions and fragment effects"
					/>
					<FeatureItem
						emoji="⚛️"
						title="React Integration"
						description="Full component composition and hooks support"
					/>
					<FeatureItem
						emoji="📝"
						title="TypeScript"
						description="Complete type safety throughout"
					/>
					<FeatureItem
						emoji="📱"
						title="Responsive"
						description="Works on all devices and screen sizes"
					/>
					<FeatureItem
						emoji="🚀"
						title="Performance"
						description="Optimized with Next.js and modern React"
					/>
				</div>
			</SlideSection>

			{/* ===== SLIDE 14: Thank You ===== */}
			<SlideSection background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
				<h1 className="text-6xl font-bold mb-8">Thank You!</h1>
				<p className="text-2xl mb-8 text-gray-200">
					Ready to build amazing presentations with Reveal.js + React
				</p>
				<div className="flex gap-6 justify-center mt-12">
					<a
						href="https://revealjs.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
					>
						📚 Reveal.js Docs
					</a>
					<a
						href="https://react.dev/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-4 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
					>
						⚛️ React Docs
					</a>
					<a
						href="/"
						className="px-8 py-4 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition-colors"
					>
						🏠 Home
					</a>
				</div>
			</SlideSection>
		</RevealSlide>
	);
}

/**
 * Interactive Card Component
 * Demonstrates React component integration within slides
 */
interface InteractiveCardProps {
	title: string;
	icon: string;
	color: "blue" | "green" | "purple" | "pink";
}

function InteractiveCard({ title, icon, color }: InteractiveCardProps) {
	const colorClasses = {
		blue: "bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20",
		green: "bg-green-500/10 border-green-500/30 hover:bg-green-500/20",
		purple: "bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20",
		pink: "bg-pink-500/10 border-pink-500/30 hover:bg-pink-500/20",
	};

	return (
		<div
			className={`fragment p-6 rounded-lg border transition-all cursor-pointer ${colorClasses[color]}`}
		>
			<div className="text-4xl mb-3">{icon}</div>
			<h3 className="text-lg font-semibold">{title}</h3>
		</div>
	);
}

/**
 * Bar Chart Component
 * Simple data visualization component
 */
interface BarChartProps {
	height: number;
	label: string;
	color: string;
}

function BarChart({ height, label, color }: BarChartProps) {
	return (
		<div className="fragment flex flex-col items-center">
			<div
				className={`w-16 ${color} rounded-t transition-all hover:opacity-80`}
				style={{ height: `${height}px` }}
			/>
			<p className="mt-2 text-sm font-semibold">{label}</p>
		</div>
	);
}

/**
 * Device Card Component
 * Shows responsive design support
 */
interface DeviceCardProps {
	device: string;
	icon: string;
	size: string;
}

function DeviceCard({ device, icon, size }: DeviceCardProps) {
	return (
		<div className="fragment p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-500 transition-all">
			<div className="text-5xl mb-4">{icon}</div>
			<h3 className="text-xl font-bold mb-2">{device}</h3>
			<p className="text-sm text-gray-400">{size}</p>
		</div>
	);
}

/**
 * Feature Item Component
 * Displays feature information
 */
interface FeatureItemProps {
	emoji: string;
	title: string;
	description: string;
}

function FeatureItem({ emoji, title, description }: FeatureItemProps) {
	return (
		<div className="fragment flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all">
			<div className="text-3xl">{emoji}</div>
			<div>
				<h3 className="text-xl font-bold mb-1">{title}</h3>
				<p className="text-gray-400">{description}</p>
			</div>
		</div>
	);
}

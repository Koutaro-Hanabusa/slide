import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reveal.js Slide - Better T-Stack",
	description: "Reveal.js presentation with React and Next.js",
};

export default function SlideLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative h-screen w-screen overflow-hidden">
			{children}
		</div>
	);
}

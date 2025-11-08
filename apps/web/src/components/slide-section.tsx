"use client";

interface SlideSectionProps {
	children: React.ReactNode;
	background?: string;
	backgroundImage?: string;
	backgroundOpacity?: number;
	transition?:
		| "none"
		| "fade"
		| "slide"
		| "convex"
		| "concave"
		| "zoom";
	className?: string;
}

export function SlideSection({
	children,
	background,
	backgroundImage,
	backgroundOpacity,
	transition,
	className = "",
}: SlideSectionProps) {
	const props: Record<string, string | number> = {};

	if (background) {
		props["data-background"] = background;
	}

	if (backgroundImage) {
		props["data-background"] = backgroundImage;
	}

	if (backgroundOpacity !== undefined) {
		props["data-background-opacity"] = backgroundOpacity;
	}

	if (transition) {
		props["data-transition"] = transition;
	}

	return (
		<section {...props} className={className}>
			{children}
		</section>
	);
}

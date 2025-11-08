"use client";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

interface RevealSlideProps {
	children: React.ReactNode;
}

export function RevealSlide({ children }: RevealSlideProps) {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<Reveal.Api | null>(null);

	useEffect(() => {
		// Prevent double initialization in strict mode
		if (deckRef.current) return;

		const deck = new Reveal(deckDivRef.current!, {
			transition: "slide",
			backgroundTransition: "fade",
			hash: true,
			center: true,
			controls: true,
			progress: true,
			slideNumber: true,
			keyboard: true,
			overview: true,
			touch: true,
			loop: false,
			rtl: false,
			navigationMode: "default",
			shuffle: false,
			fragments: true,
			embedded: false,
			help: true,
			showNotes: false,
			autoPlayMedia: null,
			preloadIframes: null,
			autoSlide: 0,
			autoSlideStoppable: true,
			mouseWheel: false,
			hideInactiveCursor: true,
			hideCursorTime: 5000,
			width: 960,
			height: 700,
			margin: 0.04,
			minScale: 0.2,
			maxScale: 2.0,
		});

		deck.initialize().then(() => {
			deckRef.current = deck;
		});

		return () => {
			try {
				deck.destroy();
				deckRef.current = null;
			} catch (e) {
				console.warn("Reveal.js destroy error:", e);
			}
		};
	}, []);

	return (
		<div className="reveal" ref={deckDivRef}>
			<div className="slides">{children}</div>
		</div>
	);
}

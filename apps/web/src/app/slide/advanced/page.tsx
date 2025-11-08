"use client";

import { RevealSlide } from "@/components/reveal-slide";
import {
	Slide1,
	Slide2,
	Slide3,
	Slide4,
	Slide5,
	Slide6,
	Slide7,
	Slide8,
	Slide9,
} from "./slides";

export default function AdvancedSlidePage() {
	return (
		<RevealSlide>
			<Slide1 />
			<Slide2 />
			<Slide3 />
			<Slide4 />
			<Slide5 />
			<Slide6 />
			<Slide7 />
			<Slide8 />
			<Slide9 />
		</RevealSlide>
	);
}

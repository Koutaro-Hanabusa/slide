"use client";

import Link from "next/link";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TITLE_TEXT = `
 ██████╗ ███████╗████████╗████████╗███████╗██████╗
 ██╔══██╗██╔════╝╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗
 ██████╔╝█████╗     ██║      ██║   █████╗  ██████╔╝
 ██╔══██╗██╔══╝     ██║      ██║   ██╔══╝  ██╔══██╗
 ██████╔╝███████╗   ██║      ██║   ███████╗██║  ██║
 ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝

 ████████╗    ███████╗████████╗ █████╗  ██████╗██╗  ██╗
 ╚══██╔══╝    ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
    ██║       ███████╗   ██║   ███████║██║     █████╔╝
    ██║       ╚════██║   ██║   ██╔══██║██║     ██╔═██╗
    ██║       ███████║   ██║   ██║  ██║╚██████╗██║  ██╗
    ╚═╝       ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
 `;

export default function Home() {
	return (
		<div className="container mx-auto max-w-5xl px-4 py-8">
			<pre className="overflow-x-auto font-mono text-sm mb-8">{TITLE_TEXT}</pre>

			<div className="mb-8">
				<h1 className="text-3xl font-bold mb-2">
					Welcome to WebGL Slide Presentation
				</h1>
				<p className="text-muted-foreground">
					Choose a presentation style to get started
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Basic Slide Presentation</CardTitle>
						<CardDescription>
							Simple and clean presentation with essential features
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>• Responsive design</li>
							<li>• Keyboard navigation</li>
							<li>• Vertical and horizontal slides</li>
							<li>• Code highlighting</li>
							<li>• Fragment animations</li>
							<li>• Custom backgrounds</li>
						</ul>
					</CardContent>
					<CardFooter>
						<Button asChild className="w-full">
							<Link href="/slide">View Basic Slides</Link>
						</Button>
					</CardFooter>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Advanced Slide Presentation</CardTitle>
						<CardDescription>
							Feature-rich presentation with React components integration
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>• All basic features</li>
							<li>• Custom React components</li>
							<li>• Advanced styling with Tailwind CSS</li>
							<li>• Data visualization examples</li>
							<li>• Gradient backgrounds</li>
							<li>• Complex animations</li>
						</ul>
					</CardContent>
					<CardFooter>
						<Button asChild className="w-full" variant="secondary">
							<Link href="/slide/advanced">View Advanced Slides</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>

			<section className="mt-8 rounded-lg border p-6">
				<h2 className="mb-4 text-xl font-semibold">Getting Started</h2>
				<div className="space-y-3 text-sm text-muted-foreground">
					<p>
						<strong>Navigation:</strong> Use arrow keys or space bar to navigate
						through slides
					</p>
					<p>
						<strong>Vertical Slides:</strong> Press down arrow to explore
						nested content
					</p>
					<p>
						<strong>Overview Mode:</strong> Press ESC to see all slides at once
					</p>
					<p>
						<strong>Fullscreen:</strong> Press F to toggle fullscreen mode
					</p>
				</div>
			</section>
		</div>
	);
}

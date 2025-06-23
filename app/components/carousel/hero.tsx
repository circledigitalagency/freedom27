"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Hero1, Hero2, Hero3 } from "../pages/hero-content";

interface HeroSlide {
	id: number;
	image: string;
	content?: ReactNode;
}

const heroSlides: HeroSlide[] = [
	{
		id: 1,
		image: "/images/sunrise.jpg",
		content: <Hero1 />,
	},
	{
		id: 2,
		image: "/images/book-bg.jpg",
		content: <Hero2 />,
	},
	{
		id: 2,
		image: "/images/want-coach.jpg",
		content: <Hero3 />,
	},
];

export default function HeroCarousel() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const autoplayPlugin = Autoplay({
		delay: 5000,
		stopOnInteraction: false,
		stopOnMouseEnter: true,
		playOnInit: true,
	});

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: "start",
		},
		[autoplayPlugin]
	);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const scrollTo = useCallback(
		(index: number) => {
			if (emblaApi) emblaApi.scrollTo(index);
		},
		[emblaApi]
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);

		return () => {
			emblaApi.off("select", onSelect);
			emblaApi.off("reInit", onSelect);
		};
	}, [emblaApi, onSelect]);

	const handleMouseEnter = useCallback(() => {
		setIsPaused(true);
		if (autoplayPlugin) {
			autoplayPlugin.stop();
		}
	}, [autoplayPlugin]);

	const handleMouseLeave = useCallback(() => {
		setIsPaused(false);
		if (autoplayPlugin) {
			autoplayPlugin.play();
		}
	}, [autoplayPlugin]);

	return (
		<div className="relative w-full">
			<div
				className="overflow-hidden"
				ref={emblaRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="flex">
					{heroSlides.map((slide, index) => (
						<div key={slide.id} className="flex-[0_0_100%] min-w-0">
							<div className="relative h-[60vh] min-h-[300px]  sm:min-h-[400px] md:h-[60vh] md:min-h-[500px] w-full overflow-hidden">
								<img
									src={slide.image || "/placeholder.svg"}
									alt=""
									className="absolute inset-0 w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/40" />

								<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
									<div className="text-center max-w-full sm:max-w-2xl md:max-w-4xl">
										{slide.content}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<button
				className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex sm:h-12 sm:w-12 h-8 w-8 items-center justify-center rounded-full bg-white/20 border border-white/30 text-white transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
				onClick={scrollPrev}
				aria-label="Previous slide"
			>
				<ChevronLeft className="sm:h-6 sm:w-6 h-4 w-4" />
			</button>

			<button
				className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex sm:h-12 sm:w-12 h-8 w-8 items-center justify-center rounded-full bg-white/20 border border-white/30 text-white transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
				onClick={scrollNext}
				aria-label="Next slide"
			>
				<ChevronRight className="sm:h-6 sm:w-6 h-4 w-4" />
			</button>

			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
				{heroSlides.map((_, index) => (
					<button
						key={index}
						className={`h-1 lg:h-2 w-8 rounded-full transition-all duration-300 ${
							index === selectedIndex
								? "bg-white"
								: "bg-white/50 hover:bg-white/70"
						}`}
						onClick={() => scrollTo(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}

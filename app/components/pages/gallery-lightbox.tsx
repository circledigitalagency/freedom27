import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";
import { GalleryItem } from "~/lib/types";

interface GalleryLightboxProps {
	items: GalleryItem[];
	currentIndex: number;
	isOpen: boolean;
	onClose: () => void;
}

export default function GalleryLightbox({
	items,
	currentIndex,
	isOpen,
	onClose,
}: GalleryLightboxProps) {
	const [selectedIndex, setSelectedIndex] = useState(currentIndex);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		startIndex: currentIndex,
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi, onSelect]);

	useEffect(() => {
		if (emblaApi && currentIndex !== selectedIndex) {
			emblaApi.scrollTo(currentIndex);
		}
	}, [emblaApi, currentIndex, selectedIndex]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!isOpen) return;

			switch (event.key) {
				case "Escape":
					onClose();
					break;
				case "ArrowLeft":
					scrollPrev();
					break;
				case "ArrowRight":
					scrollNext();
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose, scrollPrev, scrollNext]);

	if (!isOpen) return null;

	const currentItem = items[selectedIndex];

	return (
		<div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
			<div className="w-full h-full flex flex-col">
				<div className="flex-1 overflow-hidden" ref={emblaRef}>
					<div className="flex h-full">
						{items.map((item, index) => (
							<div
								key={item.id}
								className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-4"
							>
								<div className="relative max-w-full max-h-full">
									<img
										src={item.image || "/placeholder.svg"}
										alt={item.title}
										width={1200}
										height={800}
										className="max-w-full max-h-full object-contain"
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-black/50 backdrop-blur-sm p-6 text-white">
					<div className="container mx-auto flex items-center justify-between">
						<div className="flex-1">
							<h3 className="text-xl font-semibold mb-2">
								{currentItem.title}
							</h3>

							<span className="bg-white/20 px-2 py-1 ">
								{currentItem.category}
							</span>
						</div>
					</div>

					<div className="flex items-center gap-2">
						<button className="text-white hover:bg-white/20">
							<Share2 className="h-5 w-5" />
						</button>
						<button className="text-white hover:bg-white/20">
							<Download className="h-5 w-5" />
						</button>
					</div>
				</div>
			</div>

			<div className="bg-black/30 p-4">
				<div className="container mx-auto">
					<div className="flex gap-2 justify-center overflow-x-auto">
						{items.map((item, index) => (
							<button
								key={item.id}
								className={`flex-shrink-0 w-16 h-16  overflow-hidden border-2 transition-all ${
									index === selectedIndex
										? "border-white"
										: "border-transparent opacity-60 hover:opacity-100"
								}`}
								onClick={() => emblaApi?.scrollTo(index)}
							>
								<img
									src={item.image || "/placeholder.svg"}
									alt={item.title}
									width={64}
									height={64}
									className="w-full h-full object-cover"
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

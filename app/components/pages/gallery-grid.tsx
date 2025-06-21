"use client";

import { useState } from "react";
import { GalleryItem } from "~/lib/types";

interface GalleryGridProps {
	items: GalleryItem[];
	onImageClick: (index: number) => void;
}

export default function GalleryGrid({ items, onImageClick }: GalleryGridProps) {
	const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

	const handleImageLoad = (id: number) => {
		setLoadedImages((prev) => new Set(prev).add(id));
	};

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{items.map((item, index) => (
				<div
					key={item.id}
					className="group cursor-pointer overflow-hidden bg-gray-100 aspect-square"
					onClick={() => onImageClick(index)}
				>
					<div className="relative w-full h-full">
						<img
							src={item.image || "/placeholder.svg"}
							alt={item.title}
							className={`object-cover transition-all duration-300 group-hover:scale-105 ${
								loadedImages.has(item.id) ? "opacity-100" : "opacity-0"
							}`}
							onLoad={() => handleImageLoad(item.id)}
						/>

						{/* Loading skeleton */}
						{!loadedImages.has(item.id) && (
							<div className="absolute inset-0 bg-gray-200 animate-pulse" />
						)}

						{/* Overlay */}
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
								<h3 className="font-semibold text-sm mb-1 truncate">
									{item.title}
								</h3>
								<p className="text-xs opacity-90 line-clamp-2">
									{item.description}
								</p>
								<div className="flex items-center justify-between mt-2">
									<span className="text-xs bg-white/20 px-2 py-1 rounded">
										{item.category}
									</span>
									{item.photographer && (
										<span className="text-xs opacity-75">
											By {item.photographer}
										</span>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

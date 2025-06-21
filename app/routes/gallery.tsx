"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { GalleryCategory, GalleryItem } from "~/lib/types";
import GalleryGrid from "~/components/pages/gallery-grid";
import GalleryLightbox from "~/components/pages/gallery-lightbox";
import MainLayout from "~/components/layout/main";

const galleryItems: GalleryItem[] = [
	{
		id: 1,
		title: "Mountain Sunrise",
		description:
			"A breathtaking view of the sunrise over snow-capped mountains",
		image: "/placeholder.svg?height=400&width=400",
		category: "Nature",
		tags: ["mountains", "sunrise", "landscape"],
		photographer: "John Doe",
		date: "2024-01-15",
	},
	{
		id: 2,
		title: "City Lights",
		description: "Urban nightscape with vibrant city lights and reflections",
		image: "/placeholder.svg?height=400&width=400",
		category: "Urban",
		tags: ["city", "night", "lights"],
		photographer: "Jane Smith",
		date: "2024-01-20",
	},
	{
		id: 3,
		title: "Ocean Waves",
		description: "Powerful waves crashing against rocky coastline",
		image: "/placeholder.svg?height=400&width=400",
		category: "Nature",
		tags: ["ocean", "waves", "coast"],
		photographer: "Mike Johnson",
		date: "2024-02-01",
	},
	{
		id: 4,
		title: "Abstract Art",
		description: "Colorful abstract composition with geometric shapes",
		image: "/placeholder.svg?height=400&width=400",
		category: "Art",
		tags: ["abstract", "colorful", "geometric"],
		photographer: "Sarah Wilson",
		date: "2024-02-10",
	},
	{
		id: 5,
		title: "Forest Path",
		description: "Mysterious path winding through a dense forest",
		image: "/placeholder.svg?height=400&width=400",
		category: "Nature",
		tags: ["forest", "path", "trees"],
		photographer: "David Brown",
		date: "2024-02-15",
	},
	{
		id: 6,
		title: "Architecture",
		description: "Modern building with unique geometric design",
		image: "/placeholder.svg?height=400&width=400",
		category: "Architecture",
		tags: ["building", "modern", "design"],
		photographer: "Lisa Davis",
		date: "2024-02-20",
	},
	{
		id: 7,
		title: "Portrait Study",
		description: "Artistic black and white portrait with dramatic lighting",
		image: "/placeholder.svg?height=400&width=400",
		category: "Portrait",
		tags: ["portrait", "black and white", "dramatic"],
		photographer: "Tom Anderson",
		date: "2024-03-01",
	},
	{
		id: 8,
		title: "Street Scene",
		description: "Bustling street scene capturing urban life",
		image: "/placeholder.svg?height=400&width=400",
		category: "Urban",
		tags: ["street", "people", "urban life"],
		photographer: "Emma Taylor",
		date: "2024-03-05",
	},
];

export default function GalleryPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

	const categories: GalleryCategory[] = useMemo(() => {
		const categoryCount = galleryItems.reduce((acc, item) => {
			acc[item.category] = (acc[item.category] || 0) + 1;
			return acc;
		}, {} as Record<string, number>);

		return [
			{ id: "All", name: "All", count: galleryItems.length },
			...Object.entries(categoryCount).map(([category, count]) => ({
				id: category,
				name: category,
				count,
			})),
		];
	}, []);

	const filteredItems = useMemo(() => {
		return galleryItems.filter((item) => {
			const matchesSearch =
				item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.tags.some((tag) =>
					tag.toLowerCase().includes(searchTerm.toLowerCase())
				);

			const matchesCategory =
				selectedCategory === "All" || item.category === selectedCategory;

			return matchesSearch && matchesCategory;
		});
	}, [searchTerm, selectedCategory]);

	const handleImageClick = (index: number) => {
		setCurrentImageIndex(index);
		setLightboxOpen(true);
	};

	return (
		<MainLayout>
			<div className="min-h-screen bg-gray-50">
				<div className="container mx-auto px-4 py-8">
					<GalleryGrid items={filteredItems} onImageClick={handleImageClick} />
				</div>

				{/* Lightbox */}
				{/* <GalleryLightbox
					items={filteredItems}
					currentIndex={currentImageIndex}
					isOpen={lightboxOpen}
					onClose={() => setLightboxOpen(false)}
				/> */}
			</div>
		</MainLayout>
	);
}

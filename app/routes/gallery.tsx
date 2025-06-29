import { useState } from "react";
import { GalleryItem } from "~/lib/types";
import GalleryGrid from "~/components/pages/gallery-grid";
import GalleryLightbox from "~/components/pages/gallery-lightbox";
import MainLayout from "~/components/layout/main";
import { galleryItems } from "~/lib/data";

export default function GalleryPage() {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleImageClick = (index: number) => {
		setCurrentImageIndex(index);
		setLightboxOpen(true);
	};

	return (
		<MainLayout>
			<div className="min-h-screen bg-gray-50">
				<div className="container mx-auto px-4 py-8">
					<GalleryGrid items={galleryItems} onImageClick={handleImageClick} />
				</div>
			</div>
		</MainLayout>
	);
}

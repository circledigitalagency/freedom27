export interface NavItem {
	label: string;
	path: string;
}

export interface LogoCarouselProps {
	className?: string;
	logos: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	}[];
	autoplaySpeed?: number;
}

export interface GalleryItem {
	id: number;
	title: string;
	description: string;
	image: string;
	category: string;
	tags: string[];
	photographer?: string;
	date?: string;
}

export interface GalleryCategory {
	id: string;
	name: string;
	count: number;
}

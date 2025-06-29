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
	title?: string;
	image: string;
	category: string;
}

export interface GalleryCategory {
	id: string;
	name: string;
	count: number;
}

export interface Shop {
	id: "book" | "oneOnone" | "couple";
	image: string;
	name: string;
	price?: number;
	description: string;
	packages?: [
		{
			id: "4sessions" | "12sessions" | "8sessions";
			name: string;
			price: number;
		}
	];
}

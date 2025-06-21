import { ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function HorizontalImageBackground({
	containerStyle,
	image,
	alt,
	children,
}: {
	containerStyle?: string;
	image: string;
	alt: string;
	children: ReactNode;
}) {
	return (
		<div
			className={cn(
				"relative w-full ",
				containerStyle ? containerStyle : "h-[60vh]"
			)}
		>
			<img src={image} alt={alt} className="w-full h-full object-cover" />
			<div className="absolute inset-0 bg-black bg-opacity-20"></div>

			<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
				{children}
			</div>
		</div>
	);
}

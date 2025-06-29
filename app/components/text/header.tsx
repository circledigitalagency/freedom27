import { cn } from "~/lib/utils";

export default function Header({
	title,
	titleStyle,
	subTitile,
	containerStyle,
	subTitileStyle,
	lineStyle,
}: {
	title: string;
	titleStyle?: string;
	subTitile?: string;
	containerStyle?: string;
	subTitileStyle?: string;
	lineStyle?: string;
}) {
	return (
		<div className={cn(containerStyle, "mb-16")}>
			<h1 className="text-2xl lg:text-3xl font-semibold text-primary mb-2">
				{title}
			</h1>
			<p className="text-lg text-gray-600">{subTitile}</p>
			<div
				className={cn("w-24 h-1 bg-primary mt-6 rounded-full", lineStyle)}
			></div>
		</div>
	);
}

import { cn } from "~/lib/utils";

export default function Header({
	title,
	titleStyle,
	subTitile,
	containerStyle,
	subTitileStyle,
}: {
	title: string;
	titleStyle: string;
	subTitile?: string;
	containerStyle?: string;
	subTitileStyle?: string;
}) {
	return (
		<div className={cn("flex flex-col space-y-2", containerStyle)}>
			<h1 className={cn("text-3xl font-medium", titleStyle)}>{title}</h1>
			<p className={cn("font-light text-base", subTitileStyle)}>{subTitile}</p>
		</div>
	);
}

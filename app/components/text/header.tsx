import { cn } from "~/lib/utils";

export default function Header({
	title,
	titleStyle,
	subTitile,
	containerStyle,
}: {
	title: string;
	titleStyle: string;
	subTitile?: string;
	containerStyle?: string;
}) {
	return (
		<div className={cn("flex flex-col space-y-2", containerStyle)}>
			<h1 className={cn("text-3xl font-medium", titleStyle)}>{title}</h1>
			<p className="font-light text-base">{subTitile}</p>
		</div>
	);
}

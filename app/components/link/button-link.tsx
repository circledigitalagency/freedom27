import { Link } from "@remix-run/react";
import { ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function ButtonLink({
	to,
	title,
	linkStyle,
}: {
	to: string;
	title: string | ReactNode;
	linkStyle: string;
}) {
	return (
		<div className="flex">
			<Link
				to={to}
				className={cn(
					"flex p-3 border text-sm items-center justify-center relative overflow-hidden group",
					linkStyle
				)}
			>
				<span
					className="
absolute inset-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full

"
				></span>
				<span className="relative z-10 transition-colors duration-300 text-primary group-hover:text-white">
					{title}
				</span>
			</Link>
		</div>
	);
}

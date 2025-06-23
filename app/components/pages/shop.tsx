import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import Header from "../text/header";
import { cn } from "~/lib/utils";
import ButtonLink from "../link/button-link";
import { shopData } from "~/lib/data";

export default function Shop({
	containerStyle,
	showAll,
}: {
	containerStyle: string;
	showAll: boolean;
}) {
	const itemsToShow = showAll ? shopData : shopData.slice(0, 3);

	return (
		<section
			className={cn(
				"flex flex-col w-full justify-between items-center px-5 sm:px-24",
				containerStyle
			)}
		>
			{!showAll && (
				<div className="w-full flex flex-col justify-center items-center">
					<h1 className={cn("text-3xl font-medium")}>Shop</h1>
					<p className="font-light text-base">
						Holistic Offerings for Healing and Clarity
					</p>
				</div>
			)}
			<div className="flex flex-col space-y-5">
				{showAll && (
					<div className="flex flex-col space-y-2">
						<p className="font-medium text-2xl text-primary">All Offerings</p>
						<p className="font-light text-sm">
							Shop books, and sessions to support your path
						</p>
					</div>
				)}

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
					{itemsToShow.map((prod, index) => (
						<div
							className="flex flex-col justify-center items-start space-y-4 border border-slate-200"
							key={index}
						>
							<div className="flex w-full sm:h-52 h-44 justify-center items-center overflow-hidden">
								<img
									src={prod.image}
									alt={prod.name}
									className={cn(
										"object-fill max-h-full max-w-full",
										prod.id === "book" ? "sm:w-52 sm:h-52 w-44 h-44" : "w-full"
									)}
								/>
							</div>
							<div className="flex flex-col space-y-3 p-5">
								<p className="font-medium text-accent">{prod.name}</p>
								<p className="text-xs text-gray-400">{prod.description}</p>

								{prod.id === "book" ? (
									<ButtonLink
										to={`/checkout/${prod.id}`}
										title={
											<div className="flex flex-row items-center space-x-2 group-hover:text-white text-primary ">
												<p className="text-sm">Buy</p>
												<div className="w-px h-4 bg-primary group-hover:bg-white" />
												<p className="text-sm">R 350.00</p>
											</div>
										}
										linkStyle="w-28 h-8 p-1 border-primary"
									/>
								) : (
									<ButtonLink
										to={`/checkout/${prod.id}`}
										title="Explore Packages"
										linkStyle="w-fit h-8 p-1 border-primary"
									/>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			{!showAll && (
				<ButtonLink
					to="/shop"
					linkStyle="text-primary border-primary"
					title="Shop All"
				/>
			)}
		</section>
	);
}

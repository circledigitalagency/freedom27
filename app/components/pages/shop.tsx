import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import Header from "../text/header";
import { cn } from "~/lib/utils";
import ButtonLink from "../link/button-link";

export default function Shop({
	containerStyle,
	showAll,
}: {
	containerStyle: string;
	showAll: boolean;
}) {
	const shop = [
		{
			image: "/images/book.svg",
			product: "One on One Life Coaching",
			description:
				"Personalized sessions to support your growth, clarity, and emotional well-being — guided by compassionate listening and transformative tools.",
			price: "R 350.00",
		},
		{
			image: "/images/book.svg",
			product: "Couples session",
			description:
				"Strengthen connection, communication, and emotional harmony in your relationship through mindful, heart-centered guidance.",
			price: "R 350.00",
		},
	];

	const itemsToShow = showAll ? shop : shop.slice(0, 3);

	return (
		<section
			className={cn(
				"flex flex-col w-full justify-between items-center px-24",
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
						<p className="font-medium text-2xl text-primary">
							Coaching Sessions
						</p>
						<p className="font-light text-sm">
							Stay informed with our latest insights
						</p>
					</div>
				)}

				<div className="grid grid-cols-3 gap-5">
					{itemsToShow.map((prod, index) => (
						<div
							className="flex flex-col justify-center items-center space-y-4 border border-slate-200 py-4"
							key={index}
						>
							<img
								src={prod.image}
								alt={prod.product}
								className="w-52 h-52 object-fill"
							/>
							<div className="flex flex-col space-y-3 p-4">
								<p className="font-medium text-accent">{prod.product}</p>
								<p className="text-xs text-gray-400">{prod.description}</p>
								<p className="text-lg text-accent">{prod.price}</p>
								<div className="flex flex-row justify-between items-center">
									<div className="flex flex-row items-center space-x-4">
										<MinusCircleIcon size={20} />
										<div className="flex h-6 w-6 border justify-center items-center border-primary/50">
											<p>1</p>
										</div>
										<PlusCircleIcon size={20} />
									</div>
								</div>
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

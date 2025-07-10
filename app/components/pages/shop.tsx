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
				"flex flex-col justify-center items-center w-full py-16 lg:py-24 bg-gray-50",
				containerStyle
			)}
		>
			<div
				className={cn(
					"container mx-auto px-5 lg:px-24",
					showAll
						? "flex flex-col space-y-16"
						: "flex flex-row w-full justify-between"
				)}
			>
				{!showAll && (
					<div className="text-left mb-16">
						<h1 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
							Shop
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Holistic Offerings for Healing and Clarity
						</p>
						<div className="w-24 h-1 bg-primary mt-6 rounded-full"></div>
					</div>
				)}

				{showAll && (
					<div className="text-center lg:text-left">
						<h2 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
							All Offerings
						</h2>
						<p className="text-gray-600 text-lg">
							Shop books, and sessions to support your path
						</p>
						<div className="w-16 h-1 bg-primary mt-4 rounded-full mx-auto lg:mx-0"></div>
					</div>
				)}

				<div className="flex w-2/5">
					{itemsToShow.map((prod, index) => (
						<div
							key={prod.id || index}
							className="group bg-white transition-all duration-300 overflow-hidden border border-primary/20 hover:border-primary/20"
						>
							<div className="relative h-64 bg-white overflow-hidden">
								<img
									src={prod.image || "/placeholder.svg"}
									alt={`${prod.name} - Holistic offering for healing and clarity`}
									className={cn(
										"transition-transform duration-500 group-hover:scale-105",
										prod.id === "book"
											? "w-40 h-40 lg:w-48 lg:h-48 object-contain mx-auto mt-4"
											: "w-full h-full object-cover"
									)}
									loading="lazy"
								/>

								{prod.id !== "book" && (
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								)}
							</div>

							<div className="p-6 space-y-4">
								<h3 className="font-semibold text-xl text-accent group-hover:text-primary transition-colors duration-200">
									{prod.name}
								</h3>

								<p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
									{prod.description}
								</p>

								<div className="pt-2">
									{prod.id === "book" ? (
										<ButtonLink
											to={`/checkout/${prod.id}`}
											title={
												<div className="flex items-center justify-center space-x-3 group/btn">
													<span className="text-sm font-medium">Buy Now</span>
													<div className="w-px h-4 bg-current opacity-50"></div>
													<span className="text-sm font-bold">R 350.00</span>
												</div>
											}
											linkStyle="w-full h-12 border-primary hover:bg-primary hover:text-white transition-all duration-200"
										/>
									) : (
										<ButtonLink
											to={`/checkout/${prod.id}`}
											title={
												<div className="flex items-center justify-center space-x-2">
													<span>Explore Packages</span>
													<svg
														className="w-4 h-4 transition-transform group-hover:translate-x-1"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</div>
											}
											linkStyle="w-full h-12 border-primary hover:bg-primary hover:text-white transition-all duration-200"
										/>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

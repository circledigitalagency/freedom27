import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import MainLayout from "~/components/layout/main";
import ButtonLink from "~/components/link/button-link";
import Shop from "~/components/pages/shop";
import { cn } from "~/lib/utils";

export default function Page() {
	return (
		<MainLayout>
			<div className="flex flex-col space-y-32">
				<div className="flex sm:flex-row flex-col space-y-16 py-10 sm:px-32 px-5 bg-gray-50">
					<div className="flex flex-col space-y-2 justify-start items-start sm:w-[40%]">
						<h1 className={cn("text-4xl font-medium")}>Shop</h1>
						<p className="font-light text-base">
							Holistic Offerings for Healing and Clarity
						</p>
					</div>
					<div className="flex flex-row items-center justify-start sm:w-[50%]">
						<div className="w-full flex flex-col">
							<img src="/images/book.svg" alt="book" className="object-fill" />
						</div>
						<div className="flex flex-col sm:space-y-12 space-y-8 p-4">
							<div className="space-y-5">
								<p className="text-2xl sm:text-4xl font-medium text-accent">
									Freedom - Pursuit of Liberty
								</p>
								<p className="text-sm text-gray-400">
									A gentle guide to letting go, healing past wounds, and finding
									inner balance, through self-awareness, mindset shifts, and
									mindful living.
								</p>
							</div>

							<div className="flex flex-row justify-between items-center">
								<ButtonLink
									to={`/checkout/book`}
									title={
										<div className="flex flex-row items-center space-x-2 group-hover:text-white text-primary ">
											<p className="text-sm">Buy</p>
											<div className="w-px h-4 bg-primary group-hover:bg-white" />
											<p className="text-sm">R 350.00</p>
										</div>
									}
									linkStyle="border-primary w-36 h-10 p-1"
								/>
							</div>
						</div>
					</div>
				</div>
				<Shop showAll containerStyle="space-y-32" />
			</div>
		</MainLayout>
	);
}

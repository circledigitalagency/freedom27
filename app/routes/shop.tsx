import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import MainLayout from "~/components/layout/main";
import Shop from "~/components/pages/shop";
import { cn } from "~/lib/utils";

export default function Page() {
	return (
		<MainLayout>
			<div className="flex flex-col space-y-32">
				<div className="flex flex-row space-y-16 py-10 px-32 bg-gray-50">
					<div className="flex flex-col space-y-2 justify-start items-start w-[40%]">
						<h1 className={cn("text-4xl font-medium")}>Shop</h1>
						<p className="font-light text-base">
							Holistic Offerings for Healing and Clarity
						</p>
					</div>
					<div className="flex flex-row items-center justify-start w-[50%]">
						<div className="w-full flex flex-col">
							<img src="/images/book.svg" alt="book" className="object-fill" />
						</div>
						<div className="flex flex-col space-y-12 p-4">
							<div className="space-y-5">
								<p className="text-4xl font-medium text-accent">
									Freedom - Pursuit of Liberty
								</p>
								<p className="text-sm text-gray-400">
									A gentle guide to letting go, healing past wounds, and finding
									inner balance, through self-awareness, mindset shifts, and
									mindful living.
								</p>
							</div>

							<div className="flex flex-row justify-between items-center">
								<div className="flex flex-row items-center space-x-4">
									<MinusCircleIcon size={20} />
									<div className="flex h-6 w-6 border justify-center items-center border-primary/50">
										<p>1</p>
									</div>
									<PlusCircleIcon size={20} />
								</div>
								<button className="flex flex-row items-center space-x-2 justify-center border border-primary w-36 h-10 p-1">
									<p className="text-accent">Buy</p>
									<div className="w-px h-4 bg-accent" />
									<p className="text-base text-accent">R 350.00</p>
								</button>
							</div>
						</div>
					</div>
				</div>
				<Shop showAll containerStyle="space-y-32" />
			</div>
		</MainLayout>
	);
}

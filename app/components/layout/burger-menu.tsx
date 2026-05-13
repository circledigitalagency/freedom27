import { MenuIcon } from "lucide-react";
import { useState } from "react";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "../ui/sheet";
import Logo from "./logo";
import { menu } from "~/lib/data";
import { Link, useNavigate } from "@remix-run/react";

const BurgerMenu = () => {
	const navigation = useNavigate()
	const [openOptions, setOpenOptions] = useState<boolean>();
	const [openDrawer, setOpenDrawer] = useState<boolean>();

	const closeDrawer = () => {

	};

	const menuItemClick = (id: string) => {
		setOpenDrawer(!openDrawer);

		setTimeout(() => {
			const element = document.querySelector(id);

			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}, 100);
	};

	return (
		<Sheet open={openDrawer} onOpenChange={() => setOpenDrawer(!openDrawer)}>
			<SheetTrigger className="sm:hidden block">
				<MenuIcon size={30} />
			</SheetTrigger>
			<SheetContent side="left" className="bg-[#060F1A]">
				<SheetHeader>
					<SheetTitle>
						<Logo style="h-20 w-20" />
					</SheetTitle>
					<SheetDescription className="flex flex-col space-y-2 p-2 w-full items-start h-[12rem] justify-between">
						<div className="flex flex-col space-y-2 p-2 w-full items-start">
							{menu.map((item, index) => (
								<div key={index}>
									<button className="text-accent" onClick={() => menuItemClick(item.path)}>
										{item.label}
									</button>
								</div>
							))}
						</div>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default BurgerMenu;

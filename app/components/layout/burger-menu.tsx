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
import { Link } from "@remix-run/react";

const BurgerMenu = () => {
	const [openOptions, setOpenOptions] = useState<boolean>();
	const [openDrawer, setOpenDrawer] = useState<boolean>();

	const closeDrawer = () => {
		setOpenDrawer(false);
		setOpenOptions(false);
	};

	return (
		<Sheet onOpenChange={closeDrawer}>
			<SheetTrigger className="sm:hidden block">
				<MenuIcon size={30} />
			</SheetTrigger>
			<SheetContent side="left" className="bg-white">
				<SheetHeader>
					<SheetTitle>
						<Logo style="h-20 w-20" />
					</SheetTitle>
					<SheetDescription className="flex flex-col space-y-2 p-2 w-full items-start h-[12rem] justify-between">
						<div className="flex flex-col space-y-2 p-2 w-full items-start">
							{menu.map((item, index) => (
								<div key={index}>
									<Link className="text-accent" to={item.path}>
										{item.label}
									</Link>
								</div>
							))}
						</div>
						<Link
							to="/shop"
							className="sm:hidden p-2 border border-1 border-primary text-primary text-sm w-32 items-center justify-center flex"
						>
							Book a session
						</Link>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default BurgerMenu;

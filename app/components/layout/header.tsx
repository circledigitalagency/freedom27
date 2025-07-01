import { Link, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { menu } from "~/lib/data";
import { cn } from "~/lib/utils";
import { SquigglyLine } from "../shapes/squiggly-line";
import { useScroll } from "~/hooks/use-scroll";
import { MailIcon, PhoneCall } from "lucide-react";
import BurgerMenu from "./burger-menu";

export default function Header() {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const isScrolled = useScroll(20);

	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<motion.header
			className={cn(
				"fixed top-0 w-full h-fit bg-white/90 backdrop-blur-sm z-50 transition-all duration-300 ease-out",
				isScrolled ? "shadow-lg shadow-black/5" : "shadow-none"
			)}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="flex flex-row justify-between items-center h-8 bg-primary px-2 lg:px-24">
				<p className="text-white italic text-[10px] lg:text-xs line-clamp-1">
					“You are not alone, let us help you break free and achieve greatness”
				</p>
				<div className="flex flex-row space-x-5 items-center">
					<div className="flex flex-row items-center space-x-2">
						<PhoneCall size={15} color="white" />
						<p className="font-light hidden md:block text-sm text-white">
							083 784 8001
						</p>
					</div>
					<a
						href="mailto:info@csresources.co.za"
						className="flex flex-row items-center space-x-2 cursor-pointer"
					>
						<MailIcon size={15} color="white" />
						<p className="font-light hidden md:block text-sm text-white ">
							tshepo@freedom27.co.za
						</p>
					</a>
				</div>
			</div>
			<nav className="sm:px-24 py-2 px-4 flex justify-between items-center">
				<Link to="/">
					<div className="h-20 w-32">
						<img
							src="/images/freedom-logo.svg"
							alt="logo"
							className="object-fill"
						/>
					</div>
				</Link>
				<div className="hidden md:block">
					<div className="flex flex-row gap-6 items-center justify-end">
						{menu.map((men, index) => (
							<Link to={men.path} key={index} className="relative">
								<motion.p
									whileHover={{ y: -2 }}
									onHoverStart={() => setHoveredItem(men.label)}
									onHoverEnd={() => setHoveredItem(null)}
									transition={{
										type: "spring",
										stiffness: 400,
										damping: 10,
									}}
									className={cn(
										"transition-colors duration-300 ease-in-out relative py-2 px-1",
										isActive(men.path)
											? "text-accent font-medium"
											: "text-accent hover:text-accent"
									)}
								>
									{men.label}
								</motion.p>
								<SquigglyLine
									isVisible={isActive(men.path) || hoveredItem === men.label}
									strokeStyle="wavy"
									width={men.label.length * 8 + 20}
									thickness={1}
								/>
							</Link>
						))}
					</div>
				</div>
				<BurgerMenu />
			</nav>
		</motion.header>
	);
}

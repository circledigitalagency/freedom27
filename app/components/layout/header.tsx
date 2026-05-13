import { Link, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { menu } from "~/lib/data";
import { cn } from "~/lib/utils";
import { SquigglyLine } from "../shapes/squiggly-line";
import { useScroll } from "~/hooks/use-scroll";
import { MailIcon, PhoneCall } from "lucide-react";
import BurgerMenu from "./burger-menu";
import Logo from "./logo";
import ButtonLink from "../link/button-link";

export default function Header() {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const isScrolled = useScroll(20);

	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<motion.header
			className={cn(
				"fixed top-0 w-full h-fit bg-background/90 backdrop-blur-sm z-50 transition-all duration-300 ease-out",
				isScrolled ? "shadow-lg shadow-black/5" : "shadow-none"
			)}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<nav className="sm:px-16 py-2 px-4 flex justify-between items-center">
				<Logo style="h-20 w-20" />
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
										"transition-colors duration-300 ease-in-out relative py-2 px-1 uppercase tracking-[0.14em] text-sm",
										isActive(men.path)
											? "text-accent font-medium"
											: "text-gray hover:text-accent"
									)}
								>
									{men.label}
								</motion.p>
							</Link>
						))}
						<a
							href="#contact"
							className="rounded-sm bg-cyan-400 px-5 py-2 text-sm font-medium uppercase tracking-[0.14em] text-slate-900 transition hover:bg-cyan-100"
						>
							Get in Touch
						</a>
					</div>
				</div>
				<BurgerMenu />
			</nav>
		</motion.header>
	);
}

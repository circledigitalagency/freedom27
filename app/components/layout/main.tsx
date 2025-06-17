import { Link } from "@remix-run/react";
import { ReactNode, useState } from "react";
import { menu } from "~/lib/data";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import NavLink from "../link/nav-link";
import { Separator } from "../ui/separator";
import { FacebookIcon, InstagramIcon, LucideLinkedin } from "lucide-react";

const MainLayout = ({
	children,
	isHome,
}: {
	children: ReactNode;
	isHome?: boolean;
}) => {
	const [isHovering, setIsHovering] = useState(false);
	const [activeOption, setActiveOption] = useState<string>();

	return (
		<div className="flex flex-col overflow-y-auto">
			<header>
				<nav className="sm:px-24 py-6 px-4 flex justify-between items-center">
					<Link to="/">
						<div className="h-20 w-32 " />
					</Link>
					<div className="hidden md:block">
						<div className="flex flex-row gap-6 items-center justify-end">
							{menu.map((men, index) => (
								<Link to={men.path} key={index}>
									<motion.p
										whileHover={{
											x: 5,
										}}
										onHoverEnd={() => setIsHovering(false)}
										onHoverStart={() => {
											setActiveOption(men.label);
											setIsHovering(true);
										}}
										transition={{
											type: "tween",
											duration: 0.2,
											ease: "easeOut",
										}}
										className={cn(
											"transition duration-700 ease-in-out text-primary"
										)}
									>
										{men.label}
									</motion.p>
								</Link>
							))}
						</div>
					</div>
				</nav>
			</header>
			{children}
			<footer className="flex flex-col gap-12 sm:px-24 px-4 py-16">
				<div className="flex sm:flex-row flex-col w-full justify-between sm:items-center">
					<Link to="/">
						<div className="h-20 w-32 " />
					</Link>
					<div className="flex flex-row sm:space-x-10 space-x-5">
						<NavLink path="/mindfulness" title="Mindfulness" />
						<NavLink path="/about-us" title="About us" />
						<NavLink path="/services" title="Coaching Services" />
						<NavLink path="/courses" title="Courses" />
						<NavLink path="/shop" title="Shop" />
					</div>
				</div>
				<Separator />
				<div className="flex flex-row items-start justify-between">
					<div className="flex flex-col space-y-2">
						<p className="font-medium text-sm text-primary">
							FREEDOM 27 PTY LTD
						</p>
						<p className="font-light text-sm">083 784 8001</p>
						<a
							href="mailto:info@csresources.co.za"
							className="font-medium text-sm text-primary cursor-pointer"
						>
							tshepo@freedom27.co.za
						</a>
					</div>
					<div className="flex flex-row items-center space-x-5">
						<a href="">
							<InstagramIcon className="text-primary" size={22} />
						</a>
						<a href="">
							<FacebookIcon className="text-primary" size={22} />
						</a>
						<a href="">
							<LucideLinkedin className="text-primary" size={22} />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default MainLayout;

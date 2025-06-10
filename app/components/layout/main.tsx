import { Link } from "@remix-run/react";
import { ReactNode, useState } from "react";
import { menu } from "~/lib/data";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

const MainLayout = ({ children }: { children: ReactNode }) => {
	const [isHovering, setIsHovering] = useState(false);
	const [activeOption, setActiveOption] = useState<string>();

	return (
		<div className="flex flex-col overflow-y-auto">
			<header>
				<nav className="sm:px-24 py-6 px-4 flex justify-between items-center">
					<Link to="/">
						<div className="h-20 w-32 bg-red-200" />
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
											"transition duration-700 ease-in-out text-tan"
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
		</div>
	);
};

export default MainLayout;

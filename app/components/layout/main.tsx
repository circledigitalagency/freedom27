import { Link } from "@remix-run/react";
import { ReactNode, useState } from "react";
import { menu } from "~/lib/data";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import NavLink from "../link/nav-link";
import { Separator } from "../ui/separator";
import { FacebookIcon, InstagramIcon, LucideLinkedin } from "lucide-react";
import Header from "./header";

const MainLayout = ({
	children,
	isHome,
}: {
	children: ReactNode;
	isHome?: boolean;
}) => {
	return (
		<div className="flex flex-col overflow-y-auto">
			<Header />
			<main>
				{children}
				<footer className="flex flex-col gap-12 sm:px-24 px-4 py-16">
					<Separator />
					<div className="flex sm:flex-row flex-col w-full justify-between sm:items-center">
						<Link to="/">
							<div className="h-20 w-56 ">
								<img
									src="/images/freedom-logo.png"
									alt="logo"
									className="object-fill"
								/>
							</div>
						</Link>
						<div className="flex flex-row sm:space-x-10 space-x-5">
							<NavLink path="/about-us" title="About us" />
							<NavLink path="/services" title="Services" />
							<NavLink path="/gallery" title="Gallery" />
							<NavLink path="/blog" title="Blog" />
							<NavLink path="/shop" title="Shop" />
						</div>
					</div>

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
			</main>
		</div>
	);
};

export default MainLayout;

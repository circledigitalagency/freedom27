import { ReactNode } from "react";
import NavLink from "../link/nav-link";
import { Separator } from "../ui/separator";
import { FacebookIcon, InstagramIcon, LucideLinkedin } from "lucide-react";
import Header from "./header";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col overflow-y-auto">
			<Header />
			<main className="mt-32">
				{children}
				<footer className="flex flex-col gap-12 sm:px-24 px-4 py-8">
					<Separator />
					<div className="flex sm:flex-row flex-col w-full justify-between">
						<div className="flex flex-col space-y-6">
							<div className="flex flex-col space-y-2">
								<p className="font-medium text-sm text-primary">
									FREEDOM 27 PTY LTD
								</p>
								<a
									href="mailto:breakfree@freedom27.co.za"
									className="font-medium text-sm text-primary cursor-pointer"
								>
									breakfree@freedom27.co.za
								</a>
							</div>
							<div className="flex flex-row items-center space-x-5 sm:mt-0 mt-10">
								<a href="https://www.instagram.com/freedom27tm?igsh=MWUzYW1yZWJhbXp1Ng==">
									<InstagramIcon className="text-primary" size={22} />
								</a>
								<a href="https://www.facebook.com/SobonaZA">
									<FacebookIcon className="text-primary" size={22} />
								</a>
								<a href="https://www.linkedin.com/company/freedom27/">
									<LucideLinkedin className="text-primary" size={22} />
								</a>
							</div>
						</div>

						<div className="flex flex-row sm:space-x-10 space-x-5 mt-10 sm:mt-0">
							<NavLink path="/about-us" title="About us" />
							<NavLink path="/services" title="Services" />
							<NavLink path="/gallery" title="Gallery" />
							<NavLink path="/blog" title="Blogs" />
							<NavLink path="/shop" title="Shop" />
						</div>
					</div>
				</footer>
			</main>
		</div>
	);
};

export default MainLayout;

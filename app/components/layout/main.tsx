import { ReactNode } from "react";
import NavLink from "../link/nav-link";
import { Separator } from "../ui/separator";
import { FacebookIcon, InstagramIcon, LucideLinkedin } from "lucide-react";
import Header from "./header";
import { menu } from "~/lib/data";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col overflow-y-auto">
			<Header />
			<main className="mt-32">
				{children}

				{/* FOOTER */}
				<footer className="flex flex-col gap-6 bg-[#060F1A] px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
					<div className="font-syne text-xl font-bold tracking-wide text-white">
						Freedom <span className="text-cyan-400">27</span>
					</div>

					<ul className="flex flex-wrap gap-6">
						{menu.map((item, key) => (
							<li key={key}>
								<a
									href={item.path}
									className="text-sm tracking-[0.08em] text-white/40 transition hover:text-cyan-400"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>

					<div className="text-sm text-white/20">
						© 2026 Freedom 27 Pty Ltd
					</div>
				</footer>
			</main>
		</div>
	);
};

export default MainLayout;

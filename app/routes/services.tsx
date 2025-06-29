import MainLayout from "~/components/layout/main";
import { Link } from "@remix-run/react";
import ButtonLink from "~/components/link/button-link";
import { approach, experiences } from "~/lib/data";
import HorizontalImageBackground from "~/components/layout/horizontal-image-bg";
import Header from "~/components/text/header";

export default function Page() {
	return (
		<MainLayout>
			<HorizontalImageBackground
				image="https://res.cloudinary.com/dg1g6ctku/image/upload/v1749988987/aaron-burden-dXYE1d08BiY-unsplash_jzz2z7.jpg"
				alt="hero"
				children={
					<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
						<div className="text-center max-w-3xl mx-auto">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
								Rooted in Presence.
							</h1>

							<p className="text-xl md:text-2xl mb-8">
								Mindfulness is the heart of Freedom 27, a path to mental
								stillness, emotional awareness, and deeper self-connection.
							</p>
						</div>
					</div>
				}
			/>

			<div className="flex flex-col w-full sm:px-32 px-5 py-20">
				<section className="flex flex-col w-full justify-center items-start space-y-6 py-10">
					<Header title="What Is Mindfulness?" />

					<p>
						Mindfulness is a conscious practice of being fully present in mind,
						body, and spirit. At Freedom 27, we guide individuals to observe
						without judgment, release inner noise, and return to their breath as
						an anchor.
					</p>
					<p className="font-medium text-accent">The Gifts of Mindfulness:</p>
					<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
						<li>Cultivates emotional balance</li>
						<li>Improves clarity and decision-making</li>
						<li>Enhances resilience during stress</li>
						<li>Deepens self-awareness</li>
					</ul>
				</section>
			</div>
			<section className="flex flex-col sm:justify-center justify-start items-center bg-gray-50 w-full sm:h-[60vh] h-fit">
				<section className="flex flex-col w-full justify-center items-center space-y-8 py-10">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
						Our Approach
					</h1>

					<div className="grid grid-cols-1 sm:grid-cols-5 gap-10">
						{approach.map((ap, index) => (
							<div
								className="w-[17rem] h-[17rem] relative group cursor-pointer"
								key={index}
							>
								<div className="absolute w-full h-full overflow-hidden">
									<img
										src={ap.img}
										alt={ap.img}
										className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/20 z-10"></div>
								</div>
								<div className="relative z-10 flex flex-col justify-end h-full p-6 space-y-5">
									<p className="text-white sm:text-xl text-lg font-semibold">
										{ap.title}
									</p>
									<p className="text-white sm:text-base text-sm">
										{ap.subheading}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</section>
			<div className="flex flex-col w-full sm:px-32 px-5 py-20">
				<section className="flex flex-col w-full justify-center items-center space-y-10 py-20">
					<Header title="Experiences We Integrate" lineStyle="mx-auto" />

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
						{experiences.map((exp, index) => (
							<div
								className="flex flex-col justify-center items-start sm:space-y-5 space-y-3 sm:p-6 p-4 sm:w-[25rem] sm:h-[25rem] w-[20rem] h-[20rem] border border-accent"
								key={index}
							>
								<div className="flex gap-2 items-center">
									<img
										src={exp.icon}
										alt={exp.icon}
										className="sm:w-16 sm:h-16 w-12 h-12"
									/>
									<p className="text-primary text-sm sm:text-base">
										{exp.label}
									</p>
								</div>
								<div className="space-y-4 h-36 content-center">
									{exp.value.map((val, index) => (
										<ul
											className="list-disc flex flex-col gap-4 px-5 text-xs sm:text-sm"
											key={index}
										>
											<li>{val}</li>
										</ul>
									))}
								</div>
								<div className="flex flex-col space-y-2">
									<p className="text-accent sm:text-sm text-xs">Takeaways</p>
									<p className="sm:text-sm text-xs">{exp.takeaways}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
			<section className="flex flex-col space-y-8 justify-center items-center bg-gray-50 w-full sm:h-72 h-96">
				<h1 className="text-2xl font-medium text-primary">
					Create Space for Yourself
				</h1>
				<p className="sm:w-[50%] w-[90%] text-center text-primary">
					If you’re seeking calm, clarity, or healing, one-on-one mindfulness
					coaching offers a nurturing space to reconnect with yourself and grow
					at your own pace.
				</p>
				<ButtonLink
					to="/shop"
					title="Book One-on-One Life Coaching"
					linkStyle="border-primary text-primary"
				/>
			</section>
		</MainLayout>
	);
}

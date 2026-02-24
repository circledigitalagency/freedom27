import type { MetaFunction } from "@remix-run/node";
import {
	Check,
	ChevronDown,
	HeartHandshakeIcon,
	SproutIcon,
	TreePineIcon,
} from "lucide-react";
import MainLayout from "~/components/layout/main";

import { Link } from "@remix-run/react";
import HorizontalImageBackground from "~/components/layout/horizontal-image-bg";
import Header from "~/components/text/header";
import Shop from "~/components/pages/shop";
import ButtonLink from "~/components/link/button-link";
import LogoCarousel from "~/components/carousel/partners";
import { affiliates, programs } from "~/lib/data";
import HeroCarousel from "~/components/carousel/hero";
import Carousel from "~/components/carousel/home";
import { servicesData } from "./services";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
	return [
		{ title: "Freedom27 – Wellness & Mindfulness" },
		{
			name: "description",
			content:
				"Freedom 27 is a mindfulness and personal development company founded by Tshepo Matlou, offering integrated experiences designed to foster mental well-being, self-improvement, life coaching and trauma healing. Through hikes, workshops, coaching sessions, and retreats. Individuals, couples and groups engage in tailored programs to cultivate clarity, emotional balance, and resilience.",
		},
		{
			name: "keywords",
			content: "mindfulness, trauma healing, wellness coaching, breathwork",
		},
		{ name: "author", content: "Freedom 27" },
		{ property: "og:title", content: "Freedom 27 – Mindfulness & Healing" },
		{
			property: "og:description",
			content:
				"Explore coaching, retreats, and breathwork to restore emotional balance and clarity.",
		},
		{
			property: "og:image",
			content:
				"https://res.cloudinary.com/dg1g6ctku/image/upload/v1751621471/freedom-logo_g1idsk.png",
		},
		{ property: "og:type", content: "website" },
	];
};

export default function Index() {
	return (
		<MainLayout>
			<div className="flex flex-col space-y-24 lg:space-y-32">
				<HeroCarousel />
				<section className="px-5 lg:px-24">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						<div className="flex-col space-y-14">
							<Header
								title="What is Freedom 27?"
								titleStyle="text-primary"
								subTitile="A Sanctuary for Mind, Body & Spirit"
								containerStyle="text-left"
							/>
							<div className="space-y-8">
								<div className="flex items-start space-x-4 group">
									<div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
										<HeartHandshakeIcon className="w-6 h-6 text-secondary" />
									</div>
									<div className="flex-1">
										<p className="text-gray-700 leading-relaxed">
											Freedom27 is a holistic coaching and wellness company that empowers individuals, leaders, and organisations through integrated personal and professional development.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 group">
									<div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
										<TreePineIcon className="w-6 h-6 text-secondary" />
									</div>
									<div className="flex-1">
										<p className="text-gray-700 leading-relaxed">
											We combine emotional intelligence, coaching, mindfulness, self-care, and intentional goal setting to support collaboration, alignment, and sustainable high performance in an ever-changing world.

											We aim to empower people to live, lead and work from a place of wholeness, clarity and intention.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 group">
									<div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
										<SproutIcon className="w-6 h-6 text-secondary" />
									</div>
									<div className="flex-1">
										<p className="text-gray-700 leading-relaxed">
											We work with individuals, executives, businesses, and teams, supporting them to collaborate more effectively, align around shared values and goals, and maximise performance without sacrificing wellbeing. Overcome challenges and conflicts.

										</p>
									</div>
								</div>
								<p className="text-gray-700 leading-relaxed">
									Our company has independent therapist, coaches and speakers affiliates across the country.

								</p>
							</div>

							<div className="pt-4">
								<ButtonLink
									to="/about-us"
									title={
										<div className="flex items-center space-x-2">
											<span>Learn More About Us</span>
											<svg
												className="w-4 h-4 transition-transform group-hover:translate-x-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</div>
									}
									linkStyle="text-primary border-primary hover:bg-primary hover:text-white px-6 py-3 transition-all duration-200 inline-flex items-center group"
								/>
							</div>
						</div>
						<div className="flex justify-center items-center w-full h-full">
							<div className="w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem]">
								<img
									className="w-full h-full rounded-full object-cover"
									alt="A Sanctuary for Mind, Body & Spirit"
									src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1751532273/pexels-jacint-bofill-1745787-17225405_aqxpk5.jpg"
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="sm:px-24 px-5 py-24 space-y-16">

					<Header
						title="Our Services"
						subTitile="We work with individuals, leaders and organisations to strengthen clarity, regulation and capacity for meaningful change."
						titleStyle="text-primary"
						subTitileStyle="max-w-2xl"
					/>

					{/* Service preview grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

						{servicesData.slice(0, 4).map((service, i) => {
							const Icon = service.icon

							return (
								<div
									key={i}
									className="group rounded-xl border border-border p-6 space-y-4 hover:shadow-sm transition"
								>
									<div style={{ backgroundColor: `${service.color}33` }} className="flex h-10 w-10 items-center justify-center rounded-lg">
										<Icon className={cn(
											"h-5 w-5",
											`text-[${service.color}]`
										)} />
									</div>

									<h4 className="font-semibold text-lg">{service.title}</h4>

									<ul className="space-y-2">
										{service.items.map((item, j) => (
											<li
												key={j}
												className="flex items-start gap-3 text-foreground"
												style={{
													animationDelay: `${j * 60}ms`,
													animation: "fadeInUp 0.4s ease-out both",
												}}
											>
												<span style={{ backgroundColor: `${service.color}33` }} className={cn(
													"mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
												)}>
													<Check className={cn(
														"h-2 w-2",
														`text-[${service.color}]`
													)} />
												</span>
												<span className="text-xs leading-relaxed lg:text-base">
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>
							)
						})}

					</div>

					{/* CTA */}
					<div className="flex gap-6">
						<ButtonLink
							to={`/services`}
							title={
								<div className="flex items-center justify-center space-x-3 group/btn">
									<span className="text-sm font-medium">Learn How We Work</span>
									<svg
										className="w-4 h-4 transition-transform group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							}
							linkStyle="w-full h-12 border-primary hover:bg-primary hover:text-white transition-all duration-200"
						/>
					</div>
				</section>
				<section className="flex flex-col w-full justify-center items-center px-5 sm:px-24 bg-gray-50 py-20 space-y-16">
					<Header
						title="Offerings & Programs"
						titleStyle=""
						subTitile="Wellness Experiences to Support Every Journey"
						containerStyle="text-center"
						lineStyle="mx-auto"
					/>
					<div className="flex flex-col space-x-10">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
							{programs.map((prog, index) => (
								<div
									className="w-[20rem] h-[20rem] relative group cursor-pointer"
									key={index}
								>
									<div className="absolute w-full h-full overflow-hidden">
										<img
											src={prog.img}
											alt={prog.img}
											className="object-cover w-full h-full "
										/>
										<div className="absolute inset-0 bg-black/20 z-10"></div>
									</div>
									<div className="relative z-10 flex flex-col justify-end h-full p-6 space-y-5">
										<p className="text-white text-base font-semibold">
											{prog.label}
										</p>
										<p className="text-white text-sm">{prog.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="w-full py-16 lg:py-24">
					<div className="container mx-auto px-5 lg:px-24">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
							<div className="relative order-first">
								<div className="aspect-[4/5] lg:aspect-[3/3] overflow-hidden">
									<img
										src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214264/tshepo-matlou_d4hpnq.jpg"
										alt="Tshepo Matlou - Mindfulness coach and leadership mentor"
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
										loading="lazy"
									/>
								</div>
							</div>
							<div className="flex flex-col space-y-6 lg:pr-8">
								<Header
									title="Meet the Guide Behind Freedom 27"
									subTitile="Tshepo Matlou"
									titleStyle="text-primary"
								/>

								<div className="prose prose-lg max-w-none">
									<p className="text-gray-700 leading-relaxed">
										Tshepo Matlou is a mindfulness coach and leadership mentor
										with a passion for helping others heal, grow, and thrive.
										With over two decades of experience, his approach is as
										strategic as it is soulful.
									</p>
								</div>

								<div className="pt-4">
									<Link
										to="/about-us"
										className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group"
									>
										Learn more about Tshepo
										<svg
											className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Shop showAll={false} containerStyle="space-y-10" />
				<section className="flex flex-col w-full justify-center items-center px-5 sm:px-24 space-y-10 py-16 lg:py-24">
					<Header title="Our Trusted Partners" lineStyle="mx-auto" />

					<LogoCarousel logos={affiliates} />
				</section>
				<section className="py-16 lg:py-16">
					<HorizontalImageBackground
						image="https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214285/peace_kk3kfe.jpg"
						alt="peace"
						containerStyle="sm:h-[30vh] h-[40vh]"
						children={
							<div className="flex flex-col space-y-5 justify-center items-center">
								<div className={"text-white"}>
									<h1 className="text-2xl lg:text-3xl font-semibold mb-2 text-center">
										Ready to Begin Meaningful Change ?
									</h1>
									<p className="text-base text-center max-w-2xl">
										Our work creates space for clarity, regulation and intentional progress.
									</p>
								</div>
								<Link
									to="mailto:breakfree@freedom27.co.za"
									className="border border-white px-3 py-3 text-white"
								>
									Book a Discovery Conversation
								</Link>
							</div>
						}
					/>
				</section>
			</div>
		</MainLayout>
	);
}

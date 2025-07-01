import type { MetaFunction } from "@remix-run/node";
import {
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
import { affiliates } from "~/lib/data";
import HeroCarousel from "~/components/carousel/hero";
import Carousel from "~/components/carousel/home";

export const meta: MetaFunction = () => {
	return [
		{ title: "Freedom27" },
		{
			name: "description",
			content:
				"Freedom 27 is a mindfulness and personal development company founded by Tshepo Matlou, offering integrated experiences designed to foster mental well-being, self-improvement, life coaching and trauma healing. Through hikes, workshops, coaching sessions, and retreats. Individuals, couples and groups engage in tailored programs to cultivate clarity, emotional balance, and resilience.",
		},
	];
};

export default function Index() {
	const arrowVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
				delay: 3.2, // After subtitle appears
			},
		},
	};

	const programs = [
		{
			label: "Mindfulness Hikes & Outdoor Experiences",
			img: "/images/hike01.jpg",
			description:
				"Reconnect with nature and yourself through guided hikes with intentional breathing, focus, and emotional clarity exercises.",
		},
		{
			label: "1-Day & 2-Day Group Workshops",
			img: "/images/workhops.jpg",
			description:
				"Immersive sessions focused on mindset, healing, emotional intelligence, and mental clarity.",
		},
		{
			label: "Coaching for Individuals & Couples",
			img: "/images/coaching.jpg",
			description:
				"One-on-one or couples coaching focused on emotional healing, life alignment, and practical wellness tools.",
		},
		{
			label: "Retreats",
			img: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214287/retreats_ls7v7u.jpg",
			description:
				"3-day intensive healing and mindfulness retreats that offer space for deep transformation.",
		},
		{
			label: "Breakfast & Networking Sessions",
			img: "/images/breakfast&netowrking.jpg",
			description:
				"A casual space to learn mindfulness tools, build community, and align your purpose.",
		},
		{
			label: "Masterclass & Specialized Trainings",
			img: "/images/masterclass.jpg",
			description:
				"Focused on mindset reprogramming, trauma healing, leadership coaching, and behavioural training.",
		},
	];

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
											Freedom 27 is a mindfulness and personal development
											company founded by{" "}
											<Link
												to="https://www.linkedin.com/in/tshepo-matlou-b5357969/"
												className="text-accent font-medium hover:text-accent/80 underline decoration-accent/30 hover:decoration-accent/60 transition-all duration-200"
												target="_blank"
												rel="noopener noreferrer"
											>
												Tshepo Matlou
											</Link>
											, offering integrated experiences designed to foster
											mental well-being, self-improvement, life coaching and
											trauma healing.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 group">
									<div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
										<TreePineIcon className="w-6 h-6 text-secondary" />
									</div>
									<div className="flex-1">
										<p className="text-gray-700 leading-relaxed">
											Through hikes, workshops, coaching sessions, and retreats,
											individuals, couples and groups engage in tailored
											programs to cultivate clarity, emotional balance, and
											resilience.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 group">
									<div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
										<SproutIcon className="w-6 h-6 text-secondary" />
									</div>
									<div className="flex-1">
										<p className="text-gray-700 leading-relaxed">
											Whether you're navigating a life transition, looking to
											deepen your self-awareness, or seeking tools to manage
											stress, we provide the support and guidance you need.
										</p>
									</div>
								</div>
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
							<div className="w-[30rem] h-[30rem]">
								<img
									className="w-full h-full rounded-full object-cover"
									alt="A Sanctuary for Mind, Body & Spirit"
									src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1751213881/sanctuary01_z55wec.jpg"
								/>
							</div>
						</div>
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
										src="/images/tshepo-matlou.jpg"
										alt="Tshepo Matlou - Mindfulness coach and leadership mentor"
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
										loading="lazy"
									/>
								</div>
							</div>
							<div className="flex flex-col space-y-6 lg:pr-8">
								<Header
									title="Meet the Guide Behind Freedom 27"
									subTitile="Meet Tshepo Matlou"
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
				{/* <Carousel /> */}
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
										Start your wellness journey today.
									</h1>
									<p className="text-base text-center max-w-2xl">
										Take the first step toward clarity, balance, and freedom.
									</p>
								</div>
								<Link
									to="/shop"
									className="border border-white px-3 py-3 text-white"
								>
									Book a Session
								</Link>
							</div>
						}
					/>
				</section>
			</div>
		</MainLayout>
	);
}

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
			img: "/images/retreats.jpg",
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
				<section className="flex flex-col w-full justify-center items-center px-5 lg:px-24">
					<div className="flex-col space-y-14">
						<Header
							title="What is Freedom 27?"
							titleStyle="text-primary"
							subTitile="A Sanctuary for Mind, Body & Spirit"
						/>
						<div className="space-y-7">
							<div className="flex flex-row items-start space-x-2">
								<HeartHandshakeIcon className="text-secondary" />
								<p className="lg:w-3/5 w-[90%] text-left">
									Freedom 27 is a mindfulness and personal development company
									founded by{" "}
									<span className="text-accent font-medium hover:underline">
										<Link to="/about-us">Tshepo Matlou</Link>
									</span>
									, offering integrated experiences designed to foster mental
									well-being, self-improvement, life coaching and trauma
									healing.
								</p>
							</div>
							<div className="flex flex-row items-start space-x-2">
								<TreePineIcon className="text-secondary" />
								<p className="lg:w-3/5 w-[90%] text-left">
									Through hikes, workshops, coaching sessions, and retreats.
									Individuals, couples and groups engage in tailored programs to
									cultivate clarity, emotional balance, and resilience.
								</p>
							</div>
							<div className="flex flex-row items-start space-x-2">
								<SproutIcon className="text-secondary" />
								<p className="lg:w-3/5 w-[90%] text-left">
									Whether you're navigating a life transition, looking to deepen
									your self-awareness, or seeking tools to manage stress.
								</p>
							</div>
						</div>

						<div>
							<Link
								to="/about-us"
								className="border border-primary px-3 py-3 text-primary"
							>
								Learn More
							</Link>
						</div>
					</div>
					<div className="h-[30%] w-[30%] hidden sm:block">
						<img
							className="w-full h-full"
							alt="A Sanctuary for Mind, Body & Spirit"
							src="/images/what-is-freedom.jpg"
						/>
					</div>
				</section>
				<section className="flex flex-col w-full justify-center items-center px-5 sm:px-24 bg-gray-50 py-20 space-y-16">
					<Header
						title="Offerings & Programs"
						titleStyle="text-primary"
						subTitile="Wellness Experiences to Support Every Journey"
						containerStyle="items-center justify-center"
						subTitileStyle="text-center"
					/>
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
					<div className="flex sm:flex-row flex-col items-center sm:space-x-3 space-y-3">
						<p>
							No matter your starting point, there’s a gentle, supportive space
							waiting for you.
						</p>
						<Link to="/mindfulness" className="text-primary underline">
							Explore Our Programs
						</Link>
					</div>
				</section>
				<Shop showAll={false} containerStyle="space-y-10" />
				<section className="flex flex-col w-full justify-center items-center px-5 sm:px-24 space-y-10">
					<Header
						title="Our Trusted Partners"
						subTitile=""
						titleStyle="text-primary"
					/>

					<LogoCarousel logos={affiliates} />
				</section>
				<HorizontalImageBackground
					image="/images/peace.jpg"
					alt="peace"
					containerStyle="sm:h-[30vh] h-[40vh]"
					children={
						<div className="flex flex-col space-y-5 justify-center items-center">
							<Header
								title="Start your wellness journey today."
								titleStyle="text-white text-center"
								subTitile="Take the first step toward clarity, balance, and freedom."
								subTitileStyle="text-center"
							/>
							<Link
								to="/about-us"
								className="border border-white px-3 py-3 text-white"
							>
								Book a Session
							</Link>
						</div>
					}
				/>
			</div>
		</MainLayout>
	);
}

import type { MetaFunction } from "@remix-run/node";
import {
	ArrowBigLeft,
	ArrowRightIcon,
	ChevronDown,
	HandHeartIcon,
	HeartHandshakeIcon,
	SproutIcon,
	TreePalmIcon,
	TreePineIcon,
} from "lucide-react";
import MainLayout from "~/components/layout/main";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Freedom27" },
		{
			name: "description",
			content:
				"Freedom 27 is a mindfulness and personal development initiative founded by Tshepo Matlou, offering integrated experiences designed to foster mental well-being, self-improvement, life coaching and trauma healing. Through hikes, workshops, coaching sessions, and retreats. Individuals, couples and groups engage in tailored programs to cultivate clarity, emotional balance, and resilience.",
		},
	];
};

export default function Index() {
	const words = ["Heal.", "Grow.", "Thrive."];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.3,
			},
		},
	};

	const wordVariants = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const subtitleVariants = {
		hidden: {
			opacity: 0,
			y: 30,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
				delay: 2.6, // After heading animation completes
			},
		},
	};

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
			img: "/images/hike01.jpg",
			description:
				"Immersive sessions focused on mindset, healing, emotional intelligence, and mental clarity.",
		},
		{
			label: "Coaching for Individuals & Couples",
			img: "/images/hike01.jpg",
			description:
				"One-on-one or couples coaching focused on emotional healing, life alignment, and practical wellness tools.",
		},
		{
			label: "Retreats",
			img: "/images/hike01.jpg",
			description:
				"3-day intensive healing and mindfulness retreats that offer space for deep transformation.",
		},
		{
			label: "Breakfast & Networking Sessions",
			img: "/images/hike01.jpg",
			description:
				"A casual space to learn mindfulness tools, build community, and align your purpose.",
		},
	];

	return (
		<MainLayout>
			<div className="flex flex-col space-y-16">
				<div className="relative w-full h-[70vh]">
					<img
						src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1749658075/hero-2_karkjm.jpg"
						alt="hero"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-30"></div>

					<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
						<div className="text-center max-w-3xl mx-auto">
							<motion.h1
								className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{words.map((word, index) => (
									<motion.span
										key={index}
										variants={wordVariants}
										className="inline-block mr-4"
									>
										{word}
									</motion.span>
								))}
							</motion.h1>

							<motion.p
								className="text-xl md:text-2xl mb-8"
								variants={subtitleVariants}
								initial="hidden"
								animate="visible"
							>
								A wellness journey rooted in mindfulness, self-awareness, and
								inner freedom.
							</motion.p>
						</div>

						<motion.div
							className="absolute bottom-8"
							variants={arrowVariants}
							initial="hidden"
							animate="visible"
						>
							<motion.div
								animate={{ y: [0, 10, 0] }}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
								className="w-20 h-20 flex justify-center items-center bg-white/20 rounded-full"
							>
								<ChevronDown size={36} />
							</motion.div>
						</motion.div>
					</div>
				</div>
				<section className="flex flex-row w-full justify-center items-center px-24">
					<div className="flex-col space-y-14">
						<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-primary">
							A Sanctuary for Mind, Body & Spirit
						</h1>
						<div className="space-y-7">
							<div className="flex flex-row items-start space-x-2">
								<HeartHandshakeIcon className="text-secondary" />
								<p className="w-3/5 text-left">
									Freedom 27 is a mindfulness and personal development
									initiative founded by{" "}
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
								<p className="w-3/5 text-left">
									Through hikes, workshops, coaching sessions, and retreats.
									Individuals, couples and groups engage in tailored programs to
									cultivate clarity, emotional balance, and resilience.
								</p>
							</div>
							<div className="flex flex-row items-start space-x-2">
								<SproutIcon className="text-secondary" />
								<p className="w-3/5 text-left">
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
					<div className="h-3/4 w-3/6">
						<img
							className="w-full h-full rounded-xl"
							alt="balance"
							src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1749658266/Group_39570_fx3msj.jpg"
						/>
					</div>
				</section>
				<section className="flex flex-col w-full justify-center items-center px-24 bg-blue-100 py-20">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-primary">
						Wellness Experiences to Support Every Journey
					</h1>

					<div className="grid grid-cols-3 gap-3">
						{programs.map((prog, index) => (
							<div key={index}>
								<img src={prog.img} alt={prog.label} className="h-80 w-80" />
								<p>{prog.label}</p>
								<p>{prog.description}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</MainLayout>
	);
}

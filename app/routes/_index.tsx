import type { MetaFunction } from "@remix-run/node";
import {
	ArrowBigLeft,
	ArrowRightIcon,
	ChevronDown,
	HandHeartIcon,
	HeartHandshakeIcon,
	MinusCircleIcon,
	PlusCircleIcon,
	SproutIcon,
	TreePalmIcon,
	TreePineIcon,
} from "lucide-react";
import MainLayout from "~/components/layout/main";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import HorizontalImageBackground from "~/components/layout/horizontal-image-bg";
import Header from "~/components/text/header";

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

	const shop = [
		{
			image: "/images/book.svg",
			product: "Freedom - Pursuit of Liberty",
			description:
				"A gentle guide to letting go, healing past wounds, and finding inner balance — through self-awareness, mindset shifts, and mindful living.",
			price: "R 350.00",
		},
		{
			image: "/images/book.svg",
			product: "One on One Life Coaching",
			description:
				"Personalized sessions to support your growth, clarity, and emotional well-being — guided by compassionate listening and transformative tools.",
			price: "R 350.00",
		},
		{
			image: "/images/book.svg",
			product: "Couples session",
			description:
				"Strengthen connection, communication, and emotional harmony in your relationship through mindful, heart-centered guidance.",
			price: "R 350.00",
		},
		{
			image: "/images/book.svg",
			product: "Breath & Meditation Course",
			description:
				"Learn powerful yet simple breathing and meditation techniques to reduce stress, improve focus, and restore inner calm — at your own pace.",
			price: "R 350.00",
		},
		{
			image: "/images/book.svg",
			product: "Advanced Breathwork & Energy",
			description:
				"Deepen your energetic awareness through advanced pranayama, mudras, and bandhas. Ideal for practitioners and those ready to explore the subtle body.",
			price: "R 350.00",
		},
	];

	return (
		<MainLayout>
			<div className="flex flex-col space-y-24">
				<HorizontalImageBackground
					image="https://res.cloudinary.com/dg1g6ctku/image/upload/v1749658075/hero-2_karkjm.jpg"
					alt="hero"
					containerStyle="h-[70vh]"
					children={
						<>
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
						</>
					}
				/>
				<section className="flex flex-row w-full justify-center items-center px-24">
					<div className="flex-col space-y-14">
						<Header
							title="What is Freedom 27?"
							titleStyle="text-primary"
							subTitile="A Sanctuary for Mind, Body & Spirit"
						/>
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
							className="w-full h-full"
							alt="balance"
							src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1749658266/Group_39570_fx3msj.jpg"
						/>
					</div>
				</section>
				<section className="flex flex-col w-full justify-center items-center px-24 bg-blue-100 py-20 space-y-16">
					<Header
						title="Offerings & Programs"
						titleStyle="text-primary"
						subTitile="Wellness Experiences to Support Every Journey"
						containerStyle="items-center justify-center"
					/>
					<div className="grid grid-cols-3 gap-10">
						{programs.map((prog, index) => (
							<div
								className="w-[20rem] h-[20rem] relative group cursor-pointer"
								key={index}
							>
								<div className="absolute w-full h-full overflow-hidden">
									<img
										src={prog.img}
										alt={prog.img}
										className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
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
					<div className="flex items-center space-x-3">
						<p>
							No matter your starting point, there’s a gentle, supportive space
							waiting for you.
						</p>
						<Link to="/mindfulness" className="text-primary underline">
							Explore Our Programs
						</Link>
					</div>
				</section>
				<section className="flex flex-col w-full justify-start items-start px-24 space-y-10">
					<Header
						title="BREATHING, MEDITATION, ENERGY, PRANAYAMA"
						subTitile="Online Courses and Private Coaching"
						titleStyle="text-primary"
					/>
					<div className="flex flex-row justify-between items-center">
						<div className="flex flex-col space-y-5 w-[50%]">
							<p>
								<span className="text-primary font-medium">
									LEVEL 1 + 2 COURSES:
								</span>{" "}
								Our online trainings will provide your with a deeper
								understanding as well as practical techniques for integration.
							</p>
							<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
								<li>Self-paced, online learning from anywhere in the world</li>
								<li>
									Each level consists of 5 modules with extra bonus material in
									each module
								</li>
								<li>
									Self-study material includes: PDF downloads, video tutorials,
									links to external sources, specific home practice techniques,
									extra recommended reading
								</li>
								<li>Private live online Q/A mentoring sessions included</li>
								<li>Suggested-frame is 2-3 hours self-study per week</li>
								<li>
									Level 1 can be done in 6 weeks | Level 1 + 2 together can be
									done in 3 months
								</li>
								<li>
									There are techniques you will learn to practice after each
									module, as well as an assignment at the end
								</li>
								<li>
									If you need to refer back to anything, or do a refresher, the
									course material will be available to you for 12 months
								</li>
							</ul>
						</div>

						<div className="h-[40%] w-[40%]">
							<img
								src="/images/yoga.jpg"
								alt="course"
								className="w-full h-full object-fill"
							/>
						</div>
					</div>

					<div>
						<Link
							to="/courses"
							className="border border-primary px-3 py-3 text-primary"
						>
							Explore Courses
						</Link>
					</div>
				</section>
				<section className="flex flex-col w-full justify-between items-center space-y-10 px-24">
					<Header
						title="Shop"
						subTitile="Holistic Offerings for Healing and Clarity"
						titleStyle="text-primary"
						containerStyle="items-center justify-center"
					/>
					<div className="grid grid-cols-3 gap-5">
						{shop.map((prod, index) => (
							<div
								className="flex flex-col justify-center items-center space-y-4 border border-slate-200 py-4"
								key={index}
							>
								<img
									src={prod.image}
									alt={prod.product}
									className="w-52 h-52 object-fill"
								/>
								<div className="flex flex-col space-y-3 p-4">
									<p className="font-medium text-accent">{prod.product}</p>
									<p className="text-xs text-gray-400">{prod.description}</p>
									<p className="text-lg text-accent">{prod.price}</p>
									<div className="flex flex-row justify-between items-center">
										<div className="flex flex-row items-center space-x-4">
											<MinusCircleIcon size={20} />
											<div className="flex h-6 w-6 border justify-center items-center border-primary/50">
												<p>1</p>
											</div>
											<PlusCircleIcon size={20} />
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
				<HorizontalImageBackground
					image="/images/peace.jpg"
					alt="peace"
					containerStyle="h-[40vh]"
					children={
						<div className="flex flex-col space-y-5 justify-center items-center">
							<Header
								title="Start your wellness journey today."
								titleStyle="text-white"
								subTitile="Take the first step toward clarity, balance, and freedom."
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

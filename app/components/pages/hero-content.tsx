import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";

export function Hero1() {
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
				delay: 2.6,
			},
		},
	};

	return (
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
						className="inline-block mr-4 text-white"
					>
						{word}
					</motion.span>
				))}
			</motion.h1>

			<motion.p
				className="text-xl md:text-2xl mb-8 text-white"
				variants={subtitleVariants}
				initial="hidden"
				animate="visible"
			>
				A wellness journey rooted in mindfulness, self-awareness, coaching and
				inner freedom.
			</motion.p>
		</div>
	);
}

export function Hero2() {
	return (
		<div className="">
			<div className="flex flex-row items-center justify-center">
				<div className="w-[45vh]  flex flex-col p-8">
					<img src="/images/book.svg" alt="book" className="object-contain" />
				</div>
				<div className="w-1/2 flex flex-col space-y-12 p-8">
					<div className="space-y-5">
						<p className="text-5xl w-[80%] font-medium text-white">
							Freedom - Pursuit of Liberty
						</p>
						<p className="text-base font-light text-white w-[80%]">
							Discover the strength in surrender. This book guides you through
							healing old wounds, embracing change, and finding peace through
							mindfulness and self-awareness.
						</p>
					</div>

					<div className="flex flex-row justify-between items-center">
						<button className="flex flex-row items-center space-x-2 justify-center border border-white w-36 h-10 p-1">
							<p className="text-white">Buy</p>
							<div className="w-px h-4 bg-white" />
							<p className="text-base text-white">R 350.00</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export function Hero3() {
	return (
		<div className="flex flex-col space-y-6 items-center justify-center rounded-xl p-8 mt-10 text-white">
			<p className="text-5xl font-semibold">Looking for a Coach?</p>
			<p className="text-sm w-[80%] text-center">
				Get personalized support on your journey to freedom and inner peace.
				Work 1-on-1 with a coach to heal, grow, and move forward with intention.
			</p>
			<Link
				to="/shop"
				className="flex items-center justify-center border border-white w-48 h-10 p-2"
			>
				<p className="text-white text-sm">Book a Session</p>
			</Link>
		</div>
	);
}

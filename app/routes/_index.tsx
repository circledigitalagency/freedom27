import type { MetaFunction } from "@remix-run/node";
import MainLayout from "~/components/layout/main";
import HeroVideo from "~/components/video/hero";

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
	return (
		<MainLayout>
			<div className="flex flex-col space-y-16">
				<div className="flex h-[60vh] w-full border border-l-0 border-r-0 border-[#C6C7A4]">
					{/* <HeroVideo
						videoSrc="/video/sunset.mp4"
						fallbackImageSrc=""
						height="60vh"
					/> */}

					<img
						src="/images/hero.jpg"
						alt="hero"
						className="w-1/2 object-fill"
					/>

					<p className="text-2xl text-orange-500">hello</p>
				</div>
			</div>
		</MainLayout>
	);
}

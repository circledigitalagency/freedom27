import { Link } from "@remix-run/react";
import { Trees } from "lucide-react";
import MainLayout from "~/components/layout/main";
import ButtonLink from "~/components/link/button-link";

export default function Page() {
	const approach = [
		{
			id: 1,
			img: "/images/mental-clarity.jpg",
			title: "Mental clarity techniques",
			subheading: "Focus sessions & Limiting belief reprogramming",
		},
		{
			id: 2,
			img: "/images/trauma-healing.jpg",
			title: "Stress and trauma healing",
			subheading: "Forgiveness & Emotional release",
		},
		{
			id: 3,
			img: "/images/growth-strategies.jpg",
			title: "Personal growth strategies",
			subheading: "Goal setting, Motivation & Gratitude",
		},
		{
			id: 4,
			img: "/images/subconscious-healing.jpg",
			title: "Subconscious mind coaching",
			subheading: "Undersding patterns and triggers",
		},
		{
			id: 5,
			img: "/images/mental-health.jpg",
			title: "Mental health awareness",
			subheading: "Trauma release & Self-awareness",
		},
	];

	const experiences = [
		{
			id: 1,
			icon: "/images/hikes.png",
			label: "Hikes & Outdoor Mindfulness Experiences",
			value: [
				"Guided hikes with intention-setting, breathing exercises, and focus techniques",
				"Group discussions on mindfulness, resilience, and emotional well-being",
			],
			takeaways:
				"Stress reduction, clarity, physical wellness, emotional grounding",
		},
		{
			id: 2,
			icon: "/images/workshop.png",
			label: "1-Day Workshop",
			value: [
				"A deep dive into mindfulness, personal growth, and self-awareness",
				"Gratitude practices, limiting beliefs, motivation, trauma healing",
			],
			takeaways:
				"Mental resilience, stress management tools, personal goal setting",
		},
		{
			id: 3,
			icon: "/images/1day-group-session.png",
			label: "1-Day Group Session(Camp or On-site)",
			value: [
				"Mindfulness training, group coaching, focus exercises, trauma release",
				"Outdoor setting for relaxation and immersive learning",
			],
			takeaways:
				"Emotional clarity, improved concentration, relaxation techniques",
		},
		{
			id: 4,
			icon: "/images/2day-group-session.png",
			label: "2-Day Group Session(Camp or On-site)",
			value: [
				"Day 1: Mindfulness & Emotional Release",
				"Day 2: Behavioral Coaching & Practical Application",
				"Yoga, guided meditations, group discussions",
			],
			takeaways:
				"Self-awareness, emotional intelligence, practical mental health tools",
		},
		{
			id: 5,
			icon: "/images/retreat.png",
			label: "3-Day individual or Group (Retreat Experience)",
			value: [
				"In-depth self-discovery, subconscious reprogramming, group coaching",
				"Personalized coaching sessions with Tshepo Matlou and experienced mindfulness experts",
			],
			takeaways: "Healing, clarity, strategic life transformation",
		},
		{
			id: 6,
			icon: "/images/networking.png",
			label: "Breakfast & Networking Sessions",
			value: [
				"A more casual but impactful coaching environment",
				"Mindfulness for business leaders, stress management, mental clarity",
			],
			takeaways:
				"Professional and personal alignment, motivation, leadership growth",
		},
		{
			id: 7,
			icon: "/images/masterclasses.png",
			label: "Masterclasses & Specialized Trainings",
			value: [
				"A more casual but impactful coaching environment",
				"Mindfulness for business leaders, stress management, mental clarity",
			],
			takeaways:
				"Focused on mindset reprogramming, trauma healing, leadership coaching, and behavioural training",
		},
	];

	return (
		<MainLayout>
			<div className="relative w-full h-[70vh]">
				<img
					src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1749988987/aaron-burden-dXYE1d08BiY-unsplash_jzz2z7.jpg"
					alt="hero"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-30"></div>
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
			</div>

			<div className="flex flex-col w-full px-32 py-20">
				<section className="flex flex-col w-full justify-center items-start space-y-6 py-10">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
						What Is Mindfulness?
					</h1>

					<p>
						Mindfulness is a conscious practice of being fully present in mind,
						body, and spirit. At Freedom 27, we guide individuals to observe
						without judgment, release inner noise, and return to their breath as
						an anchor.
					</p>
					<p className="font-medium">The Gifts of Mindfulness:</p>
					<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
						<li>Cultivates emotional balance</li>
						<li>Improves clarity and decision-making</li>
						<li>Enhances resilience during stress</li>
						<li>Deepens self-awareness</li>
					</ul>
				</section>
			</div>
			<section className="flex flex-col justify-center items-center bg-blue-100 w-full h-[60vh]">
				<section className="flex flex-col w-full justify-center items-center space-y-8 py-10">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
						Our Approach
					</h1>

					<div className="grid grid-cols-5 gap-10">
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

				<div className="flex items-center space-x-2">
					<p>Want personal guidance in mindfulness?</p>
					<Link to="" className="text-primary underline">
						Book a session
					</Link>
				</div>
			</section>
			<div className="flex flex-col w-full px-32 py-20">
				<section className="flex flex-col w-full justify-center items-center space-y-10 py-20">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
						Experiences We Integrate
					</h1>

					<div className="grid grid-cols-3 gap-20">
						{experiences.map((exp, index) => (
							<div
								className="flex flex-col justify-center items-start space-y-5 p-6 w-[25rem] h-[25rem] border border-accent"
								key={index}
							>
								<div className="flex gap-2 items-center">
									<img src={exp.icon} alt={exp.icon} className="w-16 h-16" />
									<p className="text-accent">{exp.label}</p>
								</div>
								<div className="space-y-4 h-36 content-center">
									{exp.value.map((val, index) => (
										<ul
											className="list-disc flex flex-col gap-4 px-5 text-sm"
											key={index}
										>
											<li>{val}</li>
										</ul>
									))}
								</div>
								<div className="flex flex-col space-y-2">
									<p className="text-secondary text-sm">Takeaways</p>
									<p className="text-sm">{exp.takeaways}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
			<section className="flex flex-col space-y-8 justify-center items-center bg-blue-100 w-full h-72">
				<h1 className="text-2xl font-medium text-primary">
					Create Space for Yourself
				</h1>
				<p className="w-[50%] text-center text-accent">
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

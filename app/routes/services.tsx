import MainLayout from "~/components/layout/main";
import { Link } from "@remix-run/react";
import ButtonLink from "~/components/link/button-link";
import { approach, experiences } from "~/lib/data";
import HorizontalImageBackground from "~/components/layout/horizontal-image-bg";
import Header from "~/components/text/header";
import { useState } from "react";
import {
	Brain,
	Check,
	Compass,
	RefreshCw,
	Users,
	Search,
	Target,
	MessageSquare,
	Cog,
	Globe,
	type LucideIcon,
} from "lucide-react"
import { cn } from "~/lib/utils";

export interface ServiceCategory {
	title: string
	description: string
	items: string[]
	icon: LucideIcon
	color: string
}

export const servicesData: ServiceCategory[] = [
	{
		title: "Mindfulness & Workplace Wellbeing",
		description:
			"Equip your people with practical tools to stay grounded, focused, and energised even in high-pressure environments.",
		items: [
			"Stress management workshops",
			"Resilience and wellness sessions",
			"Focus and clarity training",
			"Burnout prevention support",
			"Emotional regulation tools",
			"Meditation and Mindfulness",
		],
		icon: Brain,
		color: "#8AB63F"
	},
	{
		title: "Leadership Development & Coaching",
		description:
			"Develop leaders who inspire trust, navigate complexity, and drive meaningful results across every level.",
		items: [
			"Improve decision-making clarity",
			"Build executive presence",
			"Lead with emotional intelligence",
			"Manage conflict constructively",
			"Strengthen accountability",
			"Strategy facilitation",
		],
		icon: Compass,
		color: "#E8B930"
	},
	{
		title: "Change Management & Transition Support",
		description:
			"Support your organisation through change with clarity, compassion, and a structured approach that keeps people on board.",
		items: [
			"Change readiness & resilience",
			"Emotional response to change",
			"Leadership alignment during restructuring",
			"Communication clarity during transitions",
			"Managing uncertainty and morale",
			"Personal responsibility and accountability",
		],
		icon: RefreshCw,
		color: "#E87030"
	},
	{
		title: "Team Cohesion & Alignment",
		description:
			"Build teams that communicate openly, trust each other deeply, and align around shared goals.",
		items: [
			"Role clarity and expectations",
			"Cross-functional alignment",
			"Psychological safety",
			"Trust rebuilding",
			"Team emotional intelligence",
			"Strategy cascading, KPI aligned",
		],
		icon: Users,
		color: "#3498DB"
	},
]

const steps = [
	{
		number: "01",
		title: "Diagnose",
		description:
			"We begin by understanding the real challenge, not just the symptoms through structured conversations and contextual insight.",
		icon: Search,
		color: "from-[#8AB63F] to-[#6B9A2A]",
		bgAccent: "bg-[#8AB63F]",
		textAccent: "text-[#8AB63F]",
		borderAccent: "border-[#8AB63F]",
	},
	{
		number: "02",
		title: "Align",
		description:
			"We create clarity around expectations, behaviours, communication, and outcomes to ensure leaders and teams move in the same direction.",
		icon: Target,
		color: "from-[#E8B930] to-[#D4A520]",
		bgAccent: "bg-[#E8B930]",
		textAccent: "text-[#E8B930]",
		borderAccent: "border-[#E8B930]",
	},
	{
		number: "03",
		title: "Facilitate",
		description:
			"Through executive coaching, team sessions, mindfulness, and structured interventions, we guide meaningful reflection and behavioural development.",
		icon: MessageSquare,
		color: "from-[#E87030] to-[#D45F20]",
		bgAccent: "bg-[#E87030]",
		textAccent: "text-[#E87030]",
		borderAccent: "border-[#E87030]",
	},
	{
		number: "04",
		title: "Embed",
		description:
			"We translate insight into practical action, accountability, and measurable commitments.",
		icon: Cog,
		color: "from-[#9B59B6] to-[#7D3C98]",
		bgAccent: "bg-[#9B59B6]",
		textAccent: "text-[#9B59B6]",
		borderAccent: "border-[#9B59B6]",
	},
	{
		number: "05",
		title: "Sustain",
		description:
			"We provide ongoing support to reinforce change and ensure long-term impact.",
		icon: Globe,
		color: "from-[#3498DB] to-[#2176AE]",
		bgAccent: "bg-[#3498DB]",
		textAccent: "text-[#3498DB]",
		borderAccent: "border-[#3498DB]",
	},
]


export default function Page() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [activeStep, setActiveStep] = useState(0)
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
			<section className="sm:px-24 px-5 py-28 space-y-20">
				<Header
					title="How We Support Organisations"
					subTitile="Our work focuses on strengthening individuals, leaders and teams so organisations can navigate complexity, change and growth with clarity."
					titleStyle="text-primary"
					subTitileStyle="w-[70%]"
				/>
				{/* Service block */}
				<div className="mx-auto">


					{/* Tab navigation */}
					{/* <div className="flex flex-wrap gap-3 mb-12">
						{servicesData.map((service, i) => {
							const Icon = service.icon
							return (
								<button
									key={i}
									onClick={() => setActiveIndex(i)}
									className={cn(
										"group flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer",
										activeIndex === i
											? "border-primary bg-primary text-primary-foreground shadow-md"
											: "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
									)}
								>
									<Icon
										className={cn(
											"h-4 w-4 transition-colors",
											activeIndex === i
												? "text-white"
												: "text-muted-foreground group-hover:text-accent"
										)}
									/>
									<span className={cn(
										"hidden sm:inline ",
										activeIndex == i ? "text-white" : "text-muted-foreground")}>{service.title}</span>
									<span className="sm:hidden">{service.title.split(" ")[0]}</span>
								</button>
							)
						})}
					</div> */}
					<div className="grid grid-cols-4 gap-4 mb-12">
						{servicesData.map((service, i) => {
							const Icon = service.icon
							return (
								<button
									key={i}
									onClick={() => setActiveIndex(i)}
									className={cn(
										"group relative flex flex-col items-start gap-4 rounded-xl border p-6 text-left transition-all duration-300 cursor-pointer",
										activeIndex === i
											? `border-[${service.color}] shadow-sm`
											: "border-border hover:border-accent/30 hover:shadow-sm"
									)}
									style={activeIndex === i ? { backgroundColor: `${service.color}33` } : undefined}
								>


									<div className="flex items-center space-x-4">
										<div
											className={cn(
												"flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
												activeIndex === i
													? `bg-[${service.color}] text-white`
													: "bg-primary/10 text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent"
											)}
										>
											<Icon className="h-5 w-5" />
										</div>
										<h4
											className={cn(
												"text-sm font-semibold leading-snug transition-colors",
												activeIndex === i
													? "text-foreground"
													: "text-foreground/80"
											)}
										>
											{service.title}
										</h4>
									</div>

									{/* Active indicator */}
									{activeIndex === i && (
										<span className={cn(
											"absolute right-4 top-4 h-2 w-2 rounded-full",
											`bg-[${service.color}]`
										)} />
									)}
								</button>
							)
						})}
					</div>

					{/* Active card */}
					<div className="">
						{/* Left: description + items */}
						<div className="space-y-8">
							<div className="space-y-4">
								<h3 className={cn(
									"text-2xl font-semibold tracking-tight",
									`text-[${servicesData[activeIndex].color}]`
								)}>
									{servicesData[activeIndex].title}
								</h3>
								<p className="text-base leading-relaxed text-muted-foreground">
									{servicesData[activeIndex].description}
								</p>
							</div>

							<ul className="space-y-4">
								{servicesData[activeIndex].items.map((item, j) => (
									<li
										key={j}
										className="flex items-start gap-3 text-foreground"
										style={{
											animationDelay: `${j * 60}ms`,
											animation: "fadeInUp 0.4s ease-out both",
										}}
									>
										<span style={{ backgroundColor: `${servicesData[activeIndex].color}33` }} className={cn(
											"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
										)}>
											<Check className={cn(
												"h-3.5 w-3.5",
												`text-[${servicesData[activeIndex].color}]`
											)} />
										</span>
										<span className="text-sm leading-relaxed lg:text-base">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Keyframe for staggered list animation */}
				<style>{`
@keyframes fadeInUp {
from {
opacity: 0;
transform: translateY(8px);
}
to {
opacity: 1;
transform: translateY(0);
}
}
`}</style>

			</section>
			<section className="flex flex-col sm:justify-center justify-start bg-gray-50 w-full sm:px-24 px-5 py-28 h-fit">
				<Header
					title="Personal Transformation Areas"

				/>
				<div className="grid lg:grid-cols-5 gap-10">
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
			<section className="sm:px-24 px-5 py-28 ">
				<Header
					title="Our Approach"
					subTitile="Our five-stage model framework allows us to provide support through one cohesive and structured methodology. "
				/>
				{/* Active step detail */}
				<div className="items-start">
					<div className="grid grid-cols-3 gap-12">
						{steps.map((step, index) => (
							<div className="space-y-8" key={index}>
								<div
									key={index}
									className="space-y-6"
									style={{ animation: "fadeInUp 0.4s ease-out both" }}
								>
									<div className="flex items-center gap-4">
										<div
											className={cn(
												"flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br",
												step.color
											)}
										>
											{(() => {
												const Icon = step.icon
												return <Icon className="h-7 w-7 text-white" />
											})()}
										</div>
										<div>
											<p className={cn("text-xs font-bold uppercase tracking-widest", step.textAccent)}>
												Step {step.number}
											</p>
											<h3 className="text-2xl text-black">
												{step.title}
											</h3>
										</div>
									</div>

									<p className="text-base leading-relaxed text-black/70 max-w-xl">
										{step.description}
									</p>

									{/* Connector line to next step */}
									{activeStep < steps.length - 1 && (
										<span className="h-px w-8 bg-black/20 transition-all group-hover:w-12 group-hover:bg-black/40" />
									)}
								</div>
							</div>
						))}
					</div>


				</div>

			</section>
			<section className="py-16 lg:py-16 bg-primary/5">
				<div className="flex flex-col space-y-5 justify-center items-center">
					<div className={"text-primary"}>
						<h1 className="text-2xl lg:text-3xl font-semibold mb-2 text-center">
							Ready to Begin Meaningful Change?
						</h1>
						<p className="text-base text-center max-w-2xl">
							Whether you’re navigating personal growth, leadership challenges, or organisational change, our work creates space for clarity, regulation and meaningful progress.
						</p>
					</div>

					<div className="flex flex-row space-x-8 items-center">
						<Link
							to="mailto:breakfree@freedom27.co.za"
							className="border bg-primary border-primary px-3 py-3 text-white"
						>
							Discuss Your Organisation’s Needs
						</Link>
						<Link
							to="mailto:breakfree@freedom27.co.za"
							className="border border-primary px-3 py-3 text-primary"
						>
							Explore One-on-One Support
						</Link>

					</div>
				</div>
			</section>
		</MainLayout>
	);
}

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
	ArrowRight,
	ChevronDown,
	Download,
	Eye,
	Mail,
	MapPin,
	Menu,
	MessageCircle,
	Phone,
	Plus,
	Star,
	Target,
	X,
	Briefcase,
	Building2,
	Landmark,
	Microscope,
	MessageCircleQuestion,
} from "lucide-react";
import LogoCarousel from "~/components/carousel/partners";
import { affiliates } from "~/lib/data";
import Logo from "~/components/layout/logo";

/* ------------------------------------------------------------------ */
/* CONFIG — no form, no server action, nothing for bots to submit to   */
/* ------------------------------------------------------------------ */

// Assembled in the browser so the address isn't in the server HTML for scrapers
const EMAIL_USER = "tshepo";
const EMAIL_DOMAIN = "freedom27.co.za";
const PHONE_DISPLAY = "083 784 8001";
const PHONE_TEL = "+27837848001";
// Confirm this number is on WhatsApp before going live
const WHATSAPP_NUMBER = "27837848001";
// Put the PDF in /public with this name
const COMPANY_PROFILE_URL =
	"https://res.cloudinary.com/dfxorvtuc/image/upload/v1795117340/Freedom27_Business_Profile_1_egeq4x.pdf";
const HERO_IMAGE =
	"https://res.cloudinary.com/dfxorvtuc/image/upload/v1794995393/Workplace_Leaders_Photo_imrd5z.jpg";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
	"Hi Freedom 27, I'd like to request a discovery call.",
)}`;

function useEmail() {
	const [email, setEmail] = useState<string | null>(null);
	useEffect(() => setEmail(`${EMAIL_USER}@${EMAIL_DOMAIN}`), []);

	const mailto = (area?: string) => {
		if (!email) return "#contact";
		if (!area) return `mailto:${email}`;
		const subject = `Discovery Call Request – ${area}`;
		const body = [
			"Full name:",
			"Organisation:",
			"Phone number (optional):",
			`Area of interest: ${area}`,
			"",
			"Brief description of your needs:",
			"",
			"",
		].join("\n");
		return `mailto:${email}?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`;
	};

	return { email, mailto };
}

/* ------------------------------------------------------------------ */
/* CONTENT                                                             */
/* ------------------------------------------------------------------ */

const coreServices = [
	{
		number: "01",
		title: "Workplace Wellbeing",
		description:
			"Support employees and managers with practical learning and conversations about wellbeing, pressure and healthier working habits.",
	},
	{
		number: "02",
		title: "Leadership Coaching",
		description:
			"Help leaders understand themselves, navigate demanding situations and lead with greater clarity and accountability.",
	},
	{
		number: "03",
		title: "Team Effectiveness",
		description:
			"Help teams address tension, strengthen trust and agree more effective ways of working together.",
	},
];

const orgServices = [
	{
		number: "04",
		title: "Change Management & Transition",
		description:
			"Guiding organisations and people through transformation with confidence.",
	},
	{
		number: "05",
		title: "Strategy Facilitation & Performance",
		description: "Aligning strategy, teams, and KPIs for measurable outcomes.",
	},
	{
		number: "06",
		title: "6 Talent & Psychometric Assessments",
		description:
			"Supporting informed talent decisions, leadership development and employee growth through scientifically validated assessments.",
	},
];

const programmes = [
	{
		title: "Workplace Wellbeing Programme",
		description:
			"A planned series of workshops, facilitated conversations and practical activities for employees and managers. Content can align with your existing employee support arrangements.",
		cta: "Plan a Wellbeing Programme",
		area: "Workplace Wellbeing",
		image:
			"https://res.cloudinary.com/dfxorvtuc/image/upload/v1794995453/Workplace_Wellbeing_Photo_2_n1r0uw.jpg", // add image URL
		tint: "bg-[#CDE6F1]",
	},
	{
		title: "Leadership Coaching Programme",
		description:
			"Individual coaching for executives and managers, with agreed goals, practical action between sessions and progress reviews. The duration and frequency are shaped around the leader's needs.",
		cta: "Discuss Leadership Coaching",
		area: "Leadership Coaching",
		image:
			"https://res.cloudinary.com/dfxorvtuc/image/upload/v1778693829/Freedom27_Business_Profile_1_wflyx2.png",
		tint: "bg-[#DDE4EA]",
	},
	{
		title: "Team Trust and Effectiveness Programme",
		description:
			"A structured engagement that can combine individual listening conversations, facilitated team sessions, working agreements and follow-up reviews. We clarify how information will be used before the work begins.",
		cta: "Discuss Team Support",
		area: "Team Effectiveness",
		image:
			"https://res.cloudinary.com/dfxorvtuc/image/upload/v1788862954/Zee_Personnel_Company_Profile_2_qddakm.png",
		tint: "bg-[#D9E6EE]",
	},
];

const approach = [
	{
		number: "01",
		title: "Diagnose",
		desc: "Understand the organisational need through structured conversations, reflection and relevant assessment.",
	},
	{
		number: "02",
		title: "Align",
		desc: "Agree priorities, expectations, roles and the outcomes to work towards.",
	},
	{
		number: "03",
		title: "Facilitate",
		desc: "Deliver coaching, team conversations and learning experiences that address the agreed needs.",
	},
	{
		number: "04",
		title: "Embed",
		desc: "Turn insights into practical actions, working agreements and individual commitments.",
	},
	{
		number: "05",
		title: "Sustain",
		desc: "Review progress and agree further support where needed, within the scope of the engagement.",
	},
];

const team = [
	{
		name: "Tshepo Matlou",
		role: "Chief Executive Officer",
		tagline:
			"Executive and Leadership Coach | Facilitator | Author and Speaker",
		bio: "Tshepo Matlou is an executive and leadership coach, author, speaker and wellness facilitator with more than 20 years of management and leadership experience across the public and private sectors. He combines leadership insight, emotional intelligence and mindfulness to help people reflect on how they lead, relate and respond to pressure.",
		initials: "TM",
		image:
			"https://res.cloudinary.com/dfxorvtuc/image/upload/v1794996223/Freedom27_Business_Profile_ezwizn.png", // add portrait URL
	},
	{
		name: "Dr Sean Zimunya",
		role: "Chief Transformation Officer",
		tagline:
			"Leadership Coach | Executive Consultant | Organisational Development Specialist",
		bio: "Dr Sean Zimunya is a leadership coach, executive consultant and social worker with experience across therapeutic, corporate and learning environments. His work brings together an understanding of human behaviour, organisational development and wellbeing to support leaders and teams.",
		initials: "SZ",
		image:
			"https://res.cloudinary.com/dfxorvtuc/image/upload/v1794996223/Freedom27_Business_Profile_1_vjcsf9.png",
	},
];

const sectors = [
	{
		icon: Landmark,
		title: "Government & legislature",
		names:
			"Parliament of the Republic of South Africa · Western Cape Government · Gauteng Provincial Government · Dept of Agriculture, Land Reform & Rural Development · Dept of Tourism · Office of the Tax Ombud",
	},
	{
		icon: Building2,
		title: "Public entities & agencies",
		names:
			"Transnet · Road Accident Fund · Cross-Border Road Transport Agency · ERWAT · INSETA",
	},
	{
		icon: Briefcase,
		title: "Financial services & corporate",
		names: "FNB · Momentum · African Rainbow Minerals · IGT · ICAS",
	},
	{
		icon: Microscope,
		title: "Research & development institutions",
		names: "NIHSS · SANBI",
	},
];

const faqs = [
	{
		q: "Can we begin with a single session?",
		a: "Yes. We can start with a focused talk, workshop or coaching engagement and discuss further support where it would be useful.",
	},
	{
		q: "Can you work alongside our existing EAP?",
		a: "Yes. Our coaching, team and wellbeing programmes can complement your existing employee assistance arrangements. We agree the scope and respective roles with your organisation.",
	},
	{
		q: "What does your wellbeing support include?",
		a: "Our current offering focuses on coaching, wellbeing education, mindfulness and facilitated workplace programmes. Clinical treatment, emergency assistance and a comprehensive EAP are outside this offering.",
	},
];

const interestAreas = [
	"Leadership Coaching",
	"Team Effectiveness",
	"Workplace Wellbeing",
	"Other organisational support",
	"Not sure yet",
];

const navGroups = [
	{
		label: "What We Do",
		links: [
			["Workplace Wellbeing", "#services"],
			["Leadership Coaching", "#services"],
			["Team Effectiveness", "#services"],
			["Change Management & Transition", "#services"],
			["Strategy Facilitation & Performance", "#services"],
		],
	},
	{
		label: "Ways to Work With Us",
		links: [
			["Workplace Wellbeing Programme", "#programmes"],
			["Leadership Coaching Programme", "#programmes"],
			["Team Trust and Effectiveness Programme", "#programmes"],
			["Our Approach", "#approach"],
		],
	},
	{
		label: "Company",
		links: [
			["About Freedom 27", "#about"],
			["Our Leadership Team", "#team"],
			["Experience", "#experience"],
			["FAQs", "#faq"],
		],
	},
];

/* ------------------------------------------------------------------ */
/* META + FONTS                                                        */
/* ------------------------------------------------------------------ */

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
	},
];

export const meta: MetaFunction = () => {
	const title =
		"Freedom 27 | Leadership Coaching, Team Effectiveness, Workplace Wellbeing & Talent Assessments";
	const description =
		"Freedom 27 helps corporates, government and development institutions develop effective leaders, strengthen working relationships and support employee wellbeing through coaching and facilitated programmes.";
	const url = "https://www.freedom27.co.za";

	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content:
				"leadership coaching South Africa, executive coaching Centurion, workplace wellbeing programmes, team effectiveness, psychological safety, change management, strategy facilitation, Freedom 27",
		},
		{ name: "robots", content: "index, follow" },
		{ tagName: "link", rel: "canonical", href: url },
		{ property: "og:type", content: "website" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:image", content: HERO_IMAGE },
		{ property: "og:url", content: url },
		{ property: "og:site_name", content: "Freedom 27" },
		{ property: "og:locale", content: "en_ZA" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: HERO_IMAGE },
	];
};

/* ------------------------------------------------------------------ */
/* SMALL PIECES                                                        */
/* ------------------------------------------------------------------ */

const heading = "font-['Plus_Jakarta_Sans',Inter,sans-serif]";
const wrap = "mx-auto max-w-[1200px] px-6";

const Eyebrow = ({
	children,
	dark = false,
}: {
	children: ReactNode;
	dark?: boolean;
}) => (
	<p
		className={`text-sm font-semibold uppercase tracking-[0.06em] ${
			dark ? "text-[#22D3EE]" : "text-[#0369A1]"
		}`}
	>
		{children}
	</p>
);

const H2 = ({
	children,
	dark = false,
}: {
	children: ReactNode;
	dark?: boolean;
}) => (
	<h2
		className={`${heading} text-3xl font-extrabold leading-tight tracking-tight md:text-[40px] ${
			dark ? "text-white" : "text-[#0B1929]"
		}`}
	>
		{children}
	</h2>
);

function useHashScroll(onBeforeScroll?: () => void) {
	useEffect(() => {
		const headerOffset = () =>
			(document.querySelector("header")?.getBoundingClientRect().height ?? 0) +
			16;

		const targetTop = (el: HTMLElement) =>
			el.getBoundingClientRect().top + window.scrollY - headerOffset();

		const scrollToId = (id: string, smooth = true) => {
			const el = document.getElementById(id);
			if (!el) return;
			const reduce = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;
			window.scrollTo({
				top: targetTop(el),
				behavior: smooth && !reduce ? "smooth" : "auto",
			});

			// Correct once if images/fonts above the target shifted the layout mid-scroll
			const settle = () => {
				const diff = Math.abs(el.getBoundingClientRect().top - headerOffset());
				if (diff > 4) window.scrollTo({ top: targetTop(el), behavior: "auto" });
			};
			if ("onscrollend" in window) {
				window.addEventListener("scrollend", settle, { once: true });
			} else {
				setTimeout(settle, 700);
			}
		};

		const onClick = (e: MouseEvent) => {
			const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(
				'a[href^="#"]',
			);
			if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
			const id = a.getAttribute("href")!.slice(1);
			if (!id) return;
			e.preventDefault();
			onBeforeScroll?.(); // close the mobile menu first…
			// …then wait two frames so the header has its final height
			requestAnimationFrame(() =>
				requestAnimationFrame(() => {
					scrollToId(id);
					history.pushState(null, "", `#${id}`);
				}),
			);
		};

		document.addEventListener("click", onClick);

		// Landing on /#contact from another page or a shared link
		if (window.location.hash) {
			const id = window.location.hash.slice(1);
			window.addEventListener("load", () => scrollToId(id, false), {
				once: true,
			});
		}

		return () => document.removeEventListener("click", onClick);
	}, [onBeforeScroll]);
}

/* ------------------------------------------------------------------ */
/* HEADER                                                              */
/* ------------------------------------------------------------------ */

function Header() {
	const [openGroup, setOpenGroup] = useState<string | null>(null);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const close = (e: MouseEvent) => {
			if (!(e.target as HTMLElement).closest("[data-dropdown]"))
				setOpenGroup(null);
		};
		const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpenGroup(null);
		document.addEventListener("click", close);
		document.addEventListener("keydown", esc);
		return () => {
			document.removeEventListener("click", close);
			document.removeEventListener("keydown", esc);
		};
	}, []);

	const closeAll = useCallback(() => {
		setOpenGroup(null);
		setMobileOpen(false);
	}, []);

	useHashScroll(closeAll);

	return (
		<header className="sticky top-0 z-50 border-b border-[#E3E8EA] bg-white">
			<div
				className={`${wrap} flex flex-wrap items-center justify-between gap-4 py-4`}
			>
				<a
					href="#top"
					className="flex items-center gap-2.5 text-[#0B1929] no-underline"
				>
					<Logo style="h-20 w-20" />
				</a>

				<button
					type="button"
					className="p-2 text-[#0B1929] lg:hidden"
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
					aria-expanded={mobileOpen}
					aria-controls="main-nav"
					onClick={() => setMobileOpen((o) => !o)}
				>
					{mobileOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>

				<nav
					id="main-nav"
					aria-label="Main"
					className={`${
						mobileOpen ? "flex" : "hidden"
					} w-full flex-col items-stretch gap-1 pb-3 lg:flex lg:w-auto lg:flex-row lg:items-center lg:pb-0`}
				>
					{navGroups.map((group) => {
						const open = openGroup === group.label;
						return (
							<div key={group.label} className="group relative" data-dropdown>
								<button
									type="button"
									aria-expanded={open}
									onClick={() => setOpenGroup(open ? null : group.label)}
									className="flex items-center gap-1.5 px-3.5 py-3 text-[15px] font-medium text-[#0B1929]"
								>
									{group.label}
									<ChevronDown
										className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`}
									/>
								</button>
								<div
									className={`${
										open ? "flex" : "hidden"
									} flex-col pb-2 pl-3 lg:absolute lg:left-0 lg:top-12 lg:w-[300px] lg:rounded-xl lg:border lg:border-[#E3E8EA] lg:bg-white lg:p-2.5 lg:shadow-[0_12px_32px_rgba(11,25,41,0.12)] lg:group-hover:flex`}
								>
									{group.links.map(([label, href]) => (
										<a
											key={label}
											href={href}
											onClick={closeAll}
											className="rounded-lg px-3 py-2.5 text-sm text-[#0B1929] no-underline hover:bg-[#F1F7FA]"
										>
											{label}
										</a>
									))}
								</div>
							</div>
						);
					})}
					<a
						href="#contact"
						onClick={closeAll}
						className="mt-2 rounded-full bg-[#0369A1] px-5 py-3 text-center text-[15px] font-semibold text-white no-underline hover:bg-[#075985] lg:ml-2 lg:mt-0"
					>
						Contact us
					</a>
				</nav>
			</div>
		</header>
	);
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function Index() {
	const { email, mailto } = useEmail();

	return (
		<div
			id="top"
			className="w-full scroll-smooth bg-white font-[Inter,system-ui,sans-serif] leading-relaxed text-[#0B1929] antialiased"
		>
			<Header />

			<main>
				{/* HERO */}
				<section className="bg-[#F1F7FA]">
					<div
						className={`${wrap} flex flex-col items-center gap-14 py-20 lg:flex-row lg:py-[88px]`}
					>
						<div className="flex min-w-0 flex-1 flex-col gap-6">
							<Eyebrow>
								Leadership Coaching | Workplace Wellbeing | Team Effectiveness |
								Talent Assessments
							</Eyebrow>
							<h1
								className={`${heading} text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-6xl`}
							>
								Stronger leaders and healthier workplaces
							</h1>
							<p className="max-w-[560px] text-lg text-[#3E4F5B] md:text-[19px]">
								We help corporates, government and development institutions
								develop effective leaders, strengthen working relationships and
								support employee wellbeing.
							</p>
							<div className="flex flex-wrap gap-3 pt-2">
								<a
									href="#contact"
									className="rounded-full bg-[#0369A1] px-7 py-4 font-semibold text-white no-underline hover:bg-[#075985]"
								>
									Request a Discovery Call
								</a>
								<a
									href="#services"
									className="rounded-full border-[1.5px] border-[#0B1929] px-7 py-4 font-semibold text-[#0B1929] no-underline hover:bg-[#0B1929] hover:text-white"
								>
									Explore Our Services
								</a>
							</div>
						</div>
						<img
							src={HERO_IMAGE}
							alt="Freedom 27 facilitating a leadership session"
							className="h-[320px] w-full min-w-0 flex-1 rounded-3xl bg-[#CDE6F1] object-cover md:h-[460px]"
						/>
					</div>
				</section>

				{/* PROOF BAND */}
				<section aria-label="At a glance" className="bg-[#0B1929] text-white">
					<div className={`${wrap} grid gap-8 py-10 md:grid-cols-3`}>
						{[
							[
								"20+ years",
								"of management and leadership experience across the public and private sectors",
							],
							[
								"3 sectors",
								"Corporates, government and development institutions",
							],
							[
								"One approach",
								"Leadership, team relationships and wellbeing, connected",
							],
						].map(([big, small]) => (
							<div key={big} className="flex flex-col gap-1">
								<span className={`${heading} text-4xl font-extrabold`}>
									{big}
								</span>
								<span className="text-[15px] text-[#C9D6DD]">{small}</span>
							</div>
						))}
					</div>
				</section>

				{/* ABOUT */}
				<section id="about" className="scroll-mt-20">
					<div className={`${wrap} flex flex-col gap-12 py-24`}>
						<div className="grid gap-12 lg:grid-cols-[1fr_1.35fr]">
							<div className="flex flex-col gap-4">
								<Eyebrow>About Freedom 27</Eyebrow>
								<H2>
									We are <span className="text-[#0369A1]">human</span> before
									position, power and titles.
								</H2>
							</div>
							<div className="flex flex-col gap-4 text-[17px] text-[#3E4F5B]">
								<p>
									Freedom 27 is a coaching and workplace wellbeing partner based
									in Centurion, South Africa. We work with leaders, teams and
									organisations to strengthen leadership practice, improve
									collaboration and support healthier ways of working.
								</p>
								<p>
									Our work brings together executive coaching, team
									facilitation, psychological safety and wellbeing programmes.
									We begin by understanding your context, then agree an approach
									that helps people reflect, take responsibility and apply what
									they learn.
								</p>
								<p>
									Whether the need is leadership growth, strained team
									relationships or support through a demanding period, we
									connect meaningful conversations with practical workplace
									action.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="values" className="scroll-mt-20 bg-[#0B1929] text-white">
					<div className={`${wrap} flex flex-col gap-12 py-24`}>
						<div className="grid gap-6 md:grid-cols-3">
							{[
								{
									icon: Eye,
									title: "Vision",
									text: "To contribute to workplaces across Africa where people are supported, leaders lead responsibly and teams perform sustainably.",
								},
								{
									icon: Target,
									title: "Mission",
									text: "To help organisations strengthen leadership, working relationships and wellbeing through coaching, facilitated learning and practical follow-through.",
								},
								{
									icon: Star,
									title: "Value proposition",
									text: "We connect leadership behaviour, team relationships and employee wellbeing in one practical approach, shaped around the organisation's needs and supported by agreed actions and reviews.",
								},
							].map(({ icon: Icon, title, text }) => (
								<div
									key={title}
									className="flex flex-col gap-3 rounded-[20px] border border-[#0369A1] p-8"
								>
									<Icon className="h-8 w-8 text-[#0369A1]" strokeWidth={1.8} />
									<h3 className={`${heading} text-xl font-bold`}>{title}</h3>
									<p className="text-[#C9D6DD]">{text}</p>
								</div>
							))}
						</div>

						<div className="flex flex-wrap items-center gap-3">
							<span className="mr-2 text-[15px] font-semibold">Our values</span>
							{[
								"Empowerment",
								"Authenticity",
								"Excellence",
								"Resilience",
								"Freedom",
							].map((v) => (
								<span
									key={v}
									className="rounded-full border border-[#0369A1] px-[18px] py-2 text-[15px]"
								>
									{v}
								</span>
							))}
						</div>
					</div>
				</section>

				{/* SERVICES */}
				<section id="services" className="scroll-mt-20 bg-[#F1F7FA]">
					<div className={`${wrap} flex flex-col gap-10 py-24`}>
						<div className="flex max-w-[720px] flex-col gap-3">
							<Eyebrow>What we do</Eyebrow>
							<H2>Our services</H2>
							<p className="text-lg text-[#3E4F5B]">
								We support the people and relationships that shape
								organisational performance.
							</p>
						</div>

						<div className="flex flex-col gap-6">
							<h3 className="text-[15px] font-bold uppercase tracking-[0.04em] text-[#3E4F5B]">
								People and teams
							</h3>
							<div className="grid gap-6 md:grid-cols-3">
								{coreServices.map((s) => (
									<div
										key={s.number}
										className="flex flex-col gap-3 rounded-[20px] border border-[#E3E8EA] bg-white p-8"
									>
										<span
											className={`${heading} text-[15px] font-extrabold text-[#0369A1]`}
										>
											{s.number}
										</span>
										<h4 className={`${heading} text-[22px] font-bold`}>
											{s.title}
										</h4>
										<p className="text-[#3E4F5B]">{s.description}</p>
									</div>
								))}
							</div>
						</div>

						<div className="flex flex-col gap-6">
							<h3 className="text-[15px] font-bold uppercase tracking-[0.04em] text-[#3E4F5B]">
								Organisational support
							</h3>
							<div className="grid gap-6 md:grid-cols-2">
								{orgServices.map((s) => (
									<div
										key={s.number}
										className="flex flex-col gap-3 rounded-[20px] bg-[#0B1929] p-8 text-white"
									>
										<span
											className={`${heading} text-[15px] font-extrabold text-[#22D3EE]`}
										>
											{s.number}
										</span>
										<h4 className={`${heading} text-[22px] font-bold`}>
											{s.title}
										</h4>
										<p className="text-[#C9D6DD]">{s.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* WAYS TO WORK WITH US */}
				<section id="programmes" className="scroll-mt-20">
					<div className={`${wrap} flex flex-col gap-10 py-24`}>
						<div className="flex max-w-[720px] flex-col gap-3">
							<Eyebrow>Ways to work with us</Eyebrow>
							<H2>Start focused, or build a programme</H2>
							<p className="text-lg text-[#3E4F5B]">
								Start with a focused session or build a programme with support
								over time. We agree the format, participants and follow-up
								around your priorities.
							</p>
						</div>

						<div className="grid gap-6 lg:grid-cols-3">
							{programmes.map((p) => (
								<article
									key={p.title}
									className="flex flex-col overflow-hidden rounded-[20px] border border-[#E3E8EA]"
								>
									{p.image ? (
										<img
											src={p.image}
											alt=""
											className="h-[220px] w-full object-cover"
										/>
									) : (
										<div className={`h-[220px] ${p.tint}`} />
									)}
									<div className="flex flex-1 flex-col gap-3 p-7">
										<h3 className={`${heading} text-[22px] font-bold`}>
											{p.title}
										</h3>
										<p className="flex-1 text-[#3E4F5B]">{p.description}</p>
										<a
											href={mailto(p.area)}
											className="inline-flex items-center gap-2 py-2.5 font-semibold text-[#0369A1] no-underline transition-all hover:gap-3 hover:text-[#075985]"
										>
											{p.cta}
											<ArrowRight className="h-4 w-4" />
										</a>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* APPROACH */}
				<section id="approach" className="scroll-mt-20 bg-[#0B1929] text-white">
					<div className={`${wrap} flex flex-col gap-12 py-24`}>
						<div className="flex max-w-[720px] flex-col gap-3">
							<Eyebrow dark>Our approach</Eyebrow>
							<H2 dark>From context to lasting practice</H2>
							<p className="text-lg text-[#C9D6DD]">
								We start with your context, agree the work together and help
								translate insight into practical action.
							</p>
						</div>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
							{approach.map((s) => (
								<div
									key={s.number}
									className="flex flex-col gap-2 border-t-2 border-[#22D3EE] pt-5"
								>
									<span className={`${heading} font-extrabold text-[#22D3EE]`}>
										{s.number}
									</span>
									<h3 className={`${heading} text-[22px] font-bold`}>
										{s.title}
									</h3>
									<p className="text-[15px] text-[#C9D6DD]">{s.desc}</p>
								</div>
							))}
						</div>

						<div className="flex flex-col gap-6 rounded-[20px] bg-[#12263A] p-8 lg:flex-row lg:items-center">
							<div className="flex flex-1 flex-col gap-2">
								<h3 className={`${heading} text-xl font-bold`}>
									Assessment and reflection tools
								</h3>
								<p className="text-[15px] text-[#C9D6DD]">
									Where appropriate, we use tools such as Enneagram, 360-degree
									feedback and Brainprofile to support reflection and
									development. Tools are selected according to the purpose of
									the engagement and practitioner competence.
								</p>
							</div>
							<div className="flex flex-wrap gap-2.5">
								{["Enneagram", "360-degree feedback", "Brainprofile"].map(
									(t) => (
										<span
											key={t}
											className="rounded-full border border-[#3B5A70] bg-[#0B1929] px-4 py-2 text-sm"
										>
											{t}
										</span>
									),
								)}
							</div>
						</div>
					</div>
				</section>

				{/* TEAM */}
				<section id="team" className="scroll-mt-20">
					<div className={`${wrap} flex flex-col gap-10 py-24`}>
						<div className="flex flex-col gap-3">
							<Eyebrow>Company</Eyebrow>
							<H2>Our Leadership Team</H2>
						</div>
						<div className="grid gap-6 lg:grid-cols-2">
							{team.map((m) => (
								<article
									key={m.name}
									className="flex flex-col gap-6 rounded-[20px] border border-[#E3E8EA] p-7 sm:flex-row"
								>
									{m.image ? (
										<img
											src={m.image}
											alt={m.name}
											className="h-[200px] w-40 shrink-0 rounded-2xl object-cover object-top"
										/>
									) : (
										<div
											aria-hidden="true"
											className={`${heading} flex h-[200px] w-40 shrink-0 items-center justify-center rounded-2xl bg-[#DDE4EA] text-[34px] font-extrabold text-[#0369A1]`}
										>
											{m.initials}
										</div>
									)}
									<div className="flex min-w-0 flex-col gap-2">
										<h3 className={`${heading} text-[22px] font-bold`}>
											{m.name}
										</h3>
										<p className="font-semibold text-[#0369A1]">{m.role}</p>
										<p className="text-sm text-[#3E4F5B]">{m.tagline}</p>
										<p className="text-[15px] text-[#3E4F5B]">{m.bio}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* EXPERIENCE BY SECTOR */}
				<section id="experience" className="scroll-mt-20 bg-[#F1F7FA]">
					<div className={`${wrap} flex flex-col gap-10 py-24`}>
						<div className="flex max-w-[760px] flex-col gap-3">
							<Eyebrow>Experience</Eyebrow>
							<H2>Experience across organisations</H2>
							<p className="text-base text-[#3E4F5B]">
								Our team&apos;s experience includes direct client engagements
								and work delivered through consulting and employee wellbeing
								partners. The role and scope of our involvement vary by
								engagement.
							</p>
						</div>

						<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
							{sectors.map(({ icon: Icon, title, names }) => (
								<div
									key={title}
									className="flex flex-col gap-3 rounded-2xl bg-white p-6"
								>
									<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1F7FA]">
										<Icon
											className="h-[22px] w-[22px] text-[#0369A1]"
											strokeWidth={1.8}
											aria-hidden="true"
										/>
									</span>
									<h3 className={`${heading} text-[17px] font-bold`}>
										{title}
									</h3>
									<p className="text-[15px] text-[#3E4F5B]">{names}</p>
								</div>
							))}
						</div>

						<div className="overflow-hidden rounded-[20px] bg-white py-6">
							<LogoCarousel logos={affiliates} />
						</div>
					</div>
				</section>

				{/* FAQ — native <details>, no JS */}
				<section id="faq" className="scroll-mt-20">
					<div className="mx-auto flex max-w-[880px] flex-col gap-8 px-6 py-24">
						<div className="flex items-center gap-4">
							<span
								aria-hidden="true"
								className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F1F7FA] md:h-14 md:w-14"
							>
								<MessageCircleQuestion
									className="h-6 w-6 text-[#0369A1] md:h-7 md:w-7"
									strokeWidth={1.8}
								/>
							</span>
							<H2>Frequently asked questions</H2>
						</div>
						<div className="flex flex-col border-t border-[#E3E8EA]">
							{faqs.map((f, i) => (
								<details
									key={f.q}
									open={i === 0}
									className="group border-b border-[#E3E8EA]"
								>
									<summary
										className={`${heading} flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-[19px] font-semibold [&::-webkit-details-marker]:hidden`}
									>
										{f.q}
										<Plus className="h-6 w-6 shrink-0 text-[#0369A1] transition group-open:rotate-45" />
									</summary>
									<p className="max-w-[720px] pb-6 text-base text-[#3E4F5B]">
										{f.a}
									</p>
								</details>
							))}
						</div>
					</div>
				</section>

				{/* CONTACT — direct channels only */}
				<section id="contact" className="scroll-mt-20 bg-[#0B1929] text-white">
					<div className={`${wrap} grid gap-14 py-24 lg:grid-cols-2`}>
						<div className="flex flex-col gap-5">
							<Eyebrow dark>Contact Freedom 27</Eyebrow>
							<H2 dark>
								Let&apos;s discuss what your people and organisation need.
							</H2>
							<p className="text-[17px] text-[#C9D6DD]">
								Whether you need coaching for a leader, support for a team or a
								workplace wellbeing programme, we would welcome a conversation
								about your priorities.
							</p>
							<div className="flex flex-col gap-3.5 pt-2 text-base">
								<a
									href={`tel:${PHONE_TEL}`}
									className="flex items-center gap-3 text-white no-underline hover:text-[#22D3EE]"
								>
									<Phone className="h-5 w-5 text-[#22D3EE]" strokeWidth={1.8} />
									{PHONE_DISPLAY}
								</a>
								<a
									href={mailto()}
									className="flex items-center gap-3 text-white no-underline hover:text-[#22D3EE]"
								>
									<Mail className="h-5 w-5 text-[#22D3EE]" strokeWidth={1.8} />
									{email ?? `${EMAIL_USER} [at] ${EMAIL_DOMAIN}`}
								</a>
								<span className="flex items-center gap-3">
									<MapPin
										className="h-5 w-5 text-[#22D3EE]"
										strokeWidth={1.8}
									/>
									Centurion, South Africa
								</span>
							</div>
							<a
								href={COMPANY_PROFILE_URL}
								download
								className="mt-2 inline-flex items-center gap-2.5 self-start rounded-full border-[1.5px] border-white px-6 py-3.5 font-semibold text-white no-underline hover:bg-white hover:text-[#0B1929]"
							>
								<Download className="h-[18px] w-[18px]" />
								Download Company Profile
							</a>
						</div>

						<div className="flex flex-col gap-5 rounded-3xl bg-white p-7 text-[#0B1929] md:p-9">
							<h3 className={`${heading} text-2xl font-bold`}>
								Request a Discovery Call
							</h3>
							<p className="text-base text-[#3E4F5B]">
								Pick what you&apos;d like to discuss. We&apos;ll open an email
								with a short template so you can share your name, organisation
								and a brief description of your needs.
							</p>
							<div className="flex flex-wrap gap-2">
								{interestAreas.map((area) => (
									<a
										key={area}
										href={mailto(area)}
										className="rounded-full border-[1.5px] border-[#B8C5CC] bg-white px-4 py-2.5 text-sm font-medium text-[#0B1929] no-underline transition hover:border-[#0369A1] hover:bg-[#0369A1] hover:text-white"
									>
										{area}
									</a>
								))}
							</div>
							<div className="flex flex-wrap gap-3 pt-2">
								<a
									href={mailto("Not sure yet")}
									className="inline-flex items-center gap-2.5 rounded-full bg-[#0369A1] px-7 py-4 font-semibold text-white no-underline hover:bg-[#075985]"
								>
									<Mail className="h-[18px] w-[18px]" />
									Email to request a call
								</a>
								<a
									href={whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[#0B1929] px-7 py-4 font-semibold text-[#0B1929] no-underline hover:bg-[#0B1929] hover:text-white"
								>
									<MessageCircle className="h-[18px] w-[18px]" />
									WhatsApp
								</a>
							</div>
							<p className="border-t border-[#E3E8EA] pt-4 text-[13px] text-[#4A5A66]">
								Please share a short overview of your organisational needs.
								Avoid including sensitive personal information about yourself or
								another person.
							</p>
						</div>
					</div>
				</section>
			</main>

			{/* FOOTER — columns mirror the nav */}
			<footer className="bg-[#07121E] text-[#C9D6DD]">
				<div className={`${wrap} flex flex-col gap-10 pb-8 pt-16`}>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						<div className="flex flex-col gap-2.5">
							<span className={`${heading} text-xl font-extrabold text-white`}>
								Freedom 27
							</span>
							<span className="text-sm">
								Leadership Coaching • Team Effectiveness • Workplace Wellbeing
							</span>
						</div>
						{[
							navGroups[0],
							{
								label: "Ways to Work With Us",
								links: [
									["Wellbeing Programme", "#programmes"],
									["Leadership Coaching Programme", "#programmes"],
									["Team Trust and Effectiveness", "#programmes"],
									["Our Approach", "#approach"],
								],
							},
							{
								label: "Company",
								links: [
									["About", "#about"],
									["Our Team", "#team"],
									["Experience", "#experience"],
									["Contact", "#contact"],
								],
							},
						].map((col) => (
							<div key={col.label} className="flex flex-col gap-2 text-sm">
								<span className="pb-1 font-bold text-white">{col.label}</span>
								{col.links.map(([label, href]) => (
									<a
										key={label}
										href={href}
										className="text-[#C9D6DD] no-underline hover:text-[#22D3EE]"
									>
										{label}
									</a>
								))}
							</div>
						))}
					</div>
					<div className="flex flex-wrap justify-between gap-3 border-t border-[#22394A] pt-6 text-[13px]">
						<span>© {new Date().getFullYear()} Freedom 27 (Pty) Ltd</span>
						{/* Point this at your privacy notice */}
						{/* <a
							href="/privacy-notice"
							className="text-[#C9D6DD] hover:text-[#22D3EE]"
						>
							Privacy Notice
						</a> */}
					</div>
				</div>
			</footer>
		</div>
	);
}

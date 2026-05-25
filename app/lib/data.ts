import { GalleryItem, NavItem, Shop } from "./types";

export const menu: NavItem[] = [
	{
		label: "About us",
		path: "#about",
	},
	{
		label: "Services",
		path: "#services",
	},
	{
		label: "ESD",
		path: "#esd",
	},
	{
		label: "Clients",
		path: "#clients",
	},
];

export const media = [
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214255/702_ciun7x.webp",
		alt: "702 Radio Station",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214255/bbc_vzzpxg.png",
		alt: "BBC World Service",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214256/cape-pulprit_jrhajw.jpg",
		alt: "Cape Pulprit Radio Station",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214258/CGTN_Africa_fbe4za.png",
		alt: "CGTN_Africa",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214261/metro-fm_tmg7jp.png",
		alt: "Metro FM",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214261/newzroom-afrika_b0mgic.png",
		alt: "Newzroom Afrika",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214262/radio-2000_ja4nku.gif",
		alt: "Radio 2000",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214262/radio-atlatis_vfgbhx.png",
		alt: "Radio Atlatis",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214262/sunday-sun_mqt9ow.png",
		alt: "Sunday Sun",
	},
];

export const affiliates = [
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214269/alrd_dh2qs5.png",
		alt: "alrd",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214270/fnb-logo_uonjlo.webp",
		alt: "fnb",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214265/arm_vcbxrq.png",
		alt: "arm",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214271/cbrta_mrxfmm.jpg",
		alt: "cbrta",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214269/deedsoffice_a9wagi.png",
		alt: "deedsoffice",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214270/erwat_ll4pih.png",
		alt: "erwat",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214270/ewsc_jzgvtw.png",
		alt: "ewsc",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214260/gp_ciy1qx.gif",
		alt: "gp",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214273/icas_idvhgr.webp",
		alt: "icas",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214261/igt_iwg1po.gif",
		alt: "igt",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214276/inseta-logo_krzkhp.png",
		alt: "inseta",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214261/momentum_gyizbp.png",
		alt: "momentum",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214277/nifthass_yhl0xj.png",
		alt: "National Institute for the Humanities and Social Sciences",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214278/prsa_txt2lm.png",
		alt: "Parliament of the Republic of South Africa",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214278/raf_plnhft.jpg",
		alt: "Road Accident Fund",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214279/sanbi_aehaoe.png",
		alt: "Sanbi Biodiversity Advisor",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214280/tax-ombud_thsatx.png",
		alt: "Tax Ombud",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214262/transnet_kj5gcl.png",
		alt: "Transnet",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214263/trsa_pj9ml6.jpg",
		alt: "Tourism Republic of South Africa",
	},
	{
		src: "https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214280/wcg_gt5mff.png",
		alt: "Western Cape Government",
	},
];

export const values = [
	"Empowerment",
	"Authenticity",
	"Wellness",
	"Resilience",
	"Freedom",
];

export const services = [
	{
		number: "01",
		title: "Strategy Facilitation & Performance",
		description: "Aligning strategy, teams, and KPIs for measurable outcomes.",
		items: [
			"Strategy development & facilitation",
			"Strategic planning sessions",
			"KPI alignment and cascading",
			"Performance management frameworks",
			"Team alignment workshops",
		],
	},
	{
		number: "02",
		title: "Leadership Development & Coaching",
		description:
			"Building leaders who inspire, decide, and deliver with clarity.",
		items: [
			"Improve decision-making clarity",
			"Build executive presence",
			"Lead with emotional intelligence",
			"Manage conflict constructively",
			"Strengthen accountability",
		],
	},
	{
		number: "03",
		title: "Change Management & Transition",
		description:
			"Guiding organisations and people through transformation with confidence.",
		items: [
			"Change readiness & resilience",
			"Emotional response to change",
			"Leadership alignment during restructuring",
			"Communication clarity during transitions",
			"Managing uncertainty and morale",
		],
	},
	{
		number: "04",
		title: "Team Cohesion & Alignment",
		description:
			"Creating teams that trust, collaborate, and perform at their highest.",
		items: [
			"Role clarity and expectations",
			"Cross-functional alignment",
			"Psychological safety",
			"Trust cohesion & rebuilding",
			"Culture assessment and surveys",
		],
	},
	{
		number: "05",
		title: "Wellness & Human Sustainability",
		description: "Sustainable performance starts with people who are well.",
		items: [
			"Burnout prevention & resilience",
			"Mindfulness for leaders",
			"Emotional regulation tools",
			"Workplace wellbeing programmes",
		],
	},
];

export const clients = [
	"Momentum",
	"Sasol",
	"De Beers Group",
	"African Rainbow Minerals",
	"Transnet",
	"FNB",
	"Gauteng Province",
	"SANBI",
	"National Arts Council",
	"INSETA",
	"Parliament of SA",
	"Western Cape Government",
	"Road Accident Fund",
	"Tax Ombud",
	"ERWAT",
	"Eastern Cape Parks & Tourism",
	"Allan & Gill Gray Foundation",
	"IGT",
	"ICAS",
	"Cross-Border Road Transport Agency",
];

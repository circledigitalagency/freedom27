import { GraduationCap, MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import LogoCarousel from "~/components/carousel/partners";
import HorizontalImageBackground from "~/components/layout/horizontal-image-bg";
import MainLayout from "~/components/layout/main";
import ButtonLink from "~/components/link/button-link";
import Header from "~/components/text/header";
import { media, qualifications, values } from "~/lib/data";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "About Freedom 27 | Wellness, Mindfulness & Personal Growth" },
		{
			name: "description",
			content:
				"Discover the story behind Freedom 27 — a wellness and personal development movement led by Tshepo Matlou, offering mindfulness coaching, trauma healing, and holistic retreats for transformation and clarity.",
		},
		{
			name: "keywords",
			content:
				"Freedom 27, Tshepo Matlou, mindfulness, personal development, emotional healing, retreats, life coaching, trauma recovery, breathwork, holistic wellness",
		},
		{ name: "author", content: "Freedom 27" },
		{
			property: "og:title",
			content: "About Freedom 27 – Wellness & Mindfulness",
		},
		{
			property: "og:description",
			content:
				"Learn more about Freedom 27 and its founder, Tshepo Matlou. Explore our vision, mission, and the personal transformation tools we offer through coaching, workshops, and retreats.",
		},
		{
			property: "og:image",
			content:
				"https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214257/about-us_ghz1kw.jpg",
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://freedom27.co.za/about-us" },
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "twitter:title",
			content: "About Freedom 27 – Wellness & Personal Growth",
		},
		{
			name: "twitter:description",
			content:
				"Freedom 27 helps individuals find balance and clarity through coaching, breathwork, and mindfulness practices.",
		},
		{
			name: "twitter:image",
			content:
				"https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214257/about-us_ghz1kw.jpg",
		},
	];
};

export default function Page() {
	return (
		<MainLayout>
			<HorizontalImageBackground
				image="https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214257/about-us_ghz1kw.jpg"
				alt="freedom"
				children={
					<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
						<div className="text-center max-w-3xl mx-auto">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
								About Freedom 27
							</h1>

							<p className="text-xl md:text-2xl mb-8">
								A Journey Toward Clarity, Healing, and Wholeness
							</p>
						</div>
					</div>
				}
			/>
			<div className="flex flex-col space-y-32 py-10">
				<section className="flex flex-row w-full justify-between items-start space-x-10 sm:px-24 px-5">
					<div className="flex flex-col space-y-5">
						<p>
							<span className="text-primary font-medium text-lg">
								Freedom 27
							</span>{" "}
							is a wellness and personal development movement rooted in
							mindfulness, emotional healing, and holistic growth. We offer
							transformative experiences from nature-based hikes and intimate
							workshops to one-on-one coaching and immersive retreats each
							designed to nurture mental well-being, self-awareness, and
							resilience.
						</p>
						<p>
							Our programs guide individuals, couples, and groups through life’s
							transitions with compassion and clarity. Whether you're navigating
							stress, healing from past trauma, or simply seeking deeper
							connection with yourself, Freedom 27 offers tools to support
							sustainable mental health and personal empowerment.
						</p>
						<p>
							At the heart of our approach is the belief that healing is not a
							destination — it’s a return. A return to presence, to purpose, to
							inner peace
						</p>
					</div>
				</section>
				<section className="flex sm:flex-row flex-col space-y-10 w-full justify-between items-start sm:px-24 px-5">
					<div className="flex flex-col space-y-5 sm:w-1/2">
						<Header title="Our Vision" subTitile="" titleStyle="text-primary" />
						<p className="w-[80%]">
							Our vision is to become one of the leading personal and leadership
							development company in Africa
						</p>
					</div>
					<div className="flex flex-col space-y-5 sm:w-1/2 items-end">
						<Header
							title="Our Aim"
							subTitile=""
							titleStyle="text-primary"
							lineStyle="mx-auto"
						/>
						<p className="text-right">
							We aim to develop and support individuals and leaders, discover
							their core values, passions and set goals. Improving the quality
							of life and helping to reach their potentials and live a
							purposeful life
						</p>
					</div>
				</section>
				<section className="flex flex-col space-y-8 justify-center items-center bg-gray-50 w-full h-72">
					<h1 className="text-2xl font-medium text-primary">Our Values</h1>
					<div className="grid grid-cols-2 sm:grid-cols-5 gap-10">
						{values.map((val, index) => (
							<div className="flex flex-row space-x-2 items-center" key={index}>
								<div className="h-4 w-4 rounded-full bg-secondary" />
								<p className="font-normal text-accent">{val}</p>
							</div>
						))}
					</div>
				</section>
				<section className="flex sm:flex-row flex-col w-full justify-between items-start sm:space-x-10 space-y-5 sm:px-24 px-5">
					<div className="h-full w-full">
						<img
							src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214264/tshepo-matlou_d4hpnq.jpg"
							alt="Tshepo Matlou"
							className="w-full h-full object-fill"
						/>
					</div>
					<div className="flex flex-col space-y-5">
						<Header
							title="Our Founder"
							subTitile="Meet Tshepo Matlou"
							titleStyle="text-primary"
						/>
						<p>
							Tshepo Matlou is a mindfulness facilitator, life and leadership
							coach, author, and speaker with over 20 years of experience in
							executive leadership and personal transformation. With a calm,
							grounded presence, Tshepo brings a unique blend of strategic
							insight and emotional intelligence to every session and
							experience.
						</p>
						<p>
							His career started in hospitality, travel and tourism, technology,
							consulting before joining Government and eventually and
							independent.
						</p>
						<div className="flex flex-col space-y-2">
							<p>
								His book, Freedom – In Pursuit of Liberty (Mind, Body, and
								Soul), forms the philosophical foundation of Freedom 27. The
								work explores the liberating power of self-awareness, emotional
								release, and mindset shifts, offering a roadmap for those
								seeking to:
							</p>
							<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
								<li>Overcome limiting beliefs</li>
								<li>Heal from personal and generational trauma</li>
								<li>Strengthen mental and emotional well-being</li>
								<li>Enhance relationships, both personal and professional</li>
								<li>Embrace a more intentional, balanced life</li>
							</ul>
						</div>
						<p>
							With a commitment to presence, Tshepo and the Freedom 27 team hold
							space for people to reconnect with their truth, and move forward
							with clarity, courage, and compassion.
						</p>
					</div>
				</section>
				<section className="flex flex-col w-full justify-between items-start space-y-10 sm:px-24 px-5">
					<div className="flex items-start">
						<Header
							title="Qualifications"
							subTitile="Education, Training, and Credentials"
							titleStyle="text-primary"
						/>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
						{qualifications.map((quali, index) => (
							<div className="flex-col space-y-2" key={index}>
								<p className="text-gray-400 text-sm">{quali.degree}</p>
								<p className="text-gray-400 text-xs font-light">
									{quali.school}
								</p>
							</div>
						))}
					</div>
				</section>
				<section className="flex flex-col w-full justify-between items-start space-y-10">
					<div className="flex items-start px-5 sm:px-24">
						<Header
							title="Media Exposure"
							subTitile="Recognized in the Media"
							titleStyle="text-primary"
						/>
					</div>
					<LogoCarousel logos={media} />
				</section>
				<section className="flex sm:flex-row flex-col w-full justify-between items-start sm:space-x-10 space-y-10 px-5 sm:px-24">
					<Header
						title="*Checkout His Book"
						subTitile="Freedom – In Pursuit of Liberty"
						titleStyle="text-primary"
					/>
					<div className="flex flex-col justify-center items-center space-y-4 border border-slate-200 py-4">
						<img
							src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1751621135/book_hexyzz.svg"
							alt="book"
							className="w-72 h-72 object-fill"
						/>
						<div className="flex flex-col space-y-3 p-4">
							<p className="font-medium text-accent">
								Freedom - Pursuit of Liberty
							</p>
							<p className="text-xs text-gray-800">
								A gentle guide to letting go, healing past wounds, and finding
								inner balance — through self-awareness, mindset shifts, and
								mindful living.
							</p>
							<ButtonLink
								to={`/checkout/book`}
								title={
									<div className="flex flex-row items-center space-x-2 group-hover:text-white text-primary ">
										<p className="text-sm">Buy</p>
										<div className="w-px h-4 bg-primary group-hover:bg-white" />
										<p className="text-sm">R 350.00</p>
									</div>
								}
								linkStyle="border-primary w-32 h-10 p-1"
							/>
						</div>
					</div>
				</section>
			</div>
		</MainLayout>
	);
}

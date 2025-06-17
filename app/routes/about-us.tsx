import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import MainLayout from "~/components/layout/main";
import Header from "~/components/text/header";

export default function Page() {
	const values = [
		"Empowerment",
		"Authenticity",
		"Courage",
		"Resilience",
		"Freedom",
	];
	return (
		<MainLayout>
			<div className="flex flex-col space-y-32 py-5">
				<Header
					title="About Freedom 27"
					subTitile="A Journey Toward Clarity, Healing, and Wholeness"
					titleStyle="text-primary"
					containerStyle="items-center justify-center"
				/>
				<section className="flex flex-row w-full justify-between items-start space-x-10 px-24">
					<div className="flex flex-col space-y-5">
						<p>
							Freedom 27 is a wellness and personal development movement rooted
							in mindfulness, emotional healing, and holistic growth. We offer
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
				<section className="flex flex-row w-full justify-between items-start px-24">
					<div className="flex flex-col space-y-5 w-1/2">
						<Header title="Our Vision" subTitile="" titleStyle="text-primary" />
						<p className="w-[80%]">
							Our vision is to become one of the leading personal and leadership
							development company in Africa
						</p>
					</div>
					<div className="flex flex-col space-y-5 w-1/2">
						<Header title="Our Aim" subTitile="" titleStyle="text-primary" />
						<p>
							We aim to develop and support individuals and leaders, discover
							their core values, passions and set goals. Improving the quality
							of life and helping to reach their potentials and live a
							purposeful life
						</p>
					</div>
				</section>
				<section className="flex flex-col space-y-8 justify-center items-center bg-blue-100 w-full h-72">
					<h1 className="text-2xl font-medium text-primary">Our Values</h1>
					<div className="grid grid-cols-5 gap-10">
						{values.map((val, index) => (
							<div className="flex flex-row space-x-2 items-center" key={index}>
								<div className="h-4 w-4  bg-secondary" />
								<p className="font-normal text-accent">{val}</p>
							</div>
						))}
					</div>
				</section>
				<section className="flex flex-row w-full justify-between items-start space-x-10 px-24">
					<div className="h-full w-full">
						<img
							src="/images/founder.jpg"
							alt="founder"
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
						<div className="flex flex-col space-y-2">
							<p>
								His book, Freedom – In Pursuit of Liberty (Mind, Body, and
								Soul), forms the philosophical foundation of Freedom 27. The
								work explores the liberating power of self-awareness, emotional
								release, and mindset shifts — offering a roadmap for those
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
							space for people to reconnect with their truth — and move forward
							with clarity, courage, and compassion.
						</p>
					</div>
				</section>
				<section className="flex flex-row w-full justify-between items-start space-x-10 px-24">
					<Header
						title="*Checkout His Book"
						subTitile="Freedom – In Pursuit of Liberty"
						titleStyle="text-primary"
					/>
					<div className="flex flex-col justify-center items-center space-y-4 border border-slate-200 py-4">
						<img
							src="/images/book.svg"
							alt="book"
							className="w-72 h-72 object-fill"
						/>
						<div className="flex flex-col space-y-3 p-4">
							<p className="font-medium text-accent">
								Freedom - Pursuit of Liberty
							</p>
							<p className="text-xs text-gray-400">
								A gentle guide to letting go, healing past wounds, and finding
								inner balance — through self-awareness, mindset shifts, and
								mindful living.
							</p>
							<p className="text-lg text-accent">R 350.00</p>
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
				</section>
			</div>
		</MainLayout>
	);
}

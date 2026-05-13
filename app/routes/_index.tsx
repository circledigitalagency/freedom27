import type { MetaFunction } from "@remix-run/node";
import {
	Mail,
	MapPin,
	Phone
} from "lucide-react";
import MainLayout from "~/components/layout/main";

import LogoCarousel from "~/components/carousel/partners";
import { affiliates, services } from "~/lib/data";
import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import nodemailer from "nodemailer";


export const meta: MetaFunction = () => {
	return [
		{ title: "Freedom27 – Beyond Traditional Consulting" },
		{
			name: "description",
			content:
				"Transforming Organisations Through Coaching, Culture Change & ESD",
		},
		{
			name: "keywords",
			content: "mindfulness, trauma healing, wellness coaching, breathwork",
		},
		{ name: "author", content: "Freedom 27" },
		{ property: "og:title", content: "Freedom 27 – Mindfulness & Healing" },
		{
			property: "og:description",
			content:
				"Explore coaching, retreats, and breathwork to restore emotional balance and clarity.",
		},
		{
			property: "og:image",
			content:
				"https://res.cloudinary.com/dg1g6ctku/image/upload/v1751621471/freedom-logo_g1idsk.png",
		},
		{ property: "og:type", content: "website" },
	];
};

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();

	const fullName = formData.get("fullName");
	const organisation = formData.get("organisation");
	const email = formData.get("email");
	const phone = formData.get("phone");
	const service = formData.get("service");
	const message = formData.get("message");

	const errors: Record<string, string> = {};

	if (!fullName) errors.fullName = "Full name is required";
	if (!email) errors.email = "Email is required";
	if (!message) errors.message = "Message is required";

	if (Object.keys(errors).length > 0) {
		return json<ActionData>(
			{
				errors: errors,
			},
			{
				status: 400,
			}
		);
	}

	try {
		const transporter = nodemailer.createTransport({
			host: "mail.freedom27.co.za",
			port: 465,
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: `"Freedom 27 Website" <${process.env.SMTP_USER}>`,
			to: "breakfree@freedom27.co.za",
			replyTo: String(email),
			subject: `New Enquiry from ${fullName}`,
			html: `
		  <h2>New Website Enquiry</h2>
  
		  <p><strong>Full Name:</strong> ${fullName}</p>
		  <p><strong>Organisation:</strong> ${organisation}</p>
		  <p><strong>Email:</strong> ${email}</p>
		  <p><strong>Phone:</strong> ${phone}</p>
		  <p><strong>Service:</strong> ${service}</p>
  
		  <hr />
  
		  <p>${message}</p>
		`,
		});

		return json<ActionData>({
			success: true,
		});
	} catch (error) {
		console.error(error);

		return json<ActionData>(
			{
				errors: {
					server: "Something went wrong. Please try again.",
				},
			},
			{
				status: 500,
			}
		);
	}
}

type ActionData = {
	success?: boolean;

	errors?: {
		fullName?: string;
		email?: string;
		message?: string;
		server?: string;
	};
};


export default function Index() {
	const actionData = useActionData<typeof action>();
	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";
	return (
		<MainLayout>
			<div className="flex flex-col space-y-14">
				{/* HERO */}
				<section className="relative flex items-center overflow-hidden bg-[#0B1929]">
					{/* Grid */}
					<div
						className="absolute inset-0 opacity-20"
						style={{
							backgroundImage: `
              linear-gradient(rgba(61,184,197,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(61,184,197,0.15) 1px, transparent 1px)
            `,
							backgroundSize: "60px 60px",
						}}
					/>

					{/* Glow */}
					<div className="absolute right-[10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

					<div className="relative z-10 mx-auto grid w-full gap-10 px-6 py-18 md:py-20 lg:grid-cols-[1fr_320px] lg:px-16">
						<div className="max-w-3xl">
							<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-4 py-2">
								<div className="h-2 w-2 rounded-full bg-cyan-400" />

								<span className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-400">
									Organisational Transformation Partner
								</span>
							</div>

							<h1 className="font-syne text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
								Transforming
								<br />
								Organisations
								<br />
								Through{" "}
								<span className="text-cyan-400">
									People
								</span>
							</h1>

							<p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/60">
								We work with corporates, government, and development
								institutions to drive sustainable performance through
								leadership, culture, and enterprise development.
							</p>

							<div className="mt-10 flex flex-wrap items-center gap-4">
								<a
									href="#contact"
									className="rounded-sm bg-cyan-400 px-8 py-4 font-syne text-sm font-semibold uppercase tracking-[0.12em] text-slate-900 transition hover:-translate-y-0.5 hover:opacity-90"
								>
									Partner With Us
								</a>

								<a
									href="#services"
									className="rounded-sm border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.12em] text-white/70 transition hover:border-cyan-400 hover:text-cyan-400"
								>
									Explore Services
								</a>
							</div>
						</div>

						{/* STATS */}
						<div className="flex flex-col gap-6 self-end">
							{[
								["20+", "Years Experience"],
								["50+", "Clients Served"],
								["3", "Core Pillars"],
							].map(([value, label]) => (
								<div
									key={label}
									className="border border-cyan-400/20 bg-white/5 p-6 text-right"
								>
									<div className="font-syne text-5xl font-bold leading-none text-cyan-400">
										{value}
									</div>

									<div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
										{label}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* VALUE STRIP */}
				<section className="overflow-hidden bg-cyan-400 px-6 py-5 lg:px-12">
					<div className="grid grid-cols-2 md:grid-cols-6 items-center gap-4 md:gap-10">
						{[
							"Leadership Development",
							"Culture Change",
							"Enterprise & Supplier Development",
							"Change Management",
							"Strategy Facilitation",
							"B-BBEE Aligned",
						].map((item) => (
							<div
								key={item}
								className="flex items-center gap-3"
							>
								<div className="h-1.5 w-1.5 rounded-full bg-slate-900/40" />

								<span className="font-syne text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
									{item}
								</span>
							</div>
						))}
					</div>
				</section>
				<section
					id="about"
					className="grid lg:grid-cols-2"
				>
					<div className="flex flex-col justify-center bg-[#0B1929] px-6 py-20 lg:px-12">
						<p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-cyan-400">
							Who We Are
						</p>

						<h2 className="font-syne text-4xl font-bold leading-tight text-white md:text-5xl">
							Beyond Traditional{" "}
							<span className="text-cyan-400">
								Consulting
							</span>
						</h2>

						<p className="mt-6 text-base font-light leading-8 text-white/60">
							Freedom 27 is an organisational transformation
							partner that operates at the intersection of
							strategy, leadership, and human behaviour.
						</p>

						<p className="mt-4 text-base font-light leading-8 text-white/60">
							Our work goes beyond traditional consulting —
							we focus on real behavioural change, enabling
							leaders and teams to operate with clarity,
							accountability, and purpose.
						</p>

						<div className="mt-10 flex flex-wrap gap-3">
							{[
								"Empowerment",
								"Authenticity",
								"Excellence",
								"Resilience",
								"Freedom",
							].map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-cyan-400"
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					<div className="relative min-h-[500px] overflow-hidden ">
						<img
							src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1778693829/Freedom27_Business_Profile_1_wflyx2.png"
							alt="Organisational transformation"
							className="h-full w-full object-cover opacity-50"
						/>

						<div className="absolute inset-0 to-transparent" />
					</div>
				</section>
				{/* SERVICES */}
				<section
					id="services"
					className="bg-slate-50 px-6 py-24 lg:px-12"
				>
					<div className="mx-auto max-w-3xl text-center">
						<p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-700">
							What We Do
						</p>

						<h2 className="mt-4 font-syne text-4xl font-bold text-slate-900 md:text-5xl">
							Our <span className="text-sky-700">Services</span>
						</h2>

						<p className="mt-6 text-lg font-light text-slate-500">
							We bridge performance and wellbeing across
							integrated service areas.
						</p>
					</div>

					<div className="mx-auto mt-16 grid max-w-7xl gap-px bg-slate-200 lg:grid-cols-3">
						{services.map((service) => (
							<div
								key={service.number}
								className="group bg-white p-8 transition hover:border-t-cyan-400 hover:bg-slate-50"
							>
								<div className="text-xs font-bold tracking-[0.2em] text-slate-400">
									{service.number}
								</div>

								<h3 className="mt-6 font-syne text-2xl font-semibold leading-tight text-slate-900">
									{service.title}
								</h3>

								<p className="mt-4 text-sm leading-7 text-slate-500">
									{service.description}
								</p>

								<ul className="mt-6 space-y-3">
									{service.items.map((item) => (
										<li
											key={item}
											className="flex items-start gap-3 text-sm text-slate-700/80"
										>
											<span className="mt-2 h-1 w-1 rounded-full bg-cyan-400" />
											{item}
										</li>
									))}
								</ul>
							</div>
						))}

						{/* SPECIAL CARD */}
						<div className="border-t-4 border-cyan-400 bg-[#0B1929] p-8">
							<div className="text-xs font-bold tracking-[0.2em] text-cyan-400/50">
								Tools
							</div>

							<h3 className="mt-6 font-syne text-2xl font-semibold text-white">
								Assessment & Diagnostic
							</h3>

							<p className="mt-4 text-sm leading-7 text-white/50">
								Science-backed tools to understand
								individuals, teams, and organisations.
							</p>

							<ul className="mt-6 space-y-3">
								{[
									"Enneagram",
									"360° Assessment",
									"Brainprofile",
									"Psychometric",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-3 text-sm text-cyan-400"
									>
										<span className="mt-2 h-1 w-1 rounded-full bg-cyan-400" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
				{/* APPROACH */}
				<section className="bg-navy px-6 py-24 lg:px-12">
					<div className="mx-auto max-w-7xl">
						<div className="mb-20 text-center">
							<p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-accent">
								Our Methodology
							</p>

							<h2 className="font-display text-4xl font-bold text-white md:text-5xl">
								The Five-Stage{" "}
								<span className="text-accent">
									Framework
								</span>
							</h2>
						</div>

						<div className="relative grid gap-px bg-accent/10 lg:grid-cols-5">
							{/* connector line */}
							<div className="absolute left-[10%] right-[10%] top-[48px] hidden h-px bg-accent/20 lg:block" />

							{[
								{
									number: "01",
									title: "Diagnose",
									desc: "Understanding the real challenge, not just the symptoms, through structured conversations and contextual insight.",
								},
								{
									number: "02",
									title: "Align",
									desc: "Creating clarity around expectations, behaviours, communication, and outcomes so leaders and teams move as one.",
								},
								{
									number: "03",
									title: "Facilitate",
									desc: "Executive coaching, team sessions, and structured interventions that guide meaningful reflection and behavioural development.",
								},
								{
									number: "04",
									title: "Embed",
									desc: "Translating insight into practical action, accountability frameworks, and measurable commitments that stick.",
								},
								{
									number: "05",
									title: "Sustain",
									desc: "Ongoing support to reinforce change and ensure transformation has long-term, compounding impact on the organisation.",
								},
							].map((stage) => (
								<div
									key={stage.number}
									className="relative z-10 bg-navy px-6 py-12 text-center"
								>
									<div className="relative z-20 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-navy">
										<span className="font-display text-sm font-bold text-accent">
											{stage.number}
										</span>
									</div>

									<h3 className="font-display text-xl font-semibold text-white">
										{stage.title}
									</h3>

									<p className="mt-4 text-sm font-light leading-7 text-white/40">
										{stage.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ESD */}
				<section
					id="esd"
					className="bg-offWhite px-6 py-24 lg:px-12"
				>
					<div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
						{/* LEFT */}
						<div>
							<p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-blue">
								Enterprise & Supplier Development
							</p>

							<h2 className="font-display text-4xl font-bold text-navy md:text-5xl">
								ESD as a{" "}
								<span className="text-blue">
									Strategic Driver
								</span>
							</h2>

							<p className="mt-6 text-base font-light leading-8 text-gray">
								ESD is no longer a compliance requirement —
								it is a strategic driver of inclusive growth,
								sustainable supply chains, and long-term
								business value.
							</p>

							<div className="mt-10 space-y-4">
								{[
									{
										title: "Enterprise Development",
										desc: "Supporting emerging businesses to become viable and sustainable through structured incubation and coaching.",
									},
									{
										title: "Supplier Development",
										desc: "Strengthening existing suppliers to meet corporate standards, scale their operations, and achieve B-BBEE alignment.",
									},
									{
										title: "Strategic Alignment",
										desc: "Ensuring ESD initiatives are aligned to business objectives, B-BBEE requirements, and industry demands.",
									},
								].map((pillar) => (
									<div
										key={pillar.title}
										className="border-l-4 border-accent bg-white px-6 py-5"
									>
										<h3 className="font-display text-lg font-semibold text-navy">
											{pillar.title}
										</h3>

										<p className="mt-2 text-sm font-light leading-7 text-gray">
											{pillar.desc}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* RIGHT */}
						<div className="grid gap-3 md:grid-cols-2">
							{[
								"SMME Incubation & Development Programmes",
								"Market Access & Sustainability Support",
								"Business Coaching for Emerging Enterprises",
								"ESD Programme Evaluation & Impact Measurement",
								"Monitoring & Evaluation (M&E) and Reporting",
								"Government & Donor-Funded Programme Delivery",
							].map((item) => (
								<div
									key={item}
									className="rounded-sm bg-navy px-5 py-5 text-sm font-medium leading-6 text-accent"
								>
									{item}
								</div>
							))}

							<div className="rounded-sm bg-navy px-5 py-5 text-sm font-medium leading-6 text-accent md:col-span-2">
								Supplier Readiness & Onboarding Support
							</div>
						</div>
					</div>
				</section>
				{/* CLIENTS */}
				<section
					id="clients"
					className="bg-[#0B1929] px-6 py-20 lg:px-12"
				>
					<div className="text-center">
						<p className="text-xs uppercase tracking-[0.22em] text-cyan-400">
							Trusted By
						</p>

						<h2 className="mt-4 font-syne text-4xl font-bold text-offwhite">
							Our Clients
						</h2>
					</div>

					<div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-4 bg-offWhite rounded-3xl">
						{/* {clients.map((client) => (
							<div
								key={client}
								className="rounded-sm border border-white/10 bg-white/5 px-6 py-3 font-syne text-xs font-semibold uppercase tracking-[0.14em] text-white/60 transition hover:bg-cyan-400/10 hover:text-cyan-400"
							>
								{client}
							</div>
						))} */}
						<LogoCarousel logos={affiliates} />
					</div>
				</section>
				{/* CONTACT */}
				<section
					id="contact"
					className=" bg-slate-50  px-6 py-24 lg:px-12"
				>
					<div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
						<div>
							<p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-700">
								Let&apos;s Talk
							</p>

							<h2 className="mt-4 font-syne text-4xl font-bold text-[#0B1929] md:text-5xl">
								Partner <span className="text-sky-700">With Us</span>
							</h2>

							<p className="mt-6 max-w-md text-lg font-light leading-8 text-slate-500">
								Ready to transform your organisation?
								Let&apos;s start with a conversation.
							</p>

							<div className="mt-10 space-y-6">
								<div className="flex gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1929]">
										<Phone className="h-4 w-4 text-cyan-400" />
									</div>

									<div>
										<div className="text-xs uppercase tracking-[0.14em] text-slate-400">
											Phone
										</div>

										<a href="tel:+27837848001" className="mt-1 text-[#0B1929]">
											083 784 8001
										</a>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1929]">
										<Mail className="h-4 w-4 text-cyan-400" />
									</div>

									<div>
										<div className="text-xs uppercase tracking-[0.14em] text-slate-400">
											Email
										</div>

										<a href="mailto:breakfree@freedom27.co.za" className="mt-1 text-[#0B1929]">
											breakfree@freedom27.co.za
										</a>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1929]">
										<MapPin className="h-4 w-4 text-cyan-400" />
									</div>

									<div>
										<div className="text-xs uppercase tracking-[0.14em] text-slate-400">
											Address
										</div>

										<div className="mt-1 text-[#0B1929]">
											192 Cradock Ave, Lyttlelton Manor
											<br />
											Centurion, 0157
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* FORM */}
						<Form method="post" className="space-y-4 text-black">
							<div className="grid gap-4 md:grid-cols-2 ">
								<div>
									<input
										name="fullName"
										type="text"
										placeholder="Full Name"
										className="w-full rounded-sm border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-cyan-400"
									/>

									{actionData?.errors?.fullName && (
										<p className="mt-2 text-sm text-red-500">
											{actionData.errors.fullName}
										</p>
									)}
								</div>

								<input
									name="organisation"
									type="text"
									placeholder="Organisation"
									className="w-full rounded-sm border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-cyan-400"
								/>
							</div>

							<div className="grid gap-4 md:grid-cols-2">
								<div>
									<input
										name="email"
										type="email"
										placeholder="Email Address"
										className="w-full rounded-sm border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-cyan-400"
									/>

									{actionData?.errors?.email && (
										<p className="mt-2 text-sm text-red-500">
											{actionData.errors.email}
										</p>
									)}
								</div>

								<input
									name="phone"
									type="tel"
									placeholder="Phone Number"
									className="w-full rounded-sm border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-cyan-400"
								/>
							</div>

							<input
								name="service"
								type="text"
								placeholder="Service of Interest"
								className="w-full rounded-sm border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-cyan-400"
							/>

							<div>
								<textarea
									name="message"
									placeholder="Tell us about your organisation's needs and transformation goals..."
									className="min-h-[140px] w-full resize-y rounded-sm border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-cyan-400"
								/>

								{actionData?.errors?.message && (
									<p className="mt-2 text-sm text-red-500">
										{actionData.errors.message}
									</p>
								)}
							</div>

							{actionData?.errors?.server && (
								<p className="text-sm text-red-500">
									{actionData.errors.server}
								</p>
							)}

							{actionData?.success && (
								<p className="text-sm text-green-600">
									Enquiry submitted successfully.
								</p>
							)}

							<button
								type="submit"
								disabled={isSubmitting}
								className="rounded-sm bg-cyan-400 px-8 py-4 font-syne text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-cyan-500 disabled:opacity-50"
							>
								{isSubmitting
									? "Submitting..."
									: "Submit Enquiry →"}
							</button>
						</Form>
					</div>
				</section>
			</div>
		</MainLayout>
	);
}

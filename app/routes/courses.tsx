import MainLayout from "~/components/layout/main";
import Header from "~/components/text/header";

export default function Page() {
	return (
		<MainLayout>
			<div className="flex flex-col space-y-32 py-5">
				<Header
					title="BREATHING, MEDITATION, ENERGY, PRANAYAMA"
					subTitile="Online Courses and Private Coaching"
					titleStyle="text-primary"
					containerStyle="justify-center items-center"
				/>
				<section className="flex flex-col w-full justify-start items-start px-24 py-5 space-y-28">
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
					<div className="flex flex-col space-y-10">
						<Header
							title="Courses"
							subTitile="These courses are designed for anyone wanting to further their
						understanding of the breath and mind, and their relationship to
						managing stress, improving energy, mental health and overall
						well-being."
							titleStyle="text-primary"
						/>

						<div className="grid grid-cols-2 gap-20 w-full">
							<div className="flex flex-col border border-accent h-fit">
								<div className="h-[25%] w-full">
									<img
										src="/images/breathwork.jpg"
										alt="breathwork"
										className="w-full h-full object-fill"
									/>
								</div>
								<div className="flex flex-col space-y-5 w-full p-4">
									<div className="flex flex-col space-y-1">
										<p className="text-primary font-medium text-2xl">
											LEVEL 1: Breathing & Meditation (5 modules)
										</p>
										<p className="font-light text-sm">
											Short course for ANYONE wanting to become a practitioner
										</p>
									</div>

									<p className="font-normal text-sm">
										Learn how to use your breathing techniques and mind training
										to De-stress, Feel Calm & More Alive
									</p>
									<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
										<li>Understand the mechanics of breathing</li>
										<li>
											Use your breath appropriately to exercise your diaphragm
											muscle to stabilise your core
										</li>
										<li>
											Perform breathing and breathwork consciously and
											skillfully
										</li>
										<li>Create inner ease with this key wellness component</li>
										<li>
											Learn how to calm your nervous system using breathwork
										</li>
										<li>Breathing for de-stressing & relaxation</li>
										<li>
											Learn how to activate mental clarity with specific
											techniques
										</li>
										<li>
											Learn how to self-diagnose your mental state using your
											breath
										</li>
									</ul>

									<p className="text-primary font-medium text-lg">
										CURRICULUM LEVEL 1
									</p>
									<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
										<li>
											<span className="text-accent font-medium">
												Module  1 – Understanding the Breath:
											</span>{" "}
											Settling | Breathing Consciously | Science of Breathing |
											Science and Mechanics of Breathing | EXTRA: 5 Minutes Will
											Change Your Life
										</li>
										<li>
											<span className="text-accent font-medium">
												Module 2 – Stress Reduction:
											</span>{" "}
											Nervous System, Breath and Stress | Importance of the
											Diaphragm | Nasal Breathing | Stress Reduction | EXTRA:
											Create Balance with Your Breath
										</li>
										<li>
											<span className="text-accent font-medium">
												Module 3 – Breathing Practices: 
											</span>{" "}
											Breathing Techniques Manual | Practices: Conscious Breath
											Awareness | 3-Part Breath / 5 Breaths per Minute|
											Alternate Nostril Breathing | Stomach Pumping Breath |
											Humming / Bee Breath
										</li>
										<li>
											<span className="text-accent font-medium">
												Module 4 – Understanding the Mind: 
											</span>{" "}
											Centering | The Science of Mind Faculty | Meditation,
											Mindfulness & Mind Training | Preparing for Meditation
											Practice | Motivation, Intention, Affirmation | EXTRA:
											Happiness, Emotions, Mind
										</li>
										<li>
											<span className="text-accent font-medium">
												Module 5 – Meditation Practices:
											</span>{" "}
											Mind Training Techniques | Practices: Mindfulness
											Meditations | Meditation on Sound | Meditations for
											Relaxation | Meditation on Thought Clouds | Meditation
											Inquiry | Heart Nourishing Meditation 
										</li>
									</ul>
								</div>
							</div>
							<div className="flex flex-col border border-accent h-fit">
								<div className="h-[25%] w-full">
									<img
										src="/images/advanced.jpg"
										alt="advanced"
										className="w-full h-full object-fill"
									/>
								</div>
								<div className="flex flex-col space-y-5 w-full p-4">
									<div className="flex flex-col space-y-1">
										<p className="text-primary font-medium text-2xl">
											LEVEL 2: Advanced Breathwork & Energy (5 modules)
										</p>
										<p className="font-light text-sm">
											Short course for ANYONE wanting to become a practitioner
										</p>
									</div>

									<p className="font-normal text-sm">
										Learn about the subtle Energy Body, prana, and how to use
										pranayama, mudra, & bandha to cleanse, balance and restore
									</p>
									<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
										<li>Understand the fundamental technique of pranayama</li>
										<li>
											Learn how to apply breath holds skillfully and
											appropriately
										</li>
										<li>
											Perform pranayama techniques in alignment to the nadis and
											chakras
										</li>
										<li>
											Learn how to advance your own breathing practice
											progressively
										</li>
										<li>
											Study multiple breathing practices from the 3 main
											categories of energising, calming and balancing
										</li>
										<li>
											Expand your practices of energy and prana into the fields
											of colour and sound vibration
										</li>
										<li>
											Gain confidence in teaching breathing techniques
											(applicable for teachers/instructors)
										</li>
									</ul>

									<p className="text-primary font-medium text-lg">
										CURRICULUM LEVEL 2
									</p>
									<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
										<li>
											<span className="text-accent font-medium">
												Module  1 – Prana:
											</span>{" "}
											Defining Prana | The Breath as Bio-Feedback | Energy Body
											(Pranamaya Kosha) | Increasing Awareness
										</li>
										<li>
											<span className="text-accent font-medium">
												Module 2 – Pranayama, Mudra, Bandha:
											</span>{" "}
											Understanding Pranayama | Mudra | Bandha
										</li>
										<li>
											<span className="text-accent font-medium">
												Module 3 – The Energetic Body: 
											</span>{" "}
											Energy Anatomy | Chakras
										</li>
										<li>
											<span className="text-accent font-medium">
												Module 4 – Practicing Pranayama: 
											</span>{" "}
											Overview of Pranayama Techniques | Pranayama Technique:
											Ujjayi, Surya Bedhana, Bhastrika, Sheetali & Seetkari,
											Brahamari, Nadi Shodhana  | EXTRA: Teaching Breathwork &
											Pranayama
										</li>
										<li>
											<span className="text-accent font-medium">
												Module 5 – Further Energy Exploration:
											</span>{" "}
											Sensing Your Energy Body | Deeper Understanding of Prana |
											Pranic Stress | Colour | Sound | EXTRA: Energising,
											Rejuvenation & Soothing Breathing Techniques
										</li>
										<li>
											<span className="text-accent font-medium">
												Assignment and Case Study:
											</span>{" "}
											this is for those wishing to certify
											<span>
												{
													"{Additionally for yoga teachers, successful completion of Level 1+2 will provide you with an internationally recognised 50hr Advanced Certification}"
												}
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="flex flex-col space-y-10">
						<Header title="Price" subTitile="" titleStyle="text-primary" />
					</div> */}
				</section>
			</div>
		</MainLayout>
	);
}

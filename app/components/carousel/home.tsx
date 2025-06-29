import { useState } from "react";

const items = [
	{ title: "Deck 1", description: "This is card one." },
	{ title: "Deck 2", description: "This is card two." },
	{ title: "Deck 3", description: "This is card three." },
	{ title: "Deck 4", description: "This is card four." },
];

export default function Carousel() {
	const [index, setIndex] = useState(0);

	const next = () => {
		setIndex((prev) => (prev + 1) % items.length);
	};

	const prev = () => {
		setIndex((prev) => (prev - 1 + items.length) % items.length);
	};

	const visibleItems = [
		items[index % items.length],
		items[(index + 1) % items.length],
	];

	return (
		<section className="w-full overflow-hidden bg-white py-8 relative">
			<div className="flex items-center justify-between mb-4 px-6">
				<button onClick={prev}>&larr;</button>
				<button onClick={next}>&rarr;</button>
			</div>

			<div className="flex transition-transform duration-500 px-6 space-x-6">
				{visibleItems.map((item, i) => (
					<div
						key={i}
						className="w-full md:w-1/2 flex-shrink-0 rounded-xl bg-gray-100 p-6 shadow"
					>
						<h3 className="text-lg font-semibold">{item.title}</h3>
						<p className="text-sm mt-2 text-gray-600">{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

import { useState, useEffect } from "react";

export function useScroll(threshold = 10) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > threshold);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [threshold]);

	return isScrolled;
}

import { motion } from "framer-motion";

export type StrokeStyle =
	| "solid"
	| "dashed"
	| "dotted"
	| "double"
	| "wavy"
	| "zigzag"
	| "scribble"
	| "brush"
	| "neon"
	| "gradient";

interface SquigglyLineProps {
	isVisible: boolean;
	width?: number;
	strokeStyle?: StrokeStyle;
	color?: string;
	thickness?: number;
}

export function SquigglyLine({
	isVisible,
	width = 60,
	strokeStyle = "solid",
	color = "#5e7e9d",
	thickness = 2,
}: SquigglyLineProps) {
	const getStrokeDashArray = () => {
		switch (strokeStyle) {
			case "dashed":
				return "8,4";
			case "dotted":
				return "2,3";
			case "double":
				return "none";
			case "brush":
				return "none";
			case "neon":
				return "none";
			default:
				return "none";
		}
	};

	const getPath = () => {
		const midWidth = width / 2;
		const quarterWidth = width / 4;
		const threeQuarterWidth = (width * 3) / 4;

		switch (strokeStyle) {
			case "wavy":
				return `M2 6 Q${quarterWidth} 1 ${midWidth} 6 Q${threeQuarterWidth} 11 ${
					width - 2
				} 6`;
			case "zigzag":
				return `M2 6 L${quarterWidth} 2 L${midWidth} 6 L${threeQuarterWidth} 2 L${
					width - 2
				} 6`;
			case "scribble":
				return `M2 6 Q${width / 6} 2 ${width / 3} 7 Q${width / 2} 3 ${
					(width * 2) / 3
				} 6 Q${(width * 5) / 6} 9 ${width - 2} 5`;
			case "brush":
				return `M2 6 Q${quarterWidth} 1 ${midWidth} 6 T${width - 2} 6`;
			default:
				return `M2 6 Q${quarterWidth} 2 ${midWidth} 6 T${width - 2} 6`;
		}
	};

	const renderStroke = () => {
		if (strokeStyle === "double") {
			return (
				<>
					<motion.path
						d={getPath()}
						stroke={color}
						strokeWidth={thickness}
						strokeLinecap="round"
						fill="none"
						strokeDasharray={getStrokeDashArray()}
						initial={{ pathLength: 0 }}
						animate={{ pathLength: isVisible ? 1 : 0 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
							delay: isVisible ? 0.1 : 0,
						}}
					/>
					<motion.path
						d={`M2 4 Q${width / 4} 0 ${width / 2} 4 T${width - 2} 4`}
						stroke={color}
						strokeWidth={thickness * 0.7}
						strokeLinecap="round"
						fill="none"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: isVisible ? 1 : 0 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
							delay: isVisible ? 0.2 : 0,
						}}
					/>
				</>
			);
		}

		if (strokeStyle === "gradient") {
			return (
				<>
					<defs>
						<linearGradient
							id="squigglyGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="#3B82F6" />
							<stop offset="50%" stopColor="#8B5CF6" />
							<stop offset="100%" stopColor="#EC4899" />
						</linearGradient>
					</defs>
					<motion.path
						d={getPath()}
						stroke="url(#squigglyGradient)"
						strokeWidth={thickness}
						strokeLinecap="round"
						fill="none"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: isVisible ? 1 : 0 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
							delay: isVisible ? 0.1 : 0,
						}}
					/>
				</>
			);
		}

		if (strokeStyle === "neon") {
			return (
				<>
					<defs>
						<filter id="neonGlow">
							<feGaussianBlur stdDeviation="2" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
					<motion.path
						d={getPath()}
						stroke="#f69e21"
						strokeWidth={thickness}
						strokeLinecap="round"
						fill="none"
						filter="url(#neonGlow)"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: isVisible ? 1 : 0 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
							delay: isVisible ? 0.1 : 0,
						}}
					/>
				</>
			);
		}

		return (
			<motion.path
				d={getPath()}
				stroke={color}
				strokeWidth={strokeStyle === "brush" ? thickness * 1.5 : thickness}
				strokeLinecap={strokeStyle === "brush" ? "round" : "round"}
				fill="none"
				strokeDasharray={getStrokeDashArray()}
				opacity={strokeStyle === "brush" ? 0.8 : 1}
				initial={{ pathLength: 0 }}
				animate={{ pathLength: isVisible ? 1 : 0 }}
				transition={{
					duration: strokeStyle === "scribble" ? 0.8 : 0.5,
					ease: strokeStyle === "scribble" ? "easeInOut" : "easeInOut",
					delay: isVisible ? 0.1 : 0,
				}}
			/>
		);
	};

	return (
		<motion.div
			className="absolute -bottom-1 transform -translate-x-1/2"
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{
				opacity: isVisible ? 1 : 0,
				scale: isVisible ? 1 : 0.8,
			}}
			transition={{
				duration: 0.3,
				ease: "easeOut",
			}}
		>
			<svg
				width={width}
				height="12"
				viewBox={`0 0 ${width} 12`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{renderStroke()}
			</svg>
		</motion.div>
	);
}

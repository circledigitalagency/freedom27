import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";

interface BlogCardProps {
	title: string;
	excerpt: string;
	author: string;
	date: string;
	readTime: string;
	image: string;
	category: string;
	index: number;
}

export function BlogCard({
	title,
	excerpt,
	author,
	date,
	readTime,
	image,
	category,
	index,
}: BlogCardProps) {
	return (
		<motion.article
			className="bg-white shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group border border-sage-100"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
			whileHover={{ y: -8 }}
		>
			<div className="relative overflow-hidden">
				<motion.img
					src={image}
					alt={title}
					className="w-full h-36 object-cover"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				/>
				<div className="absolute top-4 left-4">
					<span className="bg-white/90 backdrop-blur-sm text-sage-700 px-3 py-1 rounded-full text-sm font-light">
						{category}
					</span>
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>

			<div className="p-6">
				<motion.h3
					className="text-lg font-normal text-accent mb-3 line-clamp-2  transition-colors"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: index * 0.1 + 0.2 }}
				>
					{title}
				</motion.h3>

				<motion.p
					className="mb-4 font-light line-clamp-3 leading-relaxed"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: index * 0.1 + 0.3 }}
				>
					{excerpt}
				</motion.p>

				<motion.div
					className="flex items-center justify-between text-sm text-sage-500"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: index * 0.1 + 0.4 }}
				>
					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-1">
							<User size={14} />
							<span className="text-sm">{author}</span>
						</div>
						<div className="flex items-center space-x-1">
							<Calendar size={14} />
							<span className="text-sm">{date}</span>
						</div>
					</div>
					<div className="flex items-center space-x-1">
						<Clock size={14} className="text-secondary" />
						<span className="text-sm text-secondary">{readTime}</span>
					</div>
				</motion.div>
			</div>
		</motion.article>
	);
}

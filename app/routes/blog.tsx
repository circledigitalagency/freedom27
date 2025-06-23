import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { BlogCard } from "~/components/card/blog";
import MainLayout from "~/components/layout/main";
import { blogPosts } from "~/lib/data";

export default function Page() {
	return (
		<MainLayout>
			<div className="flex flex-col ">
				<div className="py-10 bg-gray-50">
					{blogPosts.slice(0, 1).map((post, index) => (
						<div
							className="flex sm:flex-row flex-col space-x-5 sm:h-[60vh] h-fit w-full"
							key={index}
						>
							<div className="h-40 sm:w-[50%]">
								<img src={post.image} alt="image" />
							</div>
							<div className="flex flex-col space-y-4 py-8 sm:w-[50%]">
								<div className="bg-accent/80 flex justify-center items-center p-2 sm:w-[15%] w-[25%]">
									<p className="text-white text-sm">Latest Article</p>
								</div>
								<div className="flex items-center space-x-1">
									<Clock size={14} className="text-secondary" />
									<span className="text-sm text-secondary">
										{post.readTime}
									</span>
								</div>
								<motion.h3
									className="text-3xl font-normal text-accent mb-3 transition-colors sm:w-[70%]"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: index * 0.1 + 0.2 }}
								>
									{post.title}
								</motion.h3>

								<motion.p
									className="mb-4 font-light leading-relaxed sm:w-[80%] w-[90%]"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: index * 0.1 + 0.3 }}
								>
									{post.excerpt}
								</motion.p>

								<motion.div
									className="flex space-x-1 hover:underline cursor-pointer text-secondary items-center text-sm text-sage-500"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: index * 0.1 + 0.4 }}
								>
									<p>Read more </p>
									<ArrowRight size={18} />
								</motion.div>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col py-5 sm:px-32 px-5">
					<div className="flex flex-col space-y-5">
						<div className="flex flex-col space-y-2">
							<p className="font-medium text-2xl text-primary">
								Our Recent Articles
							</p>
							<p className="font-light text-sm">
								Stay informed with our latest insights
							</p>
						</div>
						<section className="flex flex-row w-full justify-between items-start space-x-10 py-10 ">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{blogPosts.slice(1).map((post, index) => (
									<BlogCard key={post.title} {...post} index={index} />
								))}
							</div>
						</section>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

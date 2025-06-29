import { json } from "@remix-run/react";
import MainLayout from "~/components/layout/main";
import { blogPosts } from "~/lib/data";

export async function loader({ params }: { params: { id: string } }) {
	const blog = blogPosts.find((p) => p.title === params.id);
	if (!blog) throw new Response("Blog Not Found", { status: 404 });
	return json(blog);
}
export default function Page() {
	return (
		<MainLayout>
			<div className="flex flex-col"></div>
		</MainLayout>
	);
}

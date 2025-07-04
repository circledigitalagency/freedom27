import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

export default function Logo({ style }: { style: string }) {
	return (
		<Link to="/">
			<div className={style}>
				<img
					src="https://res.cloudinary.com/dg1g6ctku/image/upload/v1751621461/freedom-logo_uxwzls.png"
					alt="logo"
					className="object-fill"
				/>
			</div>
		</Link>
	);
}

import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

export default function Logo({ style }: { style: string }) {
	return (
		<Link to="/">
			<div className={style}>
				<img
					src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1757430888/freedom-logo-black_sz0ppd.svg"
					alt="logo"
					className="object-fill"
				/>
			</div>
		</Link>
	);
}

import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

export default function Logo({ style }: { style: string }) {
	return (
		<Link to="/">
			<div className={style}>
				<img
					src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1778691360/freedom-final-logo-white_pzi24z.svg"
					alt="logo"
					className="object-fill"
				/>
			</div>
		</Link>
	);
}

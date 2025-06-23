import { Link } from "@remix-run/react";

export default function Logo() {
	return (
		<Link to="/">
			<div className="h-20 w-56">
				<img
					src="/images/freedom-logo.png"
					alt="logo"
					className="object-fill"
				/>
			</div>
		</Link>
	);
}
